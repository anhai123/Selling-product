import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
const EmptyCartPage = () => (
  <Result
    icon={<ShoppingOutlined />}
    title="YOUR CART IS EMPTY"
    extra={<Button type="primary">Shopping now</Button>}
  />
);
export default EmptyCartPage;
