import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Menu from "./layout/Menu";
import "./App.css";
import Footer from "./layout/Footer";

const { Header, Content } = Layout;

export default (props) => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
