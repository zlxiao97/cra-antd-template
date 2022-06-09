const { resolve } = require("path");
const fs = require("fs-extra");
const chokidar = require("chokidar");
const { Parser } = require("acorn");
const { get, debounce, capitalize, last } = require("lodash");
const pageTemplate = require("../templates/page");
const statefulTemplate = require("../templates/stateful");
const statelessTemplate = require("../templates/stateless");
const statelessConfigTemplate = require("../templates/config");

const ROOT_DIR = process.cwd();
const SRC_DIR = `${ROOT_DIR}/src`;
const CONFIG_DIR = `${SRC_DIR}/config`;
const PAGE_DIR = `${SRC_DIR}/pages`;

const scaffold = async (name) => {
  if (!fs.existsSync(resolve(PAGE_DIR, name))) {
    console.log(`Page ${name} was successfully generated !`);
    fs.mkdirsSync(`${PAGE_DIR}/${name}`);
    fs.mkdirsSync(`${PAGE_DIR}/${name}/StatefulHOC`);
    fs.mkdirsSync(`${PAGE_DIR}/${name}/Stateless`);
    fs.mkdirsSync(`${PAGE_DIR}/${name}/Stateless/config`);
    fs.outputFileSync(
      `${PAGE_DIR}/${name}/index.js`,
      pageTemplate({ name: last(name.split("/")) })
    );
    fs.outputFileSync(
      `${PAGE_DIR}/${name}/StatefulHOC/index.js`,
      statefulTemplate()
    );
    fs.outputFileSync(
      `${PAGE_DIR}/${name}/Stateless/index.js`,
      statelessTemplate()
    );
    fs.outputFileSync(
      `${PAGE_DIR}/${name}/Stateless/config/layouts.json`,
      statelessConfigTemplate()
    );
  }
};

const findInProperties = (route, key) =>
  get(route, "properties", []).find((item) => get(item, "key.name") === key);

const generate = (routes) => {
  routes.forEach((route) => {
    const componentPath = get(
      findInProperties(route, "component"),
      "value.value"
    );
    if (
      typeof componentPath === "string" &&
      componentPath.startsWith("pages/")
    ) {
      const name = last(componentPath.split("pages/"))
        .split("/")
        .map((str) => capitalize(str))
        .join("/");

      scaffold(name);
    }

    const childrenAST = findInProperties(route, "children");

    if (childrenAST) {
      generate(get(childrenAST, "value.elements", []));
    }
  });
};

const watcher = async () => {
  try {
    const raw = await fs.readFile(resolve(CONFIG_DIR, "routes.js"), "utf8");
    const ast = Parser.parse(raw, {
      sourceType: "module",
      ecmaVersion: 2020
    });
    const routesBlock = get(
      get(ast, "body", []).filter((block) => {
        if (
          block.type === "VariableDeclaration" &&
          get(block, "declarations[0].id.name") === "routes"
        ) {
          return true;
        }
        return false;
      }),
      "[0]"
    );
    const routes = get(routesBlock, "declarations[0].init.elements", []);
    generate(routes);
  } catch (e) {
    console.error(e);
  }
};

console.log(`watching ${CONFIG_DIR}...`);
chokidar
  .watch(`./routes.js`, {
    cwd: CONFIG_DIR,
    persistent: true,
    usePolling: true
  })
  .on("change", debounce(watcher, 1000));
