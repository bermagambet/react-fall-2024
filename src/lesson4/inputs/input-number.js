import React, { useState } from "react";
import withInputs from "../withInputs";

const InputNumberTemp = (props) => {
  const [input, setInput] = useState("");

  console.log(props);

  const handleOnChange = ({ target: { value } }) => {
    if (+value >= 0 && +value <= 100) {
      // regex
      setInput(value);
    }
  };

  return <input onChange={handleOnChange} value={input} />;
};

const InputNumber = withInputs(InputNumberTemp);
export default InputNumber;
