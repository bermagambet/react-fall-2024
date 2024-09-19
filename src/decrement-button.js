import React, { useState } from "react";

const DecrementButton = () => {
  const [state, setState] = useState(0);
  // async function

  // state = 0, => 1x
  const decr = () => {
    const newProm = new Promise((resolve) => {
      resolve(state - 1); // 0 - 1
    });
    newProm.then((newState) => {
      // state = 0
      setState(newState); // state, 0, 0 - 1 => -1
    });
    // state = 0
    setState(state - 1); // 0 - 1 => -1
    console.log(state); // -1
  };

  return (
    <div>
      <div>Decrement {state} </div>
      <button onClick={decr}>Decrement value</button>
    </div>
  );
};

export default DecrementButton;
