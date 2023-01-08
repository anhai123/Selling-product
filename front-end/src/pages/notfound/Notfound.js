import React from "react";
import { Button, Result } from "antd";
const Notfound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sản phẩm bạn tìm không tồn tại"
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default Notfound;
