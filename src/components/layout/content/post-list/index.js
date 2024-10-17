import React, { useEffect, useMemo, useState } from "react";
import Post from "../post";
import { Button, Select } from "antd";

const PostList = ({ postArray = [], setPostArray }) => {
  // useMemo usage
  // useMemo vs. useEffect

  const [sortingValue, setSortingValue] = useState("views");

  // create a new local of array

  // useEffect - +: lifecyling, not a variable, side effect
  // const [newSortedArray, setNewSortedArray] = useState(postArray);
  // const handleSorting = () => {
  //   console.log(sortingValue, postArray);
  //   setNewSortedArray(
  //     (previous) => [
  //       ...previous.sort((a, b) => {
  //         console.log(a[sortingValue], b[sortingValue]);
  //         return b[sortingValue] - a[sortingValue];
  //       }),
  //     ],
  //     []
  //   );
  // };
  // useEffect(() => {
  //   setNewSortedArray(postArray);
  // }, [postArray]);

  // useMemo - +: easier to use, single variable, -: no addtional functiolity, no lifecycle access
  const newSortedArray = useMemo(
    () => [
      ...postArray.sort((a, b) => {
        return b[sortingValue] - a[sortingValue];
      }),
    ],
    [sortingValue, postArray]
  );

  // usage of useMemo, useEffect, useCallback - subjective
  // if you want to use them - use

  // the only point which is important - function usability

  // always a bad case:
  const test = useMemo(() => postArray, [postArray]);
  // why? postArray - state, state isn't re-declaring itself upon re-render

  // always a bade case:
  useEffect(() => {
    setPostArray([1, 2]);
  }, []);
  // why? useEffect with empty dependecy array triggers once

  return (
    <div style={{ width: "530px" }}>
      <Select
        placeholder="Select field for sorting"
        style={{ width: "100%" }}
        options={[
          {
            label: "Number of views",
            value: "views",
          },
          {
            label: "Number of comments",
            value: "commentsNumber",
          },
        ]}
        onSelect={(_, option) => {
          setSortingValue(option.value);
        }}
      />
      {/* <Button type="primary" onClick={handleSorting} block>
        Sort
      </Button> */}
      {newSortedArray.map((element) => {
        // ... spread -> object properties ->
        return <Post {...element} />;
      })}
    </div>
  );
};

export default PostList;
