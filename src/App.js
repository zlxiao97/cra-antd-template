import { Layout } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Menu from "@/layout/Menu";
import "./App.css";
import Footer from "@/layout/Footer";
import { homePath } from "@/config/routes";
import { useEffect } from "react";

const { Header, Content } = Layout;

export default (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(homePath, { replace: true });
    }
  }, []);
  return (
    <>
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
    </>
  );
};
