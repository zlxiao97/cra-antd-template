import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout";
import { createRoutes } from "./utils/createRoutes";
import { useModel } from "@/context/model";
import { homePath } from "@/config/routes";
import config from "@/config/config";

const { asyncRoutes } = config;

const Router = () => {
  const [routes] = useModel("routes");
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={asyncRoutes ? "/" : homePath} />}
          ></Route>
          {createRoutes(routes)}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
