export default (Stateless) => (props) => {
  const data = {
    ids: {
      l1: 1,
      m1: 2,
      r1: 3,
      l2: 4,
      r2: 5
    }
  };
  const callback = {};
  return <Stateless {...props} {...data} {...callback} />;
};
