import { Menu as AntdMenu } from "antd";
import { createMenuItem } from "./utils/createMenuItem";
import { useModel } from "@/context/model";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigateTo = useNavigate();
  const [routes] = useModel("routes");
  return (
    <AntdMenu
      theme="dark"
      mode="horizontal"
      onClick={({ key }) => {
        navigateTo(key);
      }}
    >
      {routes.map(createMenuItem)}
    </AntdMenu>
  );
};

export default Menu;
