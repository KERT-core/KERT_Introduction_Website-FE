// Login.jsx
// 코드 작성자 : GiHhub @huisuu

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';
import '../styles/font.css';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userData = {
        student: data.student,
        password: data.password,
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* student number */}
              <div className="input-SN">
                <input
                  className="input-sn"
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
              <div className="input-PW">
                <input
                  className="input-pw"
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
              <button className="click-button" type="submit">
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
