import React from 'react'
import { Link } from 'gatsby'
import * as res from '../styles/responsive.module.css'
import * as style from '../styles/nav.module.css'

export default function NavToggleMenu({ isActive }) {
    return (
        <div className={`${res.links} ${isActive ? res.active : style.active}`}>
            <Link to="/">Početna</Link>
            <Link to="/about">O nama</Link>
            <Link to="/services">Usluge</Link>
        </div>
    )
}
