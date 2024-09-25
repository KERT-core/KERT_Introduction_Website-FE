import { useAuth } from './AuthContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Toggle } from '../forms/Toggle';
import useTheme from '../../hooks/useTheme';

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
  
  /* 비율 고정 */
  flex-grow: 0;
  flex-shrink: 0;
`;

const menu_style = {
  textDecoration: 'none',
  color: 'var(--primary-text-color)',
};
const Menus = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: lighter;

  /* 비율 고정 */
  flex-grow: 0;
  flex-shrink: 0;
`;

export const Navigation = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Menus>
        <Link to="/" style={menu_style}>
          연혁
        </Link>
        <Link to="/" style={menu_style}>
          임원진
        </Link>
        <Link to="/" style={menu_style}>
          소식지
        </Link>
        <Link to="/" style={menu_style}>
          문의
        </Link>
      </Menus>
      <AuthLinks>
        {isLoggedIn ? (
          <>
            <Link to="/mypage" style={menu_style}>
              {user.name}님
            </Link>
            <Link to="/login" style={menu_style} onClick={logout}>
              로그아웃
            </Link>
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