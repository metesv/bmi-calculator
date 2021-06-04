import React from "react";

import styled from "styled-components";

import BmiCalculator from "../components/BmiCalculator";

const StyledMainDiv = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Homepage() {
  return (
    <StyledMainDiv>
      <BmiCalculator />
    </StyledMainDiv>
  );
}

export default Homepage;
