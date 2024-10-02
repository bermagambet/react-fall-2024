import React from "react";
import "./index.css";
import { Avatar, Button, Col, Dropdown, Flex, Row } from "antd";
import ButtonRibbon from "./button-ribbon";
import BodyContent from "./body-content";
import HeaderButtons from "./header/header-buttons";
// UI library -> out-of-box experience

// Grid - Row, Col

const Post = ({
  // props => Content - PostList - Post
  avatarUrl,
  fullName,
  tagName,
  createTime,
  text,
  image,
  views,
  ribbon,
}) => {
  return (
    <Flex className="card" gap={8} vertical>
      <Row>
        <Col span={12}>
          <div className="header">
            <Avatar
              size={40}
              className={avatarUrl}
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
            />
            <div className="name-info">
              <span className="fullname">{fullName}</span>
              <span className="tag">{tagName}</span>
            </div>
          </div>
        </Col>
        <Col span={12} className="extra">
          <HeaderButtons tagName={tagName} />
        </Col>
      </Row>
      <Flex className="body-content" gap={4} vertical>
        <BodyContent image={image} text={text} />
        <ButtonRibbon {...ribbon} />
      </Flex>
    </Flex>
  );
};

export default Post;
