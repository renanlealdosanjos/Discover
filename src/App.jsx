import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from '../components/Header/Menu.jsx'
import Main from '../components/Main/main.jsx'
import Method from '../components/Method/method.jsx'
import Structure from '../components/Structure/structure.jsx'
import Banner from '../components/Banner/banner.jsx'
import Educators from '../components/educators/educators.jsx'
import Testimonials from '../components/Testimonials/testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <Main />
      <Method />
      <Structure />
      <Banner />
      <Educators />
      <Testimonials />
    </div>
  )
}

export default App
