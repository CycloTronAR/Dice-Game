import styled from 'styled-components'
import {Button} from '../Styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className='diceImage'>
      <img src='/images/dices.png' alt='dices image' />
      </div>

      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  max-width: 1180px;
  align-items: center;
  .diceImage{
    display: flex;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: end;
    h1{
      margin: 10px;
      font-size: 80px;
      
    }
  }


`