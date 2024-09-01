import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/SignUp.css';
import '../font/main_font.css';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // 서버로 회원가입 정보를 전송합니다.
      const response = await axios.post('155.230.118.35', data);
      console.log('Sign up successful:', response.data);

      // 회원가입 성공 시 메인 페이지로 이동합니다.
      navigate('/Mainpage');
    } catch (error) {
      console.error('Error:', error);
    }
    alert('회원가입 요청이 완료되었습니다!');
  };

  return (
    <div className="div">
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-header">
            <div className="header-text">
              <h1>Sign Up to KERT</h1>
              <h2>회원가입</h2>
            </div>
            <div className="kert-logo">
              <img src="../logo/white_square.png" alt="kert-logo" />
            </div>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="input-group">
                <label>이름</label>
                <input
                  type="text"
                  placeholder="홍길동"
                  {...register('username', {
                    required: '이름을 입력해주세요.',
                    pattern: {
                      value: /^[가-힣]{2,5}$/,
                      message: '올바른 이름을 입력해주세요. (한글 2~5자)',
                    },
                  })}
                />
                {errors.username && (
                  <p className="error-message">{errors.username.message}</p>
                )}
              </div>

              {/* student number */}
              <div className="input-group">
                <label>학번</label>
                <input
                  type="text"
                  placeholder="2024000000"
                  {...register('student', {
                    required: '학번을 입력해주세요.',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: '학번은 숫자 10자리로 입력해주세요.',
                    },
                  })}
                />
                {errors.student && (
                  <p className="error-message">{errors.student.message}</p>
                )}
              </div>

              {/* e-mail */}
              <div className="input-group">
                <label>이메일</label>
                <input
                  type="email"
                  placeholder="kert@gmail.com"
                  {...register('mail', {
                    required: '이메일을 입력해주세요.',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '올바른 이메일 형식을 입력해주세요.',
                    },
                  })}
                />
                {errors.mail && (
                  <p className="error-message">{errors.mail.message}</p>
                )}
              </div>

              {/* major */}
              <div className="input-group">
                <label>전공</label>
                <input
                  type="text"
                  placeholder="심컴/글솝/플솝"
                  {...register('major', {
                    required: '전공을 입력해주세요.',
                    pattern: {
                      value: /^[가-힣]{2}$/,
                      message: '올바른 형식으로 입력해주세요. ',
                    },
                  })}
                />
                {errors.major && (
                  <p className="error-message">{errors.major.message}</p>
                )}
              </div>

              {/* generation */}
              <div className="input-group">
                <label>기수</label>
                <input
                  type="text"
                  placeholder="2024-1"
                  {...register('generation', {
                    required: '기수를 입력해주세요.',
                    pattern: {
                      value: /^(20\d{2})-(1|2)$/,
                      message: '기수는 "연도-학기" 형식으로 입력해주세요. 예: 2024-1',
                    },
                  })}
                />
                {errors.generation && (
                  <p className="error-message">{errors.generation.message}</p>
                )}
              </div>

              {/* password */}
              <div className="input-group">
                <label>비밀번호</label>
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8}$/,
                      message: '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함한 8자 이상이어야 합니다.',
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>

              <button className="signup-button" type="submit">
                회원가입
              </button>
              <div className="login-link">
                이미 계정이 있으신가요? <Link to="/login">로그인</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
