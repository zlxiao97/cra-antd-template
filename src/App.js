import { homePath } from "@/config/routes";
import { ThemeProvider } from "@/context/theme";
import Layout from "@/layout/Layout";
import useHomePage from "@/hooks/useHomePage";
import "./global.less";

export default () => {
  useHomePage(homePath);
  return (
    <ThemeProvider>
      <Layout />;
    </ThemeProvider>
  );
};
