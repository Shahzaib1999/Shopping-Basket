import { type } from "os";
import { Row, Col } from "reactstrap";

import "./Cart.css";

interface Props {
  id: string;
  name: string;
  image: string;
  price: Number;
  date: string;
}

const CartComp: React.FunctionComponent<any> = ({
  cart,
  onRemove,
}: {
  cart: Props;
  onRemove: (id: String) => void;
}) => {
  return (
    <Row>
      <Col md={2} sm={3} xs={12} className="mt-4">
        <img src={cart.image} className="cart-img mb-2" />
      </Col>
      <Col md={4} sm={4} xs={6} className="cart-center font-grey title">
        <p>{cart.name}</p>
      </Col>
      <Col md={3} sm={2} xs={3} className="cart-center">
        <p className="font-lightgrey">${cart.price}</p>
      </Col>
      <Col
        md={3}
        sm={3}
        xs={3}
        className="cart-center close-main-wrapper justify-content-end border-0"
      >
        <div className="close-wrapper" onClick={() => onRemove(cart.id)}>
          x
        </div>
      </Col>
    </Row>
  );
};
export default CartComp;
