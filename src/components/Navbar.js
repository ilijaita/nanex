import {Link, graphql, useStaticQuery} from 'gatsby'
import React, { useState } from 'react'
import NavButton from './NavButton'
import NavToggleMenu from './NavToggleMenu'
import * as res from '../styles/responsive.module.css'
import * as style from '../styles/nav.module.css'



export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)
    const {title} = data.site.siteMetadata

    const [menuActive, setMenuActive] = useState(/* this sets the default value */ false)
    const toggleMenu = () => setMenuActive(!menuActive);

    return (
        <div>
            <nav>
                <h1>{title}</h1>
                <div id={style["links"]} className={style.links, res.links}>
                    <Link to="/">Početna</Link>
                    <Link to="/about">O nama</Link>
                    <Link to="/services">Usluge</Link>
                </div>
                <NavButton toggle={toggleMenu} isActive={menuActive} />
            </nav>
            <NavToggleMenu isActive={menuActive} />
        </div>
    )
}
