import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from '../components/Header/Menu.jsx'
import Main from '../components/Main/main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <Main />
    </div>
  )
}

export default App
