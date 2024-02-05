import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const obj={
    name:"srimanti",
    age:"20"
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-5 text-black mb-5'>Tailwind Test</h1>
      <Card name="Srimanti" myObj={obj} />   // we can pass object like this

    </>
  )
}

export default App
