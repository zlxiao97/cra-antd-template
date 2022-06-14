import { loginUser } from "@/services/user";
import { get } from "lodash";

export default (Stateless) => (props) => {
  const handleSubmit = async (values) => {
    const res = await loginUser(values);
    if (res.success) {
      props.setToken(get(res, "result.token"));
      window.location.reload()
    }
  };
  const data = {};
  const callback = {
    handleSubmit
  };
  return <Stateless {...props} {...data} {...callback} />;
};
