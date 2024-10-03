import React, { useEffect } from "react";
import Input from "./inputs/input";
import InputNumber from "./inputs/input-number";

// Component -> Pure, Higher Order Components
// Component features

// Components: Class-based, Function-based

// FC - function component
// class Lesson4 { constructor() {} ... }

const Lesson4 = () => {
  // function-based -> function as a components

  // Lifecycle -> init, mount, update, unmount
  useEffect(() => {
    // componenDidMount
    console.log("mount");
    return () => {
      // componentWillUnmount
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    // componenDidUpdate/willUpdate
    console.log("update");
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
        <
      <div
        style={{
          display: "flex",
        }}
      >
        <Input suffix="search icon" />
        <InputNumber prefix="$" />
      </div>
    </div>
  );
};

// CC - class component
// class-based component may appear only in legacy code

// why?

// class, polymorphism, inheritance, incapsulation...
// React <14 - class based, since OOP was quite popular

// React 15+ - function based, based on function

// Differences:
// 1. bundle size - size of JS file distributed to client
// Why? React was developed using functions in mid, but class-based required additional code for working
// 2. hooks - functions, class-based have life-cycle function
// 3. simplicity - functions are simpler than classes

export default Lesson4;
