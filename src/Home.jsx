import { useState, useEffect, useRef } from 'react'
import './App.css'
import './Home.css'

// import TOPOLOGY from 'vanta/dist/vanta.topology.min'
// import NET from "vanta/dist/vanta.net.min"; // the NET effect
// import * as THREE from "three";             // vanta expects three

import left from "./assets/12.svg"
import right from "./assets/11.svg"

export default function Home() {
    // useEffect(() => {
    //     const instance = window.VANTA?.NET({ el: ref.current, color: 0x7f61ff });
    //     return () => instance?.destroy();
    // }, []);
    return (
        <div className="home" id='home'>
            <div className="claw">
                <img src={left} alt="" className="teeth"/>
                <div className="LIONSBYTE">LIONSBYTE</div>
                <img src={right} alt="" className="teeth"/>
            </div>
        </div>
    )
}