import { Menu as AntdMenu } from "antd";
import { createMenuItem } from "./utils/createMenuItem";
import { useModel } from "@/context/model";

const Menu = () => {
  const [routes] = useModel("routes");
  return (
    <AntdMenu theme="dark" mode="horizontal">
      {routes.map(createMenuItem)}
    </AntdMenu>
  );
};

export default Menu;
