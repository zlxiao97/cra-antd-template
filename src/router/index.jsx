import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App";
import routes from "@/config/routes";
import { createRoutes } from "./utils/createRoutes";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {createRoutes(routes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
