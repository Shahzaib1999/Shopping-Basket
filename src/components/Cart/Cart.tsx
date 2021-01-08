import { Row, Col } from "reactstrap";

import "./Cart.css";

const CartComp: React.FunctionComponent<any> = () => {
  return (
    <Row>
      <Col md={2} sm={3} xs={12} className="mt-4">
        <img
          src="https://images1.apartments.com/i2/vBf-0-FNq5my1TVHxP4qmKSV9RVGQzcjMBnJDFw-9v4/117/mondial-river-west-chicago-il-building-photo.jpg"
          className="cart-img mb-2"
        />
      </Col>
      <Col md={4} sm={4} xs={6} className="cart-center font-grey title">
        <p>Mondial River West</p>
      </Col>
      <Col md={3} sm={2} xs={3} className="cart-center">
        <p className="font-lightgrey">$6500</p>
      </Col>
      <Col md={3} sm={3} xs={3} className="cart-center close-main-wrapper justify-content-end border-0">
        <div className="close-wrapper">x</div>
      </Col>
    </Row>
  );
};
export default CartComp;
