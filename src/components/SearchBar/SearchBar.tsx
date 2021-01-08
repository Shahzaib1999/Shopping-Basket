import { Row, Col, Input } from "reactstrap";

import './SearchBar.css';

const SearchBar = () => (
    <Row className="searchbar-wrapper pt-5">
        <Col md={8}>
            <Input type="text" placeholder="Search" style={{ width: "100%", border: 0, borderBottom: '1px solid', outline: 'none', borderColor: '#ced4da' }} />
        </Col>
        <Col md={4}>
            <Input type="select">
                <option value="desending">Date Descending</option>
                <option value="desending">Date Asending</option>
                <option value="desending">Price Descending</option>
                <option value="desending">Price Asending</option>
            </Input>
        </Col>
    </Row>
);

export default SearchBar;