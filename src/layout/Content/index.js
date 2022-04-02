import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.less";

const { Content } = Layout;

export default () => {
  return (
    <Content className={styles.siteLayout}>
      <div className={styles.siteLayout__content}>
        <Outlet />
      </div>
    </Content>
  );
};
