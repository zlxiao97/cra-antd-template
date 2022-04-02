import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default () => {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  );
};
