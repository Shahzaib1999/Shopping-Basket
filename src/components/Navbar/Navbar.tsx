import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./style.css";

const NavbarCom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state: any) => state.cart.cart);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" style={{ background: "#0691d1", color: "#fff" }}>
        <div className="container">
          <NavbarBrand href="/">
            {"<"}Apartment Cart {"/>"}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="mr-4">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/cart">
                  Cart {cart && cart.length ? `(${cart.length})` : ""}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
