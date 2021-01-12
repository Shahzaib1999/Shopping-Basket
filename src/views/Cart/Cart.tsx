import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody } from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import CartComp from "../../components/Cart/Cart";
import TotalCartComp from "../../components/Cart/TotalCart";
import { CartItem } from "../../store/types";
import { empty, remove } from "../../store/cartReducer";
import "./Cart.css";

const Home: React.FunctionComponent<any> = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const total = useSelector((state: any) => state.cart.total);
  const dispatch = useDispatch();

  const onRemove = (id: String) => {
    dispatch(remove(id));
  };

  const onCheckout = () => {
    dispatch(empty());
    toast.success("Successfully Purchased");
  };

  return (
    <div className="cart-wrapper" style={{ background: "#ECEFF4" }}>
      <div className="container">
        <Card className="mb-5">
          <CardBody>
            {cart.length ? (
              cart.map((item: CartItem, ind: Number) => (
                <CartComp cart={item} key={ind} onRemove={onRemove} />
              ))
            ) : (
              <h2 className="text-center">Cart Is Empty</h2>
            )}
            <TotalCartComp total={total} />
          </CardBody>
        </Card>
        <div className="d-flex justify-content-between">
          <Button className="btn-continue">
            <Link to="/"> Continue Shopping</Link>
          </Button>
          <Button color="success" disabled={!cart.length} onClick={onCheckout}>
            Checkout Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
