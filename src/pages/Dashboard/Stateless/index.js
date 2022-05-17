import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts.json";

const Stateless = () => {
  return (
    <PageLayout layouts={layouts}>
      <div key="a">1</div>
      <div key="b">2</div>
      <div key="c">3</div>
    </PageLayout>
  );
};

export default Stateless;
