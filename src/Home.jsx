import { useState, useEffect, useRef } from 'react'
import './App.css'
import './Home.css'

// import TOPOLOGY from 'vanta/dist/vanta.topology.min'
// import NET from "vanta/dist/vanta.net.min"; // the NET effect
// import * as THREE from "three";             // vanta expects three

import teeth from "./assets/teeth.svg"

export default function Home() {
    // useEffect(() => {
    //     const instance = window.VANTA?.NET({ el: ref.current, color: 0x7f61ff });
    //     return () => instance?.destroy();
    // }, []);
    return (
        <div className="home" id='home'>
            {/* <div className="claw"> */}
                {/* <img src={teeth} alt="" className="teeth"/> */}
                <div className="LIONSBYTE">LIONSBYTE</div>
            {/* </div> */}
            
        </div>
    )
}