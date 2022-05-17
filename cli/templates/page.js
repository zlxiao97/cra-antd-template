module.exports = (data) => `import StatefulHOC from "./StatefulHOC";
import Stateless from "./Stateless";

const ${data.name} = StatefulHOC(Stateless);

export default ${data.name};
`;
