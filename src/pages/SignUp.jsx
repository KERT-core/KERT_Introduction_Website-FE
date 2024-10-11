import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import '../styles/SignUp.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [student, setStudenet] = useState('');
  const [major, setMajor] = useState('');
  const [generation, setGE] = useState('');
  // const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userData = {
        username: username,
        mail: mail,
        password: password,
        student: student,
        major: major,
        generation: generation,
      };

      // 서버로 회원가입 정보를 전송합니다.
      const response = await axios.post('155.230.118.35', userData);
      console.log('Sign up successful:', response.data);

      // 회원가입 성공 시 ~page로 이동합니다.
      // navigate("/page");
    } catch (error) {
      console.error('Error:', error);
    }
    alert('회원가입 요청이 완료되었습니다!');
  };

  return (
    <div className="SignUp">
      <div className="div">
        <div className="middleSide">
          <div className="view">
            <div className="text-signup">회원가입</div>
            {/* name */}
            <div className="input-NAME">
              <input
                className="input-name"
                type="text"
                placeholder="이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* e-mail */}
            <div className="input-MAIL">
              <input
                className="input-mail"
                type="mail"
                placeholder="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
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
            {/* major */}
            <div className="input-MAJOR">
              <input
                className="input-major"
                type="major"
                placeholder="전공"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
            {/* generation */}
            <div className="input-GE">
              <input
                className="input-ge"
                type="generation"
                placeholder="기수"
                value={generation}
                onChange={(e) => setGE(e.target.value)}
              />
            </div>

            <button className="click-button" onClick={handleSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
