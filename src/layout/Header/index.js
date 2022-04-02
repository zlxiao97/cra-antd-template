import { Layout } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";

const { Header } = Layout;

export default () => {
  return (
    <Header>
      <Logo />
      <Menu />
    </Header>
  );
};
