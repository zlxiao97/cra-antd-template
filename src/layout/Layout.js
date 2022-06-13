import { Layout as AntdLayout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <AntdLayout>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </AntdLayout>
    </>
  );
};

export default Layout;
