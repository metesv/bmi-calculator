import React from "react";

import styled from "styled-components";

const StyledLi = styled.li`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const StyledSpan = styled.span`
  padding: 15px;
`;

function Results({ result }) {
  let bmi;
  if (result < 18.5) {
    bmi = "Underweight";
  } else if (result < 24.9) {
    bmi = "Normal";
  } else if (result < 29.9) {
    bmi = "Overweight";
  } else {
    bmi = "Obesity";
  }

  return (
    <StyledLi>
      <StyledSpan>
        {result} {bmi}
      </StyledSpan>
    </StyledLi>
  );
}

export default Results;
