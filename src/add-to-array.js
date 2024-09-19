import React, { useState } from "react";

const AddToArray = () => {
  const [myArray, setMyArray] = useState([]);
  const [value, setValue] = useState("");

  const handleAddToArray = () => {
    const myArrayTemp = [...myArray];
    myArrayTemp.push(value);
    setMyArray(myArrayTemp);
  };

  const mapFunction = (element) => {
    return <p>{element}</p>;
  };

  return (
    <div>
      {myArray.map(mapFunction)}
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
      <button onClick={handleAddToArray}>Add to array</button>
    </div>
  );
};

export default AddToArray;
