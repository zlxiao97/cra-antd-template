module.exports = (data) => `const StatefulHOC = (Stateless) => (props) => {
  return <Stateless {...props} />;
};

export default StatefulHOC;
`;
