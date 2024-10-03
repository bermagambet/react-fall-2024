import React from "react";

// props - default argument of components
// withHeader -> not component, but still function

// const withHeader = (Component)
// Component = () => {}

// const withHeader = (Component) => (props) => {

//}

// HOC - higher order component
// conditional rendering, generalization of functionality

// parent-child class relationship
const withInputs = (Component) => (props) => {
  // suffix, prefix -> input
  const { suffix, prefix, isUpdated, ...restProps } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {prefix}
      <Component {...restProps} />
      {suffix}
    </div>
  );
};

export default withInputs;
