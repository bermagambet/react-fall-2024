import React, { useCallback, useEffect, useMemo, useState } from "react";

// const var =  useMemo
// const getSomething

const Lesson41 = () => {
  // useState, re-render
  const [input, setInput] = useState(0);

  // useCallback ->
  //   const multiplyByOneMillion = useCallback(() => {
  //     // +"1" => 1 typecast from string to number

  //     // aha, input didn't change, then I will show previous value
  //     // why do I need to re multiply the same value twice
  //     console.log(input * 1000000);
  //     return input * 1000000;
  //   }, [input]);

  const [state, setState] = useState();
  const [counter, setCounter] = useState(1);

  const [another, setAnother] = useState();

  // if I have to link state to some button, input, any other action DIRECTLY
  const [canISeeText, setCanISeeText] = useState();

  console.log("I re-rendered");

  const handleClick = () => {
    setState(!state);
    setCounter(counter + 1);
  };

  const handleClickAnother = () => {
    setAnother(!another);
  };

  // condition -> takes some time to calculate
  // const canISeeText = state && counter % 2 === 0;

  // if state and counter didn't change, do not re-calculate
  // useMemo -> useMemoization -> memoization

  const calculateIfCounterEvent = useCallback((number) => {
    return number % 2 === 0;
  }, []);

  useEffect(() => {
    // not var, not function, but function call on dependency change
    // function call on change
    console.log("state and counter changed");
    // setState -> re-render
    setCanISeeText(state && calculateIfCounterEvent(counter));
    // POST request

    // dependeny array -> every function and var inside callback function
  }, [state, counter, setCanISeeText, calculateIfCounterEvent]);

  // use useMemo if it changes as the result of some other action

  // useMemo => (callbackFunction, dependencyArray)
  // callbackFunction - remembers function return, until one of the members of dependency array changed
  // dependencyArray - array of dependencies
  //   const canISeeText = useMemo(() => {
  //     // useMemo -> vars
  //     console.log("state and counter changed");
  //     return state && counter % 2 === 0;
  //   }, [state, counter]);

  // React ignores this line after first render
  // but we declare two variables
  // plus if setState is called only once, then it is not efficient
  const [multipled, setMultiplied] = useState();

  useEffect(() => {
    // additional re-render, +1
    setMultiplied(input * 100000);
  }, [input]);

  // variable declaration -> some performance impact=
  const multiplied = useMemo(() => {}, [input]);

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {canISeeText && <p>Some text</p>}
      <button onClick={handleClickAnother}>Click another</button>
      <input onChange={(e) => setInput(e.target.value)} />
      {/* <button onClick={() => multiplyByOneMillion(input)}>Calculate</button> */}
      {/* <button onClick={() => setCanISeeText(1)}>Click another 2</button> */}
    </div>
  );
};

export default Lesson41;
