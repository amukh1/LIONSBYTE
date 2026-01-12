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
        <Intermediate title="Intermediate" content="LIONSBYTE is a 6-hour coding marathon on March 27, 2026, from 8:30 AM – 2:30 PM hosted at South Fayette High School."/>
        <Top />
        <Sponsors />
        <Bottom/>
        <Intermediate title="Intermediate" content="All participants will receive free food, drinks, and event T-shirts, so come bite and code!"/>
      </div>
    </>
  )
}

export default App
