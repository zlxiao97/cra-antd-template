import { Layout as AntdLayout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <AntdLayout>
        <Header />
        <Content />
        <Footer />
      </AntdLayout>
    </>
  );
};

export default Layout;
