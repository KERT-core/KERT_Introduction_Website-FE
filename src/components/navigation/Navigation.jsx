import React from 'react';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Toggle } from '../forms/Toggle';
import useTheme from '../../hooks/useTheme';

import Profile from './Profile';

import { scrollToSection } from '../../utils/scrollToSection'; 

const Nav = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;

  /* 반응형 패딩 */
  padding: 0px 20px;

  width: 100vw;
  height: 80px;
  padding: 0px 100px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--nav-background);

  /* 스크롤 가능하게 설정 */
  white-space: nowrap;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

const Logo = styled.div`
  background-image: var(--vertical-logo-url);
  background-size: cover;
  width: 130px;
  height: 30px;
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;

  white-space: nowrap;
`;

const menu_style = {
  textDecoration: 'none',
  color: 'var(--primary-text-color)',
  cursor: 'pointer',
};

const Menus = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: lighter;

  white-space: nowrap;
`;

export const Navigation = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  console.log(user);

  return (
    <Nav>
      <Link to="/" onClick={() => scrollToSection('section1')}>
        <Logo />
      </Link>
      <Menus>
        <Link to="/" style={menu_style} onClick={() => scrollToSection('section6')}>
          연혁
        </Link>
        <Link to="/" style={menu_style} onClick={() => scrollToSection('section7')}>
          임원진
        </Link>
        <Link to="/" style={menu_style} onClick={() => scrollToSection('section5')}>
          활동
        </Link>
        <Link to="/board" style={menu_style}>
          소식지
        </Link>
      </Menus>
      <AuthLinks>
        {isLoggedIn ? (
          <>
            {/* <Profile userName={user.name} logout={logout} /> */}
            <Profile userName="홍길동" logout={logout} />
          </>
        ) : (
          <>
            <Link to="/login" style={menu_style}>
              로그인
            </Link>
            <Link to="/signup" style={menu_style}>
              회원가입
            </Link>
          </>
        )}
      </AuthLinks>
    </Nav>
  );
};

export default Navigation;