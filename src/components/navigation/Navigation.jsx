import styled from "styled-components"

import useTheme from "../../hooks/useTheme"

import { Link } from "react-router-dom"
import { Toggle } from "../forms/Toggle"

const Nav = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;

    width: 100%;
    height: 80px;
    padding: 0px 100px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--nav-background);
`

const Logo = styled.div`
    background-image: var(--vertical-logo-url);
    background-size: cover;
    width: 130px;
    height: 30px;
`

const menu_style = { textDecoration: "none", color: "var(--primary-text-color)" };
const Menus = styled.div`
    width: 500px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
    font-weight: lighter;
`

export const Navigation = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Nav>
            <Logo />
            <Menus>
                <Link to="/" style={menu_style}>연혁</Link>
                <Link to="/" style={menu_style}>임원진</Link>
                <Link to="/" style={menu_style}>소식지</Link>
                <Link to="/" style={menu_style}>문의</Link>
            </Menus>
            <Toggle
                onChange={toggleTheme}
                checked={theme === 'dark'}
                color={{
                    on: "var(--primary-color)",
                    off: "var(--primary-color)"
                }}
            />
        </Nav>
    )
}