import styled from 'styled-components'


const NumberSeclector = ({selectedNumber, setSelectedNumber, error, setError}) => {
        
    const arrNumber = [1, 2, 3, 4, 5, 6]

  const setSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("");
  }

  return (
    
    <NumberSeclectorContainer>
      <p className='error'>{error}</p>
      <div className="GameBox">
      {arrNumber.map((value, i)=>(
        <Box isSelected = {value == selectedNumber}
        key={i} onClick={() => setSelectorHandler(value)}> {value}
        </Box>
        ))}
      </div>

      <p>Select Number</p>

    </NumberSeclectorContainer>
      
    
  )
}

export default NumberSeclector

const NumberSeclectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;


.GameBox{
  display: flex;
  gap: 24px;
  margin: 10px;
}
p{
  font-size: 24px;
  font-weight: 700 ;
  margin: 5px;
}
.error{
  font-size: 20px;
  font-weight: 700 ;
  margin: 0;
  color: red;
  padding-right: 5px;
}

`

const Box = styled.div`
font-size: 24px;
font-weight: 700;
height: 50px;
width: 50px;
border: 2px solid black;
display: grid;
place-items: center;
cursor: pointer;
transition:  0.1s ease-in;

background-color: ${(props)=> (props.isSelected ? "black" : "white")};
color: ${(props)=> (!props.isSelected ? "black" : "white")};

&:hover{
    background-color: black;
    color: white;
    transition: 0.2s ease-in;
  }


`
