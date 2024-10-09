import React from "react";
import Post from "../post";

const PostList = ({ postArray = [] }) => {
  return (
    <div>
      {postArray.reverse().map((element) => {
        // ... spread -> object properties ->
        return (
          <div className="animate">
            <Post {...element} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
