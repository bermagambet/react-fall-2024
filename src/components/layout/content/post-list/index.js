import React from "react";
import Post from "../post";

const PostList = ({ postArray = [] }) => {
  return (
    <div>
      {postArray.map((element) => {
        // ... spread -> object properties ->
        return <Post {...element} />;
      })}
    </div>
  );
};

export default PostList;
