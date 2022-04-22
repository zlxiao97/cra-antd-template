import { flattenDeep } from "lodash";

export const delay = (duration = 1000) =>
  new Promise((resolve, reject) => setTimeout(resolve, duration));

export const getRoutesLeaf = (routes) => {
  const resolveChildren = (routes, base) =>
    routes.map((item) => {
      if (item?.children?.length) {
        return resolveChildren(item.children, `${base}/${item.path}`);
      }
      return {
        ...item,
        path: `${base}/${item.path}`
      };
    });
  return flattenDeep(resolveChildren(routes, ""));
};
