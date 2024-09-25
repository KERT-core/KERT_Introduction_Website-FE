// Login.jsx
// 코드 작성자 : GiHhub @huisuu

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../components/navigation/AuthContext';
import '../styles/font.css';

const Container = styled.div`
  background-color: #080f17;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

const LoginBox = styled.div`
  background-color: #1b1e27;
  padding: 50px;
  border-radius: 10px;
  width: 450px;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
  }

  h2 {
    margin: 10px 0 20px 0;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
  }
`;

const KertLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

const InputGroup = styled.div`
  margin-right: 25px;
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color: #ffffff;
  }

  input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #1c1f25;
    color: white;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 25px;
`;

const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
`;

export default function Login() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth(); // AuthContext에서 login 함수 호출
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      // 서버에 로그인 요청 보내기
      // const response = await axios.post('http://155.230.118.35/login', data);
      // const token = response.data.token;
      // const userInfo = response.data.user;

      // 로그인 성공 시 AuthContext의 login 함수 호출
      // login(token, userInfo);
      login(true, "userInfo");
      setError(''); // 에러 초기화
      navigate('/');
    } catch (error) {
      // 입력창 비우기
      setValue('student', '');
      setValue('password', '');
      // 에러 처리
      console.error('Error:', error);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
      // alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <LoginContainer>
        <LoginBox>
          <LoginHeader>
            <div className="header-text">
              <h1>Login to KERT</h1>
              <h2>로그인</h2>
            </div>
            <KertLogo>
              <img src="../logo/white_square.png" alt="kert-logo" />
            </KertLogo>
          </LoginHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <label>학번</label>
              <input
                type="text"
                placeholder="학번"
                {...register('student', {
                  minLength: { value: 10, message: '학번은 10자리 숫자여야 합니다.' },
                  pattern: { value: /^[0-9]{10}$/, message: '학번은 10자리 숫자여야 합니다.' },
                })}
              />
              {errors.student && <ErrorMessage>{errors.student.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
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
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </InputGroup>

            {/* 에러 메시지 표시 */}
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <LoginButton>로그인</LoginButton>
          </form>

          <SignupLink>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </SignupLink>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
}
