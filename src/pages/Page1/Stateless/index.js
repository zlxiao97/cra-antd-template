import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts.json";

export default ({ ids: { l1, m1, r1, l2, r2 } }) => {
  return (
    <PageLayout layouts={layouts}>
      <div key="l1" id={l1}></div>
      <div key="m1" id={m1}></div>
      <div key="r1" id={r1}></div>
      <div key="l2" id={l2}></div>
      <div key="r2" id={r2}></div>
    </PageLayout>
  );
};
