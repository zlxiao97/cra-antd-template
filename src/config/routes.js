import { getRoutesLeaf } from "@/utils";
// import { Outlet } from "react-router-dom";
export const homePath = "/dashboard";
export const loginPath = "/login";

const routes = [
  {
    name: "Dashboard",
    path: "dashboard",
    component: "pages/Dashboard"
    // hideInMenu:true
    // component: Outlet, // 如果有子路由，父路由对应组件必须包含Outlet，否则无法显示子路由，如果不传component，则默认为Outlet
    // children: [
    //   {
    //     name: "Inner",
    //     path: "inner",
    //     component: "pages/Dashboard/Inner"
    //   }
    // ]
  },
  {
    name: "Page1",
    path: "page1",
    component: "pages/Page1"
  }
];

export default routes;

export const getLeafNodes = () => getRoutesLeaf(routes);
