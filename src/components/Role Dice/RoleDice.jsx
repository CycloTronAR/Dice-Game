import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="diceImage" onClick={roleDice}>
        <img src={`/RoleDice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>
        Click on dice to roll
      </p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;

.diceImage{
    cursor: pointer;
    img{
        height: 200px;
        margin: 0 auto;
    }
}

p{
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto;
}


`;
