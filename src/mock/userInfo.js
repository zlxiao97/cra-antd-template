// mock数据生成语法：http://mockjs.com/examples.html
export default [
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
