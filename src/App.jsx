import { useState } from 'react'
import './App.css'
import GameMainPage from './pages/GameMainPage/GameMainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <GameMainPage></GameMainPage>
      </div>
    </>
  )
}

export default App
