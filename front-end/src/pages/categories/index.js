import {
  Card,
  Col,
  Divider,
  Row,
  Input,
  Button,
  Table,
  Form,
  Space,
} from "antd";
import BackButton from "../../components/BackButton";
import CategoryList from "./categoryList";
const ProductCategories = () => {
  const [form] = Form.useForm();
  const onSubmitCreateNewProductDirectory = () => {
    const values = form.validateFields();
    console.log(values);
  };
  return (
    <Card style={{ border: "none" }}>
      <Row>
        <BackButton />
      </Row>
      <Row>
        <Col flex={2}>
          <Card style={{ border: "none" }}>
            <Form form={form} onFinish={onSubmitCreateNewProductDirectory}>
              <Space.Compact size="large" block>
                <Form.Item
                  style={{
                    width: "70%",
                  }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{
                    width: "30%",
                    paddingLeft: "10px",
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    CREATE
                  </Button>
                </Form.Item>
              </Space.Compact>
            </Form>
          </Card>
        </Col>
        <Col flex={3}>
          <CategoryList />
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCategories;
