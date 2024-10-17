import React, { createContext, useState } from "react";
import Child from "./child";

// createContext creates context object for you apply Provider for your nested components
const context = createContext({
  a: undefined,
  b: undefined,
});

// !! Important, context object should be the same for .Provider, useContext, etc

// Provider, Consumer
// 1 object - provides something: vars, function, ...
// n objects - consume something: vars, function, ...

const ContextExample = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();

  console.log("render");
  return (
    <div>
      <context.Provider // context from above
        value={{
          a,
          b,
        }}
      >
        <button onClick={() => setA(a + "1")}>Click</button>
        <Child />
      </context.Provider>
    </div>
  );
};

export { context };
export default ContextExample;
