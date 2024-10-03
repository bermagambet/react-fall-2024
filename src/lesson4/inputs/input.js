import React from "react";
import withInputs from "../withInputs";

// Component = (props)
const InputTemp = (props) => {
  console.log(props);

  return <input />;
};

const Input = withInputs(InputTemp);
export default Input;
