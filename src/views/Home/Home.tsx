import { Row, Col } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

import NavbarCom from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import appartments from "../../Utils/appartments.json";

const Home: React.FunctionComponent<any> = () => {
  if (!appartments || !appartments.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="pb-5" style={{ background: "#ECEFF4" }}>
      <div className="container">
        <SearchBar />
        <Row className="mt-5">
          {appartments.length &&
            appartments.map((appartment, ind) => (
              <Col key={ind} md={4} className="mt-4">
                <Card appartment={appartment} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Home;
