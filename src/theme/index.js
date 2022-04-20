import breakpoints from "./utils/_grid.less";

export const createTheme = () => {
  const keyMap = {
    xs: "screenXS",
    sm: "screenSM",
    md: "screenMD",
    lg: "screenLG",
    xl: "screenXL",
    xxl: "screenXXL"
  };
  const up = (key) => {
    if (Object.keys(keyMap).includes(key)) {
      return `screen and (min-width: ${breakpoints[`${keyMap[key]}Min`]})`;
    }
    return "";
  };
  const down = (key) => {
    if (Object.keys(keyMap).includes(key)) {
      return `screen and (max-width: ${breakpoints[keyMap[key]]})`;
    }
    return "";
  };
  const theme = {
    breakpoints: {
      ...breakpoints,
      up,
      down
    }
  };
  return theme;
};
