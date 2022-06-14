import logout from "@/utils/logout";
import { Col, Layout, Row, Menu as AntdMenu } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";
import config from "@/config/config";

const { auth } = config;
const { Header: LayoutHeader } = Layout;

const Header = () => {
  const handleClick = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };
  return (
    <LayoutHeader>
      <Row align="middle">
        <Col flex="1 1">
          <Logo />
          <Menu />
        </Col>
        <Col flex="0 1 auto">
          <AntdMenu theme="dark" onClick={handleClick}>
            {auth ? <AntdMenu.Item key="logout">退出登录</AntdMenu.Item> : null}
          </AntdMenu>
        </Col>
      </Row>
    </LayoutHeader>
  );
};

export default Header;
