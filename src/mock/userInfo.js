// mock数据生成语法：http://mockjs.com/examples.html
export default [
  {
    api: "/login",
    method: "post",
    result: {
      token: "@string(32)"
    }
  },
  {
    api: "/user/info",
    method: "get",
    result: {
      userName: "@first @last",
      routes: [
        {
          name: "Page1",
          path: "page1",
          component: "pages/Page1"
        }
      ]
    }
  }
];
