import { Layout } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";

const { Header: LayoutHeader } = Layout;

const Header = () => {
  return (
    <LayoutHeader>
      <Logo />
      <Menu />
    </LayoutHeader>
  );
};

export default Header;
