export const homePath = '/dashboard'

export default [
  {
    name: "Dashboard",
    path: "dashboard",
    component: require("../pages/Dashboard").default,
    // hideInMenu:true
  },
  {
    name: "Page1",
    path: "page1",
    component: require("../pages/Page1").default
  }
];
