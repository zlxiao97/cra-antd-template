import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
