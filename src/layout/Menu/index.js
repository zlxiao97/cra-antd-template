import { Menu } from "antd";
import routes from "../../config/routes";
import { createMenuItem } from "./utils/createMenuItem";

export default () => {
  return (
    <Menu theme="dark" mode="horizontal">
      {routes.map(createMenuItem)}
    </Menu>
  );
};
