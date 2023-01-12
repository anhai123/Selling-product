import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  List,
  Skeleton,
  Card,
  InputNumber,
  Typography,
  Image,
  Modal,
  Input,
  Form,
} from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import "./cart.css";
import EmptyCartPage from "./EmtyCart";
const { Text, Link } = Typography;
const Cart = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();
  const [list, setList] = useState([
    {
      picture:
        "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
      name: "loosd",
    },
  ]);

  const handleSubmit = (values) => {
    values = form.validateFields();
    values.then((val) => {
      console.log(val);
    });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const handleBuyNow = () => {
    Modal.confirm({
      title: "Please enter your address",
      content: (
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      ),
      onOk: form.submit,
      okText: "OK",
      cancelText: "Cancel",
    });
  };

  // return (
  //   <>
  //     <List
  //       className="demo-loadmore-list"
  //       itemLayout="horizontal"
  //       dataSource={list}
  //       renderItem={(item) => (
  //         <Card>
  //           <List.Item
  //             actions={[
  //               <Text code strong>
  //                 $ money
  //               </Text>,
  //               <InputNumber></InputNumber>,
  //               <a key="list-loadmore-edit">
  //                 <DeleteOutlined />
  //               </a>,
  //             ]}
  //           >
  //             <Skeleton avatar title={false} loading={item.loading} active>
  //               <List.Item.Meta
  //                 avatar={<Image width={200} src={item.picture} />}
  //                 title={<a href="https://ant.design">{item.name}</a>}
  //                 description="Ant Design, a design language for background applications, is refined by Ant UED Team"
  //               />
  //             </Skeleton>
  //           </List.Item>
  //         </Card>
  //       )}
  //     />

  //     <div
  //       style={{
  //         display: "flex",
  //         paddingTop: "0px",
  //         justifyContent: "space-between",
  //         padding: "24px",
  //       }}
  //     >
  //       <Text code strong style={{ fontSize: "30px" }}>
  //         Total: $ money
  //       </Text>
  //       <Button onClick={handleBuyNow}>Buy Now</Button>
  //     </div>
  //   </>
  // );
  return <EmptyCartPage />;
};
export default Cart;
