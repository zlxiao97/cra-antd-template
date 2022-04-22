// import { Outlet } from "react-router-dom";
export const homePath = "/dashboard";
export const loginPath = "/login";

export default [
  {
    name: "Dashboard",
    path: "dashboard",
    component: require("../pages/Dashboard").default,
    // hideInMenu:true
    // component: Outlet, // 如果有子路由，父路由对应组件必须包含Outlet，否则无法显示子路由，如果不传component，则默认为Outlet
    // children: [
    //   {
    //     name: "inner",
    //     path: "inner",
    //     component: require("../pages/Dashboard/Inner").default
    //   }
    // ]
  },
  {
    name: "Page1",
    path: "page1",
    component: require("../pages/Page1").default
  }
];
