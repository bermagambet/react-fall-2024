import { Button, Col, Row } from "antd";
import React from "react";
import {
  BarChartOutlined,
  BookOutlined,
  CommentOutlined,
  DashOutlined,
  HeartOutlined,
  RetweetOutlined,
  UploadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const ButtonRibbon = ({
  // object deconst
  commentsNumber,
  repostsNumber,
  viewNumber,
  likesNumber,
}) => {
  return (
    <div className="button-ribbon">
      <Row>
        <Col span={5}>
          <Button icon={<CommentOutlined />} type="text" shape="round">
            {commentsNumber}
          </Button>
        </Col>
        <Col span={5}>
          <Button icon={<RetweetOutlined />} type="text" shape="round">
            {`${repostsNumber}K`}
          </Button>
        </Col>
        <Col span={5}>
          <Button icon={<HeartOutlined />} type="text" shape="round">
            {`${likesNumber}K`}
          </Button>
        </Col>
        <Col span={5}>
          <Button icon={<BarChartOutlined />} type="text" shape="round">
            {`${viewNumber}K`}
          </Button>
        </Col>
        <Col span={2}>
          <Button icon={<BookOutlined />} type="text" shape="round" />
        </Col>
        <Col span={2}>
          <Button icon={<UploadOutlined />} type="text" shape="round" />
        </Col>
      </Row>
    </div>
  );
};

export default ButtonRibbon;
