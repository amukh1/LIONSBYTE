import { useState } from 'react'
import './App.css'
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <div className="inside">
            <div className="logo_">LIONSBYTE</div>
            <div className="buttons">
                <div className="link">School</div>
                <div className="link">Sonsors</div>
                <div className="contact">
                    <div className="link">contact</div>
                </div>
            </div>
            </div>
        </div>
    )
}