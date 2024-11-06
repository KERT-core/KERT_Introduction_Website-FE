import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import useAlert from '@/stores/useAlert';

import { Text } from '@components/typograph/Text';
import { Alert } from '@components/forms/modal/Alert';

import { API } from '@/utils/api';
import '@/font/main_font.css';

const Container = styled.div`
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  margin-top: 80px;
  padding: 0;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  top: 120px;
  padding-top: 60px;
  padding-bottom: 150px;
`;

const SignUpBox = styled.div`
  background-color: var(--container-secondary-background);
  padding: 50px;
  border-radius: 10px;
  width: 500px;
`;

const SignUpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-bottom: 20px;
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

const SignUpForm = styled.form`
  .input-group {
    margin-bottom: 25px;
    margin-right: 30px;

    label {
      display: block;
      margin-bottom: 5px;
      font-size: 18px;
      color: var(--primary-text-color);
    }

    input {
      width: 100%;
      padding: 15px;
      border: 1px solid var(--container-border);
      border-radius: 5px;
      background-color: var(--container-secondary-background);
      color: var(--primary-text-color);
      outline: none;
    }

    input:focus {
      border-color: #3b82f6;
      box-shadow: none;
      background-color: var(--container-primary-background);
    }

    input::placeholder {
      font-size: 16px;
    }

    .error-message {
      color: #ff4d4d;
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: var(--primary-text-color);
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const LoginLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
`;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { openAlert, closeAlert, isOpen } = useAlert();

  const onSubmit = async (data) => {
    try {
      const formData = {
        student_id: parseInt(data.student),
        name: data.username,
        email: data.mail,
        profile_picture: '',
        generation: data.generation,
        major: data.major,
        password: data.password,
      };

      const response = await API.POST('/users/signup', { body: formData });
      // console.log('서버로 전송:', response.data.user);
      setTimeout(() => {
        openAlert({
          title: '회원가입 요청 완료',
          content: <Text>회원가입 요청이 완료되었습니다!</Text>,
          onClose: () => closeAlert(),
        });
      }, 100);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setValue('username', '');
      setValue('student', '');
      setValue('password', '');
      setValue('mail', '');
      setValue('generation', '');
      setValue('major', '');

      // 100ms 후 새로운 Alert 열기
      setTimeout(() => {
        openAlert({
          title: '회원가입 실패',
          content: <Text>회원가입에 실패했습니다. 다시 시도해주세요.</Text>,
          onClose: () => closeAlert(),
        });
      }, 100);
    }
  };

  return (
    <Container>
      <SignUpContainer>
        <SignUpBox>
          <SignUpHeader>
            <div>
              <Text size="l" weight="bold" color="#ffffff">
                Sign Up to KERT
              </Text>
              <Text size="sxl" weight="bold" color="#ffffff">
                회원가입
              </Text>
            </div>
            <KertLogo>
              <img src="../logo/white_square.png" alt="kert-logo" />
            </KertLogo>
          </SignUpHeader>
          <SignUpForm onSubmit={handleSubmit(onSubmit)}>
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
                    message:
                      '기수는 "연도-학기" 형식으로 입력해주세요. 예: 2024-1',
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
                  minLength: {
                    value: 8,
                    message: '비밀번호는 8자리 이상이여야 합니다. ',
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/,
                    message:
                      '비밀번호는 숫자, 영문 대문자·소문자, 특수문자를 포함해야 합니다.',
                  },
                })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            <SignUpButton type="submit">회원가입</SignUpButton>
            <LoginLink>
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </LoginLink>
          </SignUpForm>
        </SignUpBox>
        {/* Alert 컴포넌트 렌더링 */}
        <Alert isOpen={isOpen} closeAlert={closeAlert} />
      </SignUpContainer>
    </Container>
  );
}
