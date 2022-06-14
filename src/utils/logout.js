import serviceConfig from "@/config/service";

const { tokenStorageKey } = serviceConfig;

const logout = () => {
  localStorage.setItem(tokenStorageKey, "");
  window.location.reload();
};

export default logout;
