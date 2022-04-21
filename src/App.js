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
      <ThemeProvider>
        <Layout />;
      </ThemeProvider>
    </ModelProvider>
  );
};
