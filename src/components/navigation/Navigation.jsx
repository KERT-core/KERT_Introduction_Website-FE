import { Link } from "react-router-dom"
import styled from "styled-components"

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

    background-color: #ffffff04;
    backdrop-filter: blur(20px);
`

const Logo = styled.img.attrs({src: "src/assets/kert_logos/White_Vertical.png"})`
    height: 30px;
`

const menu_style = { textDecoration: "none", color: "white"};
const Menus = styled.div`
    width: 500px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
    font-weight: lighter;
`

export const Navigation = () => {
    return (
        <Nav>
            <Logo />
            <Menus>
                <Link to="/" style={menu_style}>소개</Link>
                <Link to="/" style={menu_style}>연혁</Link>
                <Link to="/" style={menu_style}>임원진</Link>
                <Link to="/" style={menu_style}>소식지</Link>
                <Link to="/" style={menu_style}>문의</Link>
            </Menus>
            <p>계정</p>
        </Nav>
    )
}