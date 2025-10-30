import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import Nav from './Nav.jsx'

import Topology from './Topology'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Topology
        options={{
          backgroundColor: 0x000000,
          color: 0xBCECAC,
          scale: 1.0,
          scaleMobile: 0.6,
          // any other effect-specific options
        }}
      /> */}
      <div className="front-page">
          <Nav/>
        <Home />
      </div>
    </>
  )
}

export default App
