import { v4 as uuidV4 } from "uuid";

export default (Stateless) => (props) => {
  const ids = {
    l1: uuidV4(),
    m1: uuidV4(),
    r1: uuidV4(),
    l2: uuidV4(),
    r2: uuidV4()
  };
  const data = { ids };
  return <Stateless {...props} {...data} />;
};
