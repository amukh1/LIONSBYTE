import { useState } from 'react'
import './App.css'
import './Nav.css'
import { useSpring, animated } from '@react-spring/web'

export default function Nav() {
    const springs = useSpring({
        from: { x: -100 },
        to: { x: 0 },
    })

    const antiSprings = useSpring({
        from: {x:100},
        to: {x:0}
    })

    return (
        <div className="nav">
            <div className="inside">
            <animated.div className="logo_" style={springs}>LIONSBYTE</animated.div>
            <div className="buttons">
                <animated.div className="link" style={antiSprings}>School</animated.div>
                <animated.div className="link" style={antiSprings}>Sonsors</animated.div>
                <animated.div className="contact" style={antiSprings}>
                    <div className="link">contact</div>
                </animated.div>
            </div>
            </div>
        </div>
    )
}