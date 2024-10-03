import React, { useEffect } from "react";
const withInputs = (Component) => (props) => {
  // suffix, prefix -> input

  useEffect(() => {
    // skillbox -> course, bouth
    // getToken(); refresh JWT
    // setAuthorized(true)
    // setBoughtOurContent(true)
  }, []);

  // ternary operator !== return ()
  // ternary operators shouldn't be nested

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <div>Logo Title Search</div> */}
      <Component {...props} />
      {isAuthorized ? (
        boughtOurContent ? (
          <ClientWithContentHeader />
        ) : (
          <NewHeaderForProfile />
        )
      ) : (
        <LogInButtons />
      )}
    </div>
  );
};

export default withInputs;
