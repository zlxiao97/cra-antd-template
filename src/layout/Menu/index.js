import { Menu as AntdMenu } from "antd";
import routes from "@/config/routes";
import { createMenuItem } from "./utils/createMenuItem";

const Menu = () => {
  return (
    <AntdMenu theme="dark" mode="horizontal">
      {routes.map(createMenuItem)}
    </AntdMenu>
  );
};

export default Menu;
