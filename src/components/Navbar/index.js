import React from 'react'
import {
    NavContainer,
    NavLogo,
    NavMenu,
    NavLink
} from './NavbarELements'

const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo>Todo</NavLogo>
            <NavMenu>
                <NavLink to="/SignUp">Sign up</NavLink>
                <NavLink to="/Login">Log in</NavLink>
            </NavMenu>/
        </NavContainer>
    )
}

export default Navbar
