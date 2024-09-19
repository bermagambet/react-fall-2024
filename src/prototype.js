import React from "react";

// JS -> not clearly OOP
// JS - abstract, interface, ...
// class ...

const PrototypeComp = () => {
  // a -> any type
  // performance -> b, ..., a
  const a = {
    // parent
    prop: 0,
    __proto__: {
      // protype
      propInPrototype: 1,
    },
  };

  // ... 15 object in-between

  const b = {
    propForB: 1,
    __proto__: a,
  };

  console.log(b.propInPrototype); // undefined or 1

  return <div></div>;
};

export default PrototypeComp;
