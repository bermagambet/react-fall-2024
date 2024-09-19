import React, { useState } from "react";
import DecrementButton from "./decrement-button";
import AddToArray from "./add-to-array";
import ApiCalls from "./api-calls";
import EventLoop from "./event-loop";
import PrototypeComp from "./prototype";

// import React, ...
// component - function
// Angular - class

function App() {
  // state, setState
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthorized, setIsAuthorized] = useState(false);

  // condition ? action : action
  // if (condition) action else action

  // Password length >= 8
  // Login has H symbol
  const handleLogin = () => {
    console.log(login, password);
    if (password.length >= 8 && login.includes("H")) {
      setIsAuthorized(true);
    }
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // backed calls

  return (
    <div>
      <DecrementButton />
      {/* <ApiCalls />
      <EventLoop />
      <PrototypeComp /> */}
    </div>
  );
}

export default App;
