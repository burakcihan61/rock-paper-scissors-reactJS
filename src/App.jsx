import { useEffect, useState } from 'react'
import "./App.css"



const App = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    setTimeout(()=>{
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setComputerChoice(randomChoice)
    },1000)
    
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="text-center h-[100vh]">
      <h1 className="text-6xl">Rock-Paper-Scissors</h1>
      <div className="h-[20vh] flex justify-around items-center">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className="flex h-[25vh] justify-center">
        <div className='choice-user'>
          <img className="user-hand" src={`../images/${userChoice}.png`} alt='test'></img>
        </div>
        <div className="flex h-[25vh] justify-center">
          <img className='w-64' src={`../images/${computerChoice}.png`} alt='test2'></img>
        </div>
      </div>
      
      <div className="flex justify-center p-6">
        {choices.map((choice, index) =>
          <button className="h-12 w-40 justify-around items-center text-4xl rounded cursor-pointer  bg-red-400 mr-2" key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      
      <div className="p-12">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      
      <div className="flex justify-center p-5">
        {gameOver && 
          <button className="h-12 w-40 justify-around items-center text-4xl rounded cursor-pointer bg-red-400" onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default App