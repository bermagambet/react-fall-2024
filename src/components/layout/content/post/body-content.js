import React from "react";

const BodyContent = ({ text, image }) => {
  return (
    <div className="body">
      <span>{text}</span>
      <img className="attachment-image" src={image} />
    </div>
  );
};

export default BodyContent;
