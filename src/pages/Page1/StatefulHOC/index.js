export default (Stateless) => (props) => {
  const data = {};
  const callback = {};
  return <Stateless {...props} {...data} {...callback} />;
};
