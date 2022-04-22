import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale/zh_CN";
import { homePath } from "@/config/routes";
import { ThemeProvider } from "@/context/theme";
import { ModelProvider } from "@/context/model";
import Layout from "@/layout/Layout";
import useHomePage from "@/hooks/useHomePage";
import "./global.less";

export default () => {
  useHomePage(homePath);
  return (
    <ModelProvider>
      <ConfigProvider locale={zh_CN}>
        <ThemeProvider>
          <Layout />;
        </ThemeProvider>
      </ConfigProvider>
    </ModelProvider>
  );
};
