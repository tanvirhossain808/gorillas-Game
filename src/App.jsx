import { useState } from 'react'
import './App.css'
import Canva from './components/Canva/Canva'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Canva></Canva>
      </div>
    </>
  )
}

export default App
