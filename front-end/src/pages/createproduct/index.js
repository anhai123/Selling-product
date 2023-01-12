import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Result,
  Select,
  Upload,
} from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { resizeFile } from "..";
import BackButton from "../../components/BackButton";
import { Card, Col, Row, Image } from "antd";
import "./createproduct.css";
const key = "updatable";
const { Option } = Select;
const CreateProduct = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    selectedFile: null,
    selectedFileList: [],
  });
  const [srcUploadImage, setSrcUploadImage] = useState(
    "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
  );
  const dummyRequest = ({ file, onSuccess }) => {
    console.log(file);
    // const url = URL.createObjectURL(file);
    // setFile(url);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const onChange = (value) => {
    console.log("changed", value);
  };
  const onFinish = async (values) => {
    console.log("Success:", values);

    let uri1;
    let hero = await resizeFile(values.avatar.file.originFileObj).then(
      (uri) => {
        uri1 = uri;
        let hero1 = { ...values, avatar: uri };
        return hero1;
      }
    );

    const formm = new FormData();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setTimeout(() => {
      message.error({
        content: `Tạo mới nhân vật không thành công`,
        key,
        duration: 2,
      });
    }, 1000);
  };

  const props = {
    name: "file",
    onChange(info) {
      const nextState = {};
      switch (info.file.status) {
        case "uploading":
          nextState.selectedFileList = [info.file];
          console.log(info.file, info.fileList);
          break;
        case "done":
          nextState.selectedFile = info.file;
          nextState.selectedFileList = [info.file];
          break;

        default:
          // error or removed
          nextState.selectedFile = null;
          nextState.selectedFileList = [];
      }
      setState(nextState);
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <>
      <Card>
        <BackButton />
      </Card>

      <div className="description-containner">
        <Image className="image" src={srcUploadImage} />

        <Form
          form={form}
          style={{ width: "60%" }}
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            title: "",
            price: 0,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus at massa nec euismod.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi sed nisi sollicitudin venenatis. Aenean cursus at massa nec euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            category: "",
            _id: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Card>
            <Form.Item
              label="Name"
              name="productname"
              rules={[
                {
                  required: true,
                  message: "Product name",
                },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Image"
              name="productImage"
              rules={[
                {
                  required: true,
                  message: "Upload image",
                },
              ]}
            >
              <Upload
                {...props}
                fileList={state.selectedFileList}
                customRequest={dummyRequest}
                style={{ width: "100%" }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Description.",
                },
              ]}
            >
              <Input.TextArea style={{ minHeight: "100px" }} />
            </Form.Item>
            <Form.Item
              label="Content"
              name="content"
              rules={[
                {
                  required: true,
                  message: "Product content.",
                },
              ]}
            >
              <Input.TextArea style={{ minHeight: "100px" }} />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Product price.",
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Product category.",
                },
              ]}
            >
              <Select>
                <Option value="lucy">lucy</Option>
              </Select>
            </Form.Item>
            <Form.Item
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <Button
                style={{ left: "0px", marginTop: "30px" }}
                type="primary"
                htmlType="submit"
              >
                Create
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    </>
  );
};
export default CreateProduct;
