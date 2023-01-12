import "./product.css";
import { Card, Descriptions, Pagination, Checkbox, Space, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Filter from "../../components/filter";
import { DeleteOutlined } from "@ant-design/icons";
import ProductCard from "./ProductCard";
const { Meta } = Card;
const pageSize = 8;
const ProductList = () => {
  const [product, setProduct] = useState(["helo"]);
  const handleChange = () => {};
  return (
    <div className="site-card-border-less-wrapper">
      <Space.Compact block style={{ justifyContent: "space-between" }}>
        <Filter />
        <Checkbox>Delete all</Checkbox>
      </Space.Compact>

      {product.map((product, index) => (
        <ProductCard />
      ))}
      <Pagination
        pageSize={pageSize}
        current={1}
        total={product.length}
        onChange={handleChange}
        style={{ marginTop: "6rem", bottom: "0px !important" }}
      />
    </div>
  );
};
export default ProductList;
