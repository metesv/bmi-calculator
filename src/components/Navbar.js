import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import burgerSvg from "../assets/burger-svgrepo-com.svg";

const StyledNavbar = styled.nav`
  background-color: whitesmoke;
  display: flex;
  height: 8vh;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid black;
`;

const StyledSpan = styled.h3`
  cursor: pointer;
  height: 5vh;
  padding-top: 15px;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 40px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledImg src={burgerSvg} alt="Burger Logo"></StyledImg>
      </Link>
      <StyledSpan>
        <Link to="/">
          <strong>Calculate BMI</strong>
        </Link>
      </StyledSpan>
      <StyledSpan>
        <Link to="/info">
          <strong>My BMI Results</strong>
        </Link>
      </StyledSpan>
    </StyledNavbar>
  );
}

export default Navbar;
