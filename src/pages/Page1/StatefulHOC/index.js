const StatefulHOC = (Stateless) => (props) => {
  return <Stateless {...props} />;
};

export default StatefulHOC;
