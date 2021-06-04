import React, { useState, useEffect } from "react";

import useLocalStorage from "../customHooks/useLocalStorage";

import styled from "styled-components";

const BmiDiv = styled.div`
  padding: 60px;
  border: 2px solid black;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

function BmiCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiScore, setBmiScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [, setValue] = useLocalStorage("bmiresults", []);

  useEffect(() => {
    const resultTimeout = window.setTimeout(() => {
      setShowResult(false);
    }, 5000);

    return () => window.clearTimeout(resultTimeout);
  }, [showResult]);

  useEffect(() => {
    if (bmiScore !== 0) {
      setValue(oldValues => [...oldValues, bmiScore]);
    }
  }, [bmiScore]);

  function handleCalculate() {
    let bmi = (weight / height ** 2) * 10000;
    setBmiScore(bmi.toFixed(2));
    setShowResult(true);
  }

  return (
    <BmiDiv>
      {showResult && <h1>Your BMI score is: {bmiScore}</h1>}
      <h1>Bmi Calculator</h1>
      <label htmlFor="heightInput">Height(cm)</label>
      <br />
      <input
        id="heightInput"
        min="1"
        type="number"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <br />
      <label htmlFor="weightInput">Weight(kg)</label>
      <br />
      <input
        id="weightInput"
        min="1"
        type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <br />
      <Button onClick={() => handleCalculate()}>Calculate</Button>
    </BmiDiv>
  );
}

export default BmiCalculator;
