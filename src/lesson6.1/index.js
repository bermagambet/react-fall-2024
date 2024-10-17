import { Button } from "antd";
import React from "react";
import { useOutletContext } from "react-router-dom";

const Lesson61 = () => {
  const { myProp1 } = useOutletContext();

  console.log(myProp1);

  return (
    <Button
      onClick={() => {
        // window.location - raw method of using routing
        // bad case, bad practice
        window.location.replace("https://www.google.com/");
      }}
    >
      navigate2
    </Button>
  );
};

export default Lesson61;
