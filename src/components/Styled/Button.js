import styled from "styled-components"


export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  width: 220px;
  height: 44px; 

  background: #000000;
  border-radius: 5px;

  border: none;

  justify-items: left;

  transition: 0.4s ease-in;
  cursor: pointer;

  &:hover{
    background-color: white;
    border: 2px solid black;
    color: #000000;
    transition: 0.3s ease-in;
  }
`;

export const OutLineButton = styled(Button)`
background-color: white;
border: 2px solid black;
color: black;
&:hover{
    background-color: black;
    color: white;
  }
`