import { Row, Col, Input } from "reactstrap";

import "./SearchBar.css";

interface Props {
  onSearch: (e: String) => void;
  onSort: (e: String) => void;
}

const SearchBar = ({ onSearch, onSort }: Props) => (
  <Row className="searchbar-wrapper pt-5">
    <Col md={8}>
      <Input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Col>
    <Col md={4}>
      <Input type="select" onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="priceascending">Price Low - High</option>
        <option value="pricedesending">Price High - Low</option>
        <option value="dateascending">Date Ascending</option>
        <option value="datedesending">Date Descending</option>
      </Input>
    </Col>
  </Row>
);

export default SearchBar;
