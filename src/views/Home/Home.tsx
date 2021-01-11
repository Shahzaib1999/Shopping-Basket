import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

import NavbarCom from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import appartments from "../../Utils/appartments.json";
import "./Home.css";

interface Appartment {
  id: String;
  name: String;
  image: String;
  price: Number;
  date: string;
}

const Home: React.FunctionComponent<any> = () => {
  const [filteredData, setFilteredData] = useState<Appartment[]>([]);
  const [data, setData] = useState<Appartment[]>([]);

  useEffect(() => {
    setData(appartments);
    setFilteredData(appartments);
  }, []);

  const onSearch = (e: String) => {
    let filterData = data.filter((l) => {
      return l.name.toLowerCase().includes(e.toLowerCase());
    });
    setFilteredData(filterData);
  };

  const onSort = (e: String) => {
    let sortedData;
    switch (e) {
      case "datedesending":
        sortedData = [...data].sort(
          (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
        );
        setFilteredData(sortedData);
        break;
      case "dateascending":
        sortedData = [...data].sort(
          (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
        );
        setFilteredData(sortedData);
        break;
      case "priceascending":
        sortedData = [...data].sort((a, b) => +a.price - +b.price);
        setFilteredData(sortedData);
        break;
      case "pricedesending":
        sortedData = [...data].sort((a, b) => +b.price - +a.price);
        setFilteredData(sortedData);
        break;
      default:
        setFilteredData(data);
        break;
    }
  };

  if (!appartments || !appartments.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="home-wrapper pb-5" style={{ background: "#ECEFF4" }}>
      <div className="container">
        <SearchBar
          onSearch={(e) => onSearch(e)}
          onSort={(e: String) => onSort(e)}
        />
        <Row className="mt-5">
          {filteredData.length &&
            filteredData.map((appartment, ind) => (
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
