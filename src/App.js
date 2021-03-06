import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale/zh_CN";
import { ThemeProvider } from "@/context/theme";
import { ModelProvider } from "@/context/model";
import Root from "./Root";
import "./global.less";

const App = () => {
  return (
    <ModelProvider>
      <ConfigProvider locale={zh_CN}>
        <ThemeProvider>
          <Root/>
        </ThemeProvider>
      </ConfigProvider>
    </ModelProvider>
  );
};

export default App;
