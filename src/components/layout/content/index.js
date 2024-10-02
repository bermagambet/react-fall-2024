import React, { useState } from "react";
import NewPost from "./new-post";
import PostList from "./post-list";

const Content = () => {
  const [postArray, setPostArray] = useState([
    {
      avatarUrl: "",
      fullName: "Elon Musk",
      tagName: "@elonmusk",
      createTime: new Date(), // Date(), new Date() => current time
      text: "Body of this post",
      image:
        "https://pbs.twimg.com/media/GYUsJavWMAAoSih?format=jpg&name=900x900",
      views: 1,
      ribbon: {
        commentsNumber: 1,
        likesNumber: 1,
        repostsNumber: 1,
        savedNumber: 1,
      },
    },
  ]);

  return (
    <div>
      <NewPost setPostArray={setPostArray} />
      <PostList postArray={postArray} />
    </div>
  );
};

export { NewPost };
export default Content;
