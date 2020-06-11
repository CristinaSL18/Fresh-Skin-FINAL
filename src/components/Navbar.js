import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../LOGO.png";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/Inicio" className="nav-link">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/productos" className="nav-link">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/Contacto" className="nav-link">
                            Contacto
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-bag"></i>
            </span>
                        Mi carrito
                    </ButtonContainer>
                </Link>
            </Nav>
        );
    }
}

const Nav = styled.nav`
  background: var(--color1);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

