import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.less";

const { Content: LayoutContent } = Layout;

const Content = () => {
  return (
    <LayoutContent className={styles.siteLayout}>
      <div className={styles.siteLayout__content}>
        <Outlet />
      </div>
    </LayoutContent>
  );
};

export default Content;
