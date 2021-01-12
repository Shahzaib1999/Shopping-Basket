import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import appartments from "../../Utils/appartments.json";
import "./Home.css";
import { add } from "../../store/cartReducer";
import { CartItem } from "../../store/types";
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
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

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

  const onAdd = (e: Appartment) => {
    let filter = cart.filter((c: CartItem) => c.id === e.id);
    if (filter.length) {
      return toast.warning("Apartment Already Exists In Cart");
    }
    dispatch(add(e));
    toast.success("Successfully Added");
  };

  if (!appartments || !appartments.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="home-wrapper pb-5" style={{ background: "#ECEFF4" }}>
      <div className="container">
        <ToastContainer />
        <SearchBar
          onSearch={(e) => onSearch(e)}
          onSort={(e: String) => onSort(e)}
        />
        <Row className="mt-5">
          {filteredData.length ? (
            filteredData.map((appartment, ind) => (
              <Col key={ind} md={4} className="mt-4">
                <Card appartment={appartment} onAdd={onAdd} />
              </Col>
            ))
          ) : (
            <h1>No Appartment Found</h1>
          )}
        </Row>
      </div>
    </div>
  );
};
export default Home;
