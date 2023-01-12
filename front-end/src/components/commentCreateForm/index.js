import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./commentStyle.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Rate,
  Space,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CommentCreateForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Rate style={{ position: "absolute", zIndex: "1" }} />
      <Space.Compact block>
        <Form.Item style={{ width: "100%" }}>
          <TextArea
            placeholder="Enter content..."
            rows={5}
            style={{}}
          ></TextArea>
        </Form.Item>
        <Form.Item
          style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
        >
          <Button type="primary" htmlType="submit">
            SEND
          </Button>
        </Form.Item>
      </Space.Compact>
    </Form>
  );
};
export default CommentCreateForm;
