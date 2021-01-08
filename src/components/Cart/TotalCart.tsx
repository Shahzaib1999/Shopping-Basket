import { Row, Col, Input } from "reactstrap";

import "./Cart.css";

const CartComp: React.FunctionComponent<any> = () => (
  <Row className="total-cart-wrapper">
    <Col md={2} sm={1} xs={0} className="total-cart-image"></Col>
    <Col md={3} sm={4} xs={12} className="cart-center font-grey title">
      <Input type="text" placeholder="Enter Coupon Code" />
    </Col>
    <Col md={4} sm={3} xs={6} className="cart-center font-weight-bold">
      <p>Total</p>
    </Col>
    <Col
      md={3} sm={3} xs={6}
      className="cart-center pr-5 justify-content-end border-0 font-grey"
    >
      <p>$20000</p>
    </Col>
  </Row>
);
export default CartComp;
