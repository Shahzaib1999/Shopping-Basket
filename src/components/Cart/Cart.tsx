import { Row, Col } from "reactstrap";

import "./Cart.css";

const CartComp: React.FunctionComponent<any> = () => {
  return (
    <Row>
      <Col md={2} className="mt-4">
        <img
          src="https://images1.apartments.com/i2/vBf-0-FNq5my1TVHxP4qmKSV9RVGQzcjMBnJDFw-9v4/117/mondial-river-west-chicago-il-building-photo.jpg"
          width={150}
          className="mb-2"
        />
      </Col>
      <Col md={3} className="cart-center font-grey title">
        <p>Mondial River West</p>
        <span style={{ fontWeight: "normal", color: "#F0C28C" }}>aasdf</span>
      </Col>
      <Col md={4} className="cart-center">
        <p className="font-lightgrey">$6500</p>
      </Col>
      <Col md={3} className="cart-center pr-5 justify-content-end border-0">
        <div className="close-wrapper">x</div>
      </Col>
    </Row>
  );
};
export default CartComp;
