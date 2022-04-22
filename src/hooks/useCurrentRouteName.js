import { useMemo } from "react";
import { useLocation } from "react-router";
import { getLeafNodes } from "@/config/routes";
import { get } from "lodash";

export default () => {
  const location = useLocation();
  const name = useMemo(
    () =>
      get(
        getLeafNodes().find((item) => item.path === location.pathname),
        "name",
        ""
      ),
    [location.pathname]
  );
  return name;
};
