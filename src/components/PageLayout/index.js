import classNames from "classnames";
import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./index.module.less";

const ResponsiveGridLayout = WidthProvider(Responsive);

const PageLayout = (props) => {
  const defaultProps = {
    className: classNames({
      [styles.layout]: true,
      [props.className]: true,
      [styles["dev-helper"]]: process.env.NODE_ENV === "development"
    }),
    isDraggable: false,
    isResizable: false,
    breakpoints: { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 }
    // rowHeight: 100,
    // margin: [0, 0]
  };
  return (
    <ResponsiveGridLayout {...defaultProps} {...props}>
      {props.children}
    </ResponsiveGridLayout>
  );
};

export default PageLayout;
