module.exports = (data) => `import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts.json";

const Stateless = () => {
  return <PageLayout layouts={layouts}></PageLayout>;
};

export default Stateless;
`;
