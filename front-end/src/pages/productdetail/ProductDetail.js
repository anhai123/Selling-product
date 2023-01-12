import React, { useContext, useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import CommentCreateForm from "../../components/commentCreateForm";
import CommentItem from "../../components/commentItem";
import { Rate, Card, Image, Row, Col, Typography, Button } from "antd";
import ProductCard from "../product/ProductCard";
import "./productDetail.css";
const { Text, Link, Title } = Typography;
const ProductDetail = () => {
  const products = [
    {
      category: 1,
    },
  ];
  return (
    <div>
      <Card>
        {" "}
        <div>
          <BackButton />
        </div>
        <div className="description-containner">
          <Image
            className="image"
            src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card title="Card title" bordered={false} style={{ width: "50%" }}>
            <p>
              <Text code strong>
                $ money
              </Text>
            </p>
            <p>Card content</p>
            <Text strong>Sold: 8</Text>
            <div>
              <Rate />
              <Text style={{ fontSize: "30px", paddingLeft: "1rem" }} strong>
                5.0/5
              </Text>
            </div>
            <p>
              <Button type="primary">Add to cart</Button>
            </p>
          </Card>
        </div>
      </Card>

      <Card>
        <CommentCreateForm />
        <CommentItem />
        <CommentItem />
      </Card>

      <Title level={3}>RELATED PRODUCT</Title>
      <div className="site-card-border-less-wrapper">
        {products.map((product) =>
          product.category === 1 ? <ProductCard /> : null
        )}
      </div>
    </div>
  );
};
export default ProductDetail;
