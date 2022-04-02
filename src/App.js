import { homePath } from "@/config/routes";
import Layout from "@/layout/Layout";
import useHomePage from "@/hooks/useHomePage";
import "@/theme/main.less";

export default () => {
  useHomePage(homePath);
  return <Layout />;
};
