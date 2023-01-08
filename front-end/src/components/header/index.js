import React from "react";
import {
  Typography,
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Input,
  Space,
  Badge,
} from "antd";
import "./header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { Text, Link } = Typography;
const ItemsNavbar = [
  {
    key: "shop",
    label: "SHOP",
  },
  {
    key: "loginRegis",
    label: `LOGIN/REGISTER`,
  },

  {
    key: "cart",
    label: (
      <Badge count={5} size="small">
        <ShoppingCartOutlined
          style={{ fontSize: "24px", color: "white" }}
          size="medium"
        />
      </Badge>
    ),
  },
];

const ItemsCategory = [
  {
    key: "ct1",
    label: <Link to={"/admin/product-category-mn"}>Danh mục sản phẩm</Link>,
  },
  {
    key: "ct2",
    label: <Link to={"/admin/product-category-mn"}>Danh mục sản phẩm</Link>,
  },
];
const HeaderCom = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header style={{ boxSizing: "border-box", height: "8rem" }}>
        <div className="site-space-compact-wrapper">
          <Space.Compact block>
            <Text
              style={{
                color: "white",
                width: "15%",
                position: "relative",
                fontSize: "1.438rem",
                transform: "translate(0%, 20%)",
              }}
              italic
            >
              Ant Design
            </Text>
            <Input.Search
              style={{
                position: "relative",
                width: "55%",
                /* top: 50%; */
                /* left: 50%; */
                transform: "translate(0%, 25%)",
              }}
              defaultValue="0571"
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={ItemsNavbar}
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
            <br />
          </Space.Compact>

          <Space.Compact block>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={ItemsCategory}
              style={{
                width: "100%",
                /* position: relative, */
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Space.Compact>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        ></div>
      </Content>
    </Layout>
  );
};
export default HeaderCom;
