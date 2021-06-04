import React from "react";
import { v4 as uuidv4 } from "uuid";

import Results from "../components/Results";

import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  list-style-type: none;
`;

function Infopage() {
  const bmiResults = window.localStorage.getItem("bmiresults");
  const parsedResults = JSON.parse(bmiResults);
  return (
    <StyledUl>
      {parsedResults.map(result => (
        <Results key={uuidv4()} result={result} />
      ))}
    </StyledUl>
  );
}

export default Infopage;
