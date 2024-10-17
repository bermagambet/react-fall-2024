import React, { memo, useContext } from "react";
import { context } from "./";

// useMemo, useCallback, useState, useEffect ...

// memo - if my props didn't change, do not re-render

// Component called Child15 it represents 15th nested child
const Child15 = memo(() => {
  const { a } = useContext(context);

  console.log("render in child15");
  console.log("consumed value is: ", a);
  return <div></div>;
});

export default Child15;
