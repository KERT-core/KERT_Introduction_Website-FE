// Login.jsx
// 코드 작성자 : GiHhub @huisuu

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import '../styles/Login.css';
import '../styles/font.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // 서버로 로그인 정보를 전송합니다.
      const response = await axios.post('155.230.118.35', data);
      console.log('Sign up successful:', response.data);

      // 로그인 성공 시 메인 페이지로 이동합니다.
      navigate('/Mainpage');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="header-text">
            <h1>Login to KERT</h1>
            <h2>로그인</h2>
          </div>
          <div className="kert-logo">
            <img src="../logo/white_square.png" alt="kert-logo" />
          </div>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* student number */}
            <div className="input-group">
              <label>학번</label>
              <input
                type="text"
                placeholder="학번"
                {...register('student', {
                  minLength: {
                    value: 10,
                    message: '학번은 10자리 숫자여야 합니다.',
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: '학번은 10자리 숫자여야 합니다.',
                  },
                })}
              />
              {errors.student && (
                <p className="error-message">{errors.student.message}</p>
              )}
            </div>
            {/* pw */}
            <div className="input-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호"
                {...register('password', {
                  minLength: {
                    value: 8,
                    message: '비밀번호는 숫자, 영문 대문자·소문자, 특수문자를 포함한 8자 이상이어야 합니다.',
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: '비밀번호는 숫자, 영문 대문자·소문자, 특수문자를 포함한 8자 이상이어야 합니다.',
                  },
                })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <button className="login-button">로그인</button>
          </form>
          <div className="signup-link">
            계정이 없으신가요? <Link to="/login">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
