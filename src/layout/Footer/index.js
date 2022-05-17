import { Layout } from "antd";
import styles from "./index.module.less";

const { Footer: LayoutFooter } = Layout;

const Footer = () => {
  return <LayoutFooter className={styles.footer}></LayoutFooter>;
};

export default Footer;
