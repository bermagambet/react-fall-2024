import { Input, Menu } from "antd";
import React, { useState } from "react";

const NewPost = ({ setPostArray }) => {
  const [newPostText, setNewPostText] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    // { target: { value } } => const value = event.target.value
    setNewPostText(value);
  };

  return (
    <>
      {/* <Menu />
      <Input.TextArea onChange={handleOnChange} /> */}
    </>
  );
};

export default NewPost;
