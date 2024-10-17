import { Avatar, Button, Col, Divider, Flex, Input, Row } from "antd";
import React, { useState } from "react";

import "./index.css";
import { BarChartOutlined, DribbbleOutlined } from "@ant-design/icons";

const NewPost = ({ setPostArray }) => {
  const [newPostText, setNewPostText] = useState("");

  const [areReplyOptionsVisible, setAreReplyOptionsVisible] = useState(false);

  return (
    <div
      style={{
        width: "500px",
        padding: "15px",
        border: "0.5px solid rgb(83, 100, 113)",
      }}
    >
      <Flex gap={4} justify="center" align="flex-start">
        <Avatar
          size={38}
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
        />
        <Flex gap={1} style={{ width: "100%" }} vertical>
          <Input
            placeholder="What is happening?"
            className="input"
            onChange={({ target: { value } }) => {
              setNewPostText(value);
            }}
            onFocus={() => {
              setAreReplyOptionsVisible(true);
            }}
            style={{
              border: "none",
              backgroundColor: "black",
              color: "white",
            }}
          />
          {areReplyOptionsVisible && (
            <Button
              size="small"
              className="animate"
              icon={<DribbbleOutlined />}
              style={{
                width: "fit-content",
                fontSize: "10px",
                fontWeight: "bold",
              }}
              iconPosition="start"
              type="link"
            >
              Everyone can reply
            </Button>
          )}
          <Flex className="button-ribbon super-small">
            <Row style={{ width: "100%" }}>
              <Col span={2}>
                <Button
                  size="small"
                  icon={<BarChartOutlined />}
                  type="text"
                  shape="round"
                />
              </Col>
              <Col span={2}>
                <Button
                  size="small"
                  icon={<BarChartOutlined />}
                  type="text"
                  shape="round"
                />
              </Col>
              <Col span={2}>
                <Button
                  size="small"
                  icon={<BarChartOutlined />}
                  type="text"
                  shape="round"
                />
              </Col>
              <Col span={2}>
                <Button
                  size="small"
                  icon={<BarChartOutlined />}
                  type="text"
                  shape="round"
                />
              </Col>
              <Col span={16}>
                <Button
                  size="small"
                  type="primary"
                  shape="round"
                  style={{
                    float: "right",
                  }}
                  onClick={() => {
                    // const [state, setState] = useState
                    // setState(2) // state = 2
                    // setState((previousValue) => {})
                    setPostArray((previousValue) => {
                      const newPostArray = [
                        ...previousValue,
                        {
                          avatarUrl: "",
                          fullName: "Elon Musk",
                          tagName: "@elonmusk",
                          createTime: new Date(), // Date(), new Date() => current time
                          text: newPostText,
                          image:
                            "https://pbs.twimg.com/media/GYUsJavWMAAoSih?format=jpg&name=900x900",
                          views:
                            previousValue[previousValue.length - 1].views + 1,
                          commentsNumber: 0,
                          ribbon: {
                            commentsNumber: 0,
                            likesNumber: 1,
                            repostsNumber: 1,
                            savedNumber: 1,
                          },
                        },
                      ];
                      return newPostArray;
                    });
                  }}
                >
                  Post
                </Button>
              </Col>
            </Row>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default NewPost;
