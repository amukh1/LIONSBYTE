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
import Experiences from './Experiences.jsx'

import Topology from './Topology'
import I2 from './i2.jsx'
import I3 from './i3.jsx'

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
        <Intermediate title="About the Event" content="LIONSBYTE is a 6-hour coding marathon on March 27, 2026, from 8:30 AM – 2:30 PM hosted at South Fayette High School."/>
        <Top />
        <Experiences />
        <Bottom/>
        
        <div className="intermediate">
            <div className="title">More info</div>
            <div className="content">All participants will receive free food, drinks, and event T-shirts, so come bite and code!</div>
            <div className="content">Participants may work in teams of up to 3 (no team? No problem—we’ll help you find one). On the day of the event, we’ll reveal the theme/skill to learn and teams will have about four hours of coding time to solve all steps of the problem!</div>
        </div>
        
        <Top />

        <Bottom />
        <Intermediate title="FAQ:"/>
        <Top />

        <I2 title="What is a hackathon?" content="Our hackathon is a 6-hour event where students come together to create a project that solves a problem. Students can work individually or in teams of up to 3 people. Whichever team has solved the most problems will win prizes!"/>
        <I2 title="Who can participate?" content="LIONSBYTE is open to South Fayette students in grades 6–12, with all experience levels welcome. Participants will be grouped into divisions by grade level for judging and prizes"/>
        <I2 title="Are technology and devices included?" content="Please bring your school chromebook or personal device."/>

        <Bottom />
        <Intermediate title="Who we are"/>
        <Top />

        <div className="card-holder">
          <div className="card"></div>
          <div className="card"></div>
        </div>
        

      </div>
    </>
  )
}

export default App
