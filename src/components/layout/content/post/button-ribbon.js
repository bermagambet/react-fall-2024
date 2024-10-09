import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import {
  BarChartOutlined,
  BookOutlined,
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const ButtonRibbon = ({
  // object deconst
  commentsNumber,
  repostsNumber,
  viewNumber = 1,
  likesNumber,
}) => {
  const [showRepostWindow, setShowRepostWindow] = useState(false);

  const openShareModalWindow = () => {
    setShowRepostWindow(true);
  };

  const hideShareModalWindow = () => {
    setShowRepostWindow(false);
  };

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
          <Button
            icon={<UploadOutlined />}
            type="text"
            shape="round"
            onClick={openShareModalWindow}
          />
        </Col>
      </Row>
      <Modal
        okText="Поделиться"
        cancelText="Закрыть"
        open={showRepostWindow}
        onClose={hideShareModalWindow}
      >
        content
      </Modal>
    </div>
  );
};

export default ButtonRibbon;
