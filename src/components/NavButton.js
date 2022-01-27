import React from 'react'
import * as style from '../styles/nav.module.css'
import * as res from '../styles/responsive.module.css'

function NavButton({ toggle, isActive }) {
    return (
        <div tabIndex={0} role="button" className={style.hamburger, res.hamburger} onClick={() =>  toggle(!isActive)} onKeyPress={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    )
}

export default NavButton
