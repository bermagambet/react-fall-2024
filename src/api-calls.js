// JS - webdev, machine learning, ...
// JS primarly for webdev -> 1 thread

import React from "react";

// Promise chaining -> Обещание, цепь

const ApiCalls = () => {
  // api.get -> N-time of ms -> response

  const handleCallApi = () => {
    // async -> treated as async code
    // async - async request to backend
    // we won't stop runtime for awaiting request

    // single-threaded -> 1 thread for code exection
    const response = fetch("https://cat-fact.herokuapp.com/facts/"); // взять, достать
    const response2 = fetch("https://cat-fact.herokuapp.com/124242134"); // взять, достать
    // I promise response will return something

    // Promise - pending -> ожидание
    // Primise - fulfill -> исполнено
    // Promise - reject -> отклонили

    response.then((response) => {
      console.log("responseInThen1");
    }); // then === далее, accepts function as an argument

    response2.then((response) => {
      console.log("responseInThen2");
    }); // then === далее, accepts function as an argument
    // catch
    console.log("responseNotInThen", response2);
    // try response { } catch
    // Promise pending -> fulfill | reject -> finally
    // response // request - pending
    //   .then((response) => {
    //     // fulfill
    //     // JSON object
    //     return JSON.parse(response);
    //   })
    //   .then((response2) => {
    //     // response2 === JSON.parse(response) => true
    //   })
    //   .catch((error) => {
    //     // reject
    //     // on error
    //   })
    //   .finally(() => {
    //     // finally
    //     // on final stage
    //   });

    // error handling -> catch errors and treat them
    // try { } catch {} finally {}
  };

  return (
    <div>
      <button onClick={handleCallApi}>Call API</button>
    </div>
  );
};

export default ApiCalls;
