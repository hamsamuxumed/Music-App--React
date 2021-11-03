import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

export const NavBar = () => {
    return (
        <nav>
            <NavLink exact activeClassName="current" to='/'> Home </NavLink>
            <NavLink to='/albums'> Albums </NavLink>
        </nav>
    )

}