import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '@components/navigation/AuthContext';

import Profile from '@components/navigation/Profile';

import { scrollToSection } from '@/utils/scrollToSection';
import HamburgerButton from './HamburgerButton';

const Nav = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;

  width: 100vw;
  height: 80px;
  padding: 0px 100px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--nav-background);

  @media (max-width: 768px) {
    padding: 0px 26px;
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

const MenuWrapper = styled.div`
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: lighter;

  white-space: nowrap;

  @media (max-width: 1280px) {
    transition:
      height 0.3s ease-out,
      padding 0.3s ease-out;

    height: ${({ $active }) => ($active ? '300px' : '0px')};
    overflow: hidden;

    position: fixed;
    top: 80px;
    left: 0px;

    width: 100vw;
    padding-top: ${({ $active }) => ($active ? '10px' : '0px')};
    padding-bottom: ${({ $active }) => ($active ? '30px' : '0px')};
    box-sizing: border-box;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    background-color: var(--nav-background);
  }
`;

const MobileMenuDisplay = styled.div`
  @media (min-width: 1281px) {
    display: none;
  }
`;

const NavMenus = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: fit-content;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 1280px) {
    height: fit-content;
    position: static;
    flex-direction: column;
    gap: 30px;
    transform: translateX(0%);
  }
`;

export const Navigation = () => {
  const { isLoggedIn, logout, user } = useAuth();

  const [menu_spread_active, setMenuSpreadActive] = useState(false);
  const onClickHamburger = () => {
    setMenuSpreadActive(!menu_spread_active);
  };

  return (
    <Nav>
      <Link to="/" onClick={() => scrollToSection('section1')}>
        <Logo />
      </Link>
      <MobileMenuDisplay>
        <HamburgerButton
          active={menu_spread_active}
          onToggle={onClickHamburger}
        />
      </MobileMenuDisplay>
      <MenuWrapper $active={menu_spread_active}>
        <NavMenus>
          <Link
            to="/#history"
            style={menu_style}
            onClick={() => {
              setMenuSpreadActive(false);
              scrollToSection('history');
            }}
          >
            연혁
          </Link>
          <Link
            to="/#executives"
            style={menu_style}
            onClick={() => {
              setMenuSpreadActive(false);
              scrollToSection('executives');
            }}
          >
            임원진
          </Link>
          <Link
            to="/#education"
            style={menu_style}
            onClick={() => {
              setMenuSpreadActive(false);
              scrollToSection('education');
            }}
          >
            활동
          </Link>
          <Link
            to="/board"
            style={menu_style}
            onClick={() => {
              setMenuSpreadActive(false);
            }}
          >
            소식지
          </Link>
        </NavMenus>
        <AuthLinks>
          {isLoggedIn ? (
            <>
              <Profile userName={user.name} logout={logout} />
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={menu_style}
                onClick={() => {
                  setMenuSpreadActive(false);
                }}
              >
                로그인
              </Link>
              <Link
                to="/signup"
                style={menu_style}
                onClick={() => {
                  setMenuSpreadActive(false);
                }}
              >
                회원가입
              </Link>
            </>
          )}
        </AuthLinks>
      </MenuWrapper>
    </Nav>
  );
};

export default Navigation;
