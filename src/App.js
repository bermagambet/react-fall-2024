import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
// import ContextExample from "./useContext";
import { Outlet, useLoaderData } from "react-router-dom";
import Content from "./components/layout/content";

// Outlet component for rendering child route

function App() {
  // Lesson6 - ok
  // Lesson61 - not ok, since I didn't get my property

  // const loaderData = useLoaderData(); // use data from loader

  // console.log("second", loaderData);

  const [test, setTest] = useState("");

  const context = useMemo(
    () => ({
      myProp: {
        a: 1,
      },
      myProp1: 1,
    }),
    []
  );

  return (
    <>
      <Content />
      {/* <ContextExample /> */}
      <button onClick={() => setTest(test + "1")}>test</button>
      header side-menu
      {/* <Outlet context={} === <context.Provider value  */}
      <Outlet context={context} />
      footer
    </>
  );
}

export default App;
