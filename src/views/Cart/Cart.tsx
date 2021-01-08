import { Row, Col, Card, CardBody } from "reactstrap";

import CartComp from "../../components/Cart/Cart";
import TotalCartComp from "../../components/Cart/TotalCart";
// import appartments from "../../Utils/appartments.json";

import "./Cart.css";

const Home: React.FunctionComponent<any> = () => {
  return (
    <div className="cart-wrapper" style={{ background: "#ECEFF4" }}>
      <div className="container">
        <Card className="mb-5">
          <CardBody>
            {/* <h2 className="text-center">Cart Is Empty</h2> */}
            <CartComp />
            <CartComp />
            <TotalCartComp />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Home;
