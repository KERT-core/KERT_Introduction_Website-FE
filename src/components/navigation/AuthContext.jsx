// AuthContext.jsx
// 코드 작성자 : GiHhub @huisuu

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const login = (token, userInfo) => {
    localStorage.setItem('token', token); // 로그인 시 토큰 저장
    setUser(userInfo); // 사용자 정보 저장
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      // 서버에 로그아웃 요청
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // 클라이언트 측에서 토큰 및 상태 제거
      localStorage.removeItem('token');
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