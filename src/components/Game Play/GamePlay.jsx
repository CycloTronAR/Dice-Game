import styled from "styled-components";

import NumberSeclector from "../Number Selector/NumberSeclector";
import TotalScore from "../Total Score/TotalScore";
import RoleDice from "../Role Dice/RoleDice";
import { useState } from "react";
import {Button, OutLineButton} from '../Styled/Button'
import Rules from "../Rules/Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [rules,  SetRule] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");

      return;
      // return alert("you have not selected any number");
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetButton = () =>{
    setScore(0);
  }
  const showRule = () =>{

    SetRule((prev) => !prev);
  }
  return (
    <MainContainer>
      <div className="top_Selection">
        <TotalScore score={score} />
        <NumberSeclector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError = {setError}
        />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <OutLineButton onClick={resetButton}>Reset</OutLineButton>
        <Button onClick={showRule}>{rules ? "Hide" : "Show"} Rules</Button>
        
        {rules && <Rules />}

      </div>
      
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`

  .top_Selection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
  }
`;

