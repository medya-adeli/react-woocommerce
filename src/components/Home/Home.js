import React from "react";
import { Card, Row, Col } from "reactstrap";

const HomePage = () => {
  return (
    <div>
      <p>صفحه اصلی</p>
      <Row>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <Card>محصول شماره 1</Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
