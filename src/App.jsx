import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './dividers.css'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import Bottom from './BottomDiv.jsx'
import Top from './TopDiv.jsx'
import Intermediate from './Intermediate.jsx'
import Sponsors from './Sponsors.jsx'

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
        <Bottom />
        <Intermediate title="Intermediate" content="frog frog frog frog frog frog frog frog"/>
        <Top />
        <Sponsors />
        <Bottom/>
        <Intermediate title="Intermediate" content="frog frog frog frog frog frog frog frog"/>
      </div>
    </>
  )
}

export default App
