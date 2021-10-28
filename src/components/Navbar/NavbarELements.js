import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #050D21;
`
export const NavLogo = styled.h1`
    font-size: 2rem;
    color: #fff;
    padding: 2rem;
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
    margin: 2rem    ;
`