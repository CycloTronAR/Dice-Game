import { useState } from 'react'
import StartGame from './components/Start Game/StartGame'
import GamePlay from './components/Game Play/GamePlay';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggelGamplay =()=>{
    
    setIsGameStarted((prev) => !prev)
  }
  

  return (
   <div>

    {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggelGamplay}  />}

   </div>

  )
}

export default App
