// AuthContext.jsx
// 코드 작성자 : GiHhub @huisuu

import React, { createContext, useState, useContext } from 'react';
import { API } from '../../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : null; // user가 존재하면 파싱, 없으면 null
    } catch (error) {
      console.error('Error parsing user data:', error); // 파싱 실패 시 오류 처리
      return null;
    }
  });

  const login = (token, userInfo) => {
    localStorage.setItem('token', token); // 로그인 시 토큰 저장
    localStorage.setItem('user', JSON.stringify(userInfo)); // 사용자 정보 저장
    setUser(userInfo); // 사용자 정보 저장
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await API.POST('/logout', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
