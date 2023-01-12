import { Card, Descriptions, Pagination, Checkbox, Space, Rate } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;
const ProductCard = ({ product, isAdmin, deleteProduct, handleCheck }) => {
  const handleClickImageEvent = () => {};
  return (
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
        actions={[<DeleteOutlined key="delete" />, <Checkbox key="checkbox" />]}
      >
        <Meta
          title="test ui"
          description={
            <>
              <p>Tỉ lệ chí mạng: </p>
              <Space.Compact block style={{ justifyContent: "space-between" }}>
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
  );
};
export default ProductCard;
