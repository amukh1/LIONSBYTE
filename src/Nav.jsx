import { useState } from 'react'
import './App.css'

export default function Nav() {
    return (
        <div className="nav">
            <div className="inside">
            <div className="logo_">LIONSBYTE</div>
            <div className="buttons">
                <div className="link">link1</div>
                <div className="link">link2</div>
                <div className="contact">
                    <div className="link">contact</div>
                </div>
            </div>
            </div>
        </div>
    )
}