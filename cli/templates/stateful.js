module.exports = (data) => `const StatefulHOC = (Stateless) => (props) => {
  const data = {};
  const callback = {};
  return <Stateless {...props} {...data} {...callback} />;
};

export default StatefulHOC;
`;
