import React, { memo } from "react";
import Child15 from "./child15";

// useMemo, useCallback, useState, useEffect ...

// memo - if my props didn't change, do not re-render

// if I use "a" as a prop only to pass it further in my hierarchy - always a bad case

const Child = memo(() => {
  console.log("render in child");
  return <Child15 />;
});

export default Child;
