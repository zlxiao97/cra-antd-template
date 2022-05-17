import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useHomePage = (homePath) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(homePath, { replace: true });
    }
  }, [homePath, location.pathname, navigate]);
};

export default useHomePage;
