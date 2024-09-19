import React from "react";

const EventLoop = () => {
  const createAPromise = () => {
    const promise1 = new Promise((resolve) => resolve(1));
    const promise2 = new Promise((resolve) => resolve(2));

    promise1.then((result) => {
      promise2.then((result2) => {
        console.log(result, result2);
      });
    });
  };

  return (
    <div>
      <button onClick={createAPromise}>Promise</button>
    </div>
  );
};

export default EventLoop;
