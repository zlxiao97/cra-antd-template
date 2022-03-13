import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const createRoute = (route) => {
  const { path, component: Compoent } = route;
  return (
    <Route key={uuidv4()} path={path} element={<Compoent />}>
      {route?.children?.length ? route.children.map(createRoute) : null}
    </Route>
  );
};

export const createRoutes = (routes) => {
  return routes.map(createRoute);
};
