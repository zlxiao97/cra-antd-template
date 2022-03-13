import { Menu } from "antd";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link key="1" to="/dashboard">
          dashboard
        </Link>
      </Menu.Item>
    </Menu>
  );
};
