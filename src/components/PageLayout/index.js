import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./index.module.less";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default (props) => {
  const defaultProps = {
    className: styles.layout,
    isDraggable: false,
    isResizable: false,
    breakpoints: { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    // rowHeight: 100,
    // margin: [20, 20]
  };
  return (
    <ResponsiveGridLayout {...defaultProps} layouts={props.layouts}>
      {props.children}
    </ResponsiveGridLayout>
  );
};
