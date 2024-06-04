import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play:</h2>
      <div className="txt">
        <p>1: Select any number.</p>
        <p>2: Click on dice image.</p>
        <p>
          3: After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </p>
        <p>4: If you get wrong guess then 2 point will be dedcuted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 10px;
max-width: 700px;
border-radius: 10px;

h2{
    font-size: 24px;
    margin: 0 auto;
}
p{
    margin: 10px;
}

.text{
    margin-top: 20px;
    margin: 0 auto;
}

`;
