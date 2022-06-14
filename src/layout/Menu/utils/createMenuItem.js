import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { Item, SubMenu } = Menu;

const createLeafNode = ({ path, name, hideInMenu }) =>
  hideInMenu ? null : <Item key={`/${path}`}>{name}</Item>;

const createSubMenu = ({ route, path, name, hideInMenu }) =>
  hideInMenu ? null : (
    <SubMenu key={uuidv4()} title={name}>
      {route.children.map((child) => {
        const { path: subPath } = child;
        return createMenuItem({
          ...child,
          path: `${path}/${subPath}`
        });
      })}
    </SubMenu>
  );

export const createMenuItem = (route) => {
  const { path, name, hideInMenu } = route;
  const _createMenuItem = route?.children?.length
    ? createSubMenu
    : createLeafNode;
  return _createMenuItem({ route, path, name, hideInMenu });
};
