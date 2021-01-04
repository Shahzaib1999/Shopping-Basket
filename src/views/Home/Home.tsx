import { Row, Col } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

import NavbarCom from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const Home = () => (
  <div>
    <NavbarCom />
    <div className="container">
      <SearchBar />
      <Row className="mt-5">
        <Col md={4} className="mt-2">
          <Card />
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
