import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '@components/navigation/AuthContext';
import { Text } from '@components/typograph/Text';
import { Button } from '@components/forms/Button';

import { API } from '@/utils/api';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--body-background);
`;

const LoginBox = styled.div`
  width: 500px;

  padding: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 57px;

  border-radius: 30px;

  background-color: var(--container-primary-background);
  border: 1px solid var(--container-border);

  @media (max-width: 768px) {
    margin: 100px 0;
    padding: 30px;
    border: none;
  }
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const KertLogo = styled.div`
  width: 103px;
  height: 101px;

  background-image: var(--square-logo-url);
  background-size: cover;

  opacity: 0.1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > button {
    margin-top: 20px;
  }
`;

const InputWrapper = styled.div`
  & > span {
    margin-left: 10px;
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  transition:
    border-color 0.2s ease-out,
    background-color 0.2s ease-out;

  width: 100%;
  height: 56px;

  padding: 20px;
  box-sizing: border-box;
  border-radius: 14px;

  background-color: var(--container-primary-background);
  border: 1px solid var(--container-border);
  color: var(--primary-text-color);
  outline: none;

  &:focus {
    border: 1px solid var(--primary-color); /* 파란색 테두리 */
    box-shadow: none; /* 흰색 테두리 제거 */
    background-color: var(--container-secondary-background);
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
`;

const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: var(--secondary-text-color);
`;

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth(); // AuthContext에서 login 함수 호출
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      // 서버에 로그인 요청 보내기
      const login_res = await API.POST('/users/login', {
        body: {
          student_id: parseInt(data.student),
          password: data.password,
        },
      });

      // console.log('response:', response);

      // 서버에 user 정보 요청
      const student_res = await API.GET(`/users/${data.student}`, {
        headers: {
          Authorization: login_res.data.access_token,
        },
      });

      const userInfo = student_res.data;

      // console.log('token:', { access_token, refresh_token });
      // console.log('userInfo:', userInfo);

      if (
        login_res.data.access_token &&
        login_res.data.refresh_token &&
        userInfo
      ) {
        login(
          login_res.data.access_token,
          login_res.data.refresh_token,
          userInfo,
        ); // 로그인 성공 시 AuthContext의 login 함수 호출
        // console.log('login user info:', userInfo); // Log user info
        setError(''); // 에러 초기화
        navigate('/');
      } else {
        // console.error('User info is undefined');
        setError('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 에러 처리
      // console.error('Error:', error);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <LoginBox>
        <LoginHeader>
          <TitleWrapper>
            <Text size="m" weight="light" color="--secondary-text-color">
              Login to KERT
            </Text>
            <Text size="sxl" weight="bold">
              로그인
            </Text>
          </TitleWrapper>
          <KertLogo />
        </LoginHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Text size="s" weight="regular">
              학번
            </Text>
            <Input
              type="text"
              placeholder="2024000000"
              {...register('student', {
                required: '학번을 입력해주세요.',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: '올바른 학번을 적어주세요.',
                },
              })}
            />
            {errors.student && (
              <ErrorMessage>{errors.student.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Text size="s" weight="regular">
              비밀번호
            </Text>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputWrapper>

          {/* 에러 메시지 표시 */}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button width="100%" height="60px">
            로그인
          </Button>
          <SignupLink>
            계정이 없으신가요?<Link to="/signup"> 회원가입</Link>
          </SignupLink>
        </Form>
      </LoginBox>
    </Container>
  );
}
