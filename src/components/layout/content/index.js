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
      commentsNumber: 1,
      ribbon: {
        commentsNumber: 1,
        likesNumber: 1,
        repostsNumber: 1,
        savedNumber: 1,
      },
    },
    {
      avatarUrl: "",
      fullName: "Elon Musk2",
      tagName: "@elonmusk",
      createTime: new Date(), // Date(), new Date() => current time
      text: "Body of this post",
      image:
        "https://pbs.twimg.com/media/GYUsJavWMAAoSih?format=jpg&name=900x900",
      views: 2,
      commentsNumber: 2,
      ribbon: {
        commentsNumber: 2,
        likesNumber: 1,
        repostsNumber: 1,
        savedNumber: 1,
      },
    },
  ]);

  return (
    <div>
      <NewPost setPostArray={setPostArray} />
      <PostList postArray={postArray} setPostArray={setPostArray} />
    </div>
  );
};

export { NewPost };
export default Content;
