import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';

export default function SignUp() {
  const [password, setPassword] = useState('');
  const [student, setStudenet] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userData = {
        student: student,
        password: password,
      };

      // 서버로 로그인 정보를 전송합니다.
      const response = await axios.post('155.230.118.35', userData);
      console.log('Sign up successful:', response.data);

      // 로그인 성공 시 ~page로 이동합니다.
      navigate('/MainPage');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Login">
      <div className="div">
        <div className="middleSide">
          <div className="view">
            <div className="text-login">로그인</div>
            {/* student number */}
            <div className="input-SN">
              <input
                className="input-sn"
                type="student"
                placeholder="학번"
                value={student}
                onChange={(e) => setStudenet(e.target.value)}
              />
            </div>
            {/* pw */}
            <div className="input-PW">
              <input
                className="input-pw"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="click-button" onClick={handleLogin}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
