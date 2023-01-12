import React from "react";
import { Space, Table, Tag, Layout, Typography, Image, Card } from "antd";

import BackButton from "../../components/BackButton";
import { render } from "react-dom";
import "./orderdetail.css";
const { Title, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const columns = [
  {
    title: "Picture",
    dataIndex: "picture",
    key: "PaymentI",
    render: (src) => <Image src={src} />,
    width: "40%",
  },
  {
    title: "Product",
    dataIndex: "productName",
    key: "date_purchased",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "date_purchased",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (value) => (
      <Text code strong>
        {value} $
      </Text>
    ),
  },
];
const data = [
  {
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg",
    productName: "as",
    quantity: "as",
    price: 8,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsoPnFcoNqTf791Kjly9Koahf_Uiz0VXoFykP0NwORCTk91dGfto4uyky9qPaYxOGdrw&usqp=CAU",
    productName: "as",
    quantity: "as",
    price: 8,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_md5iMScdvNnM14O_TRdcNE81odhOxSUpw&usqp=CAU",
    productName: "as",
    quantity: "as",
    price: 8,
  },
];
const OrderDetail = () => {
  return (
    <Layout>
      <Card>
        <BackButton />
        <Content>
          <div className="header-item-height">
            <Text strong>Name: Le Huy Hai Anh </Text>
          </div>
          <div className="header-item-height">
            <Text strong>Address: Tokyo-japan </Text>
          </div>

          {/* <div style={{ clear: "both" }}></div> */}
          <Table columns={columns} dataSource={data} />
        </Content>
      </Card>
    </Layout>
  );
};

export default OrderDetail;
