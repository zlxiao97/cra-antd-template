import { Outlet, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const createRoute = (route) => {
  const { path, component } = route;
  const Component = component
    ? typeof component === "string"
      ? require(`@/${component}`).default
      : component
    : Outlet; // 如果没有component，认为必定含有子路由，component默认为Outlet
  return (
    <Route key={uuidv4()} path={path} element={<Component />}>
      {route?.children?.length ? route.children.map(createRoute) : null}
    </Route>
  );
};

export const createRoutes = (routes) => {
  return routes.map(createRoute);
};
