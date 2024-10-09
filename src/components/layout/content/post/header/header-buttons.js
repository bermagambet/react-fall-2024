import { DashOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex } from "antd";
import React from "react";

const HeaderButtons = ({ tagName }) => {
  return (
    <Flex gap={4}>
      <Dropdown
        trigger="hover"
        placement="bottomRight"
        menu={{
          items: [
            {
              label: `Follow ${tagName}`,
              icon: <UserAddOutlined />,
              onClick: () => alert("Я подписался!"),
            },
          ],
        }}
      >
        <Button
          icon={<DashOutlined />}
          type="text"
          shape="circle"
          style={{
            color: "white",
          }}
        />
      </Dropdown>
      <Button shape="round" type="primary">
        Subscribe
      </Button>
    </Flex>
  );
};

export default HeaderButtons;
