import { useTheme } from "@/context/theme";
import { useEffect, useState } from "react";

const useMediaQuery = (_mediaQueryString) => {
  const theme = useTheme();
  const [matches, setMatches] = useState(false);
  let mediaQueryString = _mediaQueryString;
  if (typeof _mediaQueryString === "function") {
    mediaQueryString = _mediaQueryString(theme);
  }
  useEffect(() => {
    const handleResize = () => {
      setMatches(window.matchMedia(mediaQueryString).matches);
    };
    handleResize();
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [mediaQueryString]);
  return matches;
};

export default useMediaQuery;
