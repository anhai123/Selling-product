import React from "react";
import { Space, Table, Tag, Layout, Typography } from "antd";
import "./orderhis.css";
import BackButton from "../../components/BackButton";
const { Title, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const columns = [
  {
    title: "PaymentId",
    dataIndex: "paymentId",
    key: "PaymentI",
    render: (text) => <span>{text}</span>,
    width: "45%",
  },
  {
    title: "Date of Purchased",
    dataIndex: "purchaseDate",
    key: "date_purchased",
    width: "45%",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => <a>View</a>,
  },
];
const data = [
  {
    paymentId: "1",
    purchaseDate: 32,
  },
  {
    paymentId: "2",
    purchaseDate: 42,
  },
  {
    paymentId: "3",
    purchaseDate: 32,
  },
];
const OrderHistory = () => {
  return (
    <Layout>
      <Header>
        <div>
          <div style={{ display: "inline-block", verticalAlign: "top" }}>
            <BackButton />
          </div>
          <Title
            style={{
              position: "absolute",
              display: "inline-block",
              right: "50%",
              transform: "translate(50%,-50%)",
            }}
            level={1}
          >
            HISTORY
          </Title>
        </div>
        {/* <div style={{ clear: "both" }}></div> */}
      </Header>
      <Content>
        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
};

export default OrderHistory;
