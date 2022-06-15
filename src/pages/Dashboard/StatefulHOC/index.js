import { useAnimation } from "@zlxiao97/gsap-fade-enter-leave";
import { v4 as uuidV4 } from "uuid";

export default (Stateless) => (props) => {
  const [ids] = useAnimation([
    { targets: ["l1", "l2"], vars: { x: "-500px" } },
    {
      targets: ["r1", "r2"],
      vars: { x: `${document.body.clientWidth + 500}px` }
    },
    {
      targets: ["m1"],
      vars: { y: `-600px` }
    }
    ]);
  const data = { ids };
  return <Stateless {...props} {...data} />;
};
