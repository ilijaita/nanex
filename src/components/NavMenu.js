import React from 'react'
import { Link } from 'gatsby'
import * as res from '../styles/responsive.module.css'
import * as style from '../styles/nav.module.css'

export default function NavMenu() {
    return (
        <div className={style.links, res.links}>
            <Link to="/">Početna</Link>
            <Link to="/about">O nama</Link>
            <Link to="/services">Usluge</Link>
        </div>
    )
}
