import "./product.css";
import { Card, Descriptions, Pagination, Checkbox, Space, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Filter from "../../components/filter";
import { DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;
const pageSize = 8;
const ProductList = () => {
  const handleClickImageEvent = () => {};
  const [product, setProduct] = useState(["helo"]);
  const handleChange = () => {};
  return (
    <div className="site-card-border-less-wrapper">
      <Space.Compact block style={{ justifyContent: "space-between" }}>
        <Filter />
        <Checkbox>Delete all</Checkbox>
      </Space.Compact>

      {product.map((product, index) => (
        <>
          <Card
            hoverable
            bordered={true}
            className="card-layout"
            cover={
              <img
                alt="example"
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="postImage"
                onClick={() => handleClickImageEvent(product)}
              />
            }
            actions={[
              <DeleteOutlined key="delete" />,
              <Checkbox key="checkbox" />,
            ]}
          >
            <Meta
              title="test ui"
              description={
                <>
                  <p>Tỉ lệ chí mạng: </p>
                  <Space.Compact
                    block
                    style={{ justifyContent: "space-between" }}
                  >
                    <Rate style={{ fontSize: "1rem" }} />
                    <span>Sold: 10</span>
                  </Space.Compact>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            bordered={true}
            className="card-layout"
            cover={
              <img
                alt="example"
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="postImage"
                onClick={() => handleClickImageEvent(product)}
              />
            }
          >
            <Meta
              title="test ui"
              description={
                <>
                  <p>Điểm tấn công: </p>
                  <p>Điểm phòng thủ: </p>
                  <p>Tỉ lệ chí mạng: </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            bordered={true}
            className="card-layout"
            cover={
              <img
                alt="example"
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="postImage"
                onClick={() => handleClickImageEvent(product)}
              />
            }
          >
            <Meta
              title="test ui"
              description={
                <>
                  <p>Điểm tấn công: </p>
                  <p>Điểm phòng thủ: </p>
                  <p>Tỉ lệ chí mạng: </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            bordered={true}
            className="card-layout"
            cover={
              <img
                alt="example"
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="postImage"
                onClick={() => handleClickImageEvent(product)}
              />
            }
          >
            <Meta
              title="test ui"
              description={
                <>
                  <p>Điểm tấn công: </p>
                  <p>Điểm phòng thủ: </p>
                  <p>Tỉ lệ chí mạng: </p>
                </>
              }
            />
          </Card>
        </>
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
