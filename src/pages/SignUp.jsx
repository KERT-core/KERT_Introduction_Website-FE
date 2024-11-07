import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import useAlert from '@/hooks/modal/useAlert';

import { Text } from '@components/typograph/Text';
import { Button } from '@components/forms/Button';
import { Alert } from '@components/forms/modal/Alert';

import { API } from '@/utils/api';

const Container = styled.div`
  width: 100vw;

  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--body-background);
`;

const SignUpBox = styled.div`
  width: 914px;

  margin: 160px 0;
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

const SignUpHeader = styled.div`
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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const InputGroup = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;

  & > * {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  & > span {
    margin-left: 10px;
    margin-bottom: 8px;
  }

  .error-message {
    margin-left: 10px;
    color: var(--danger-color);
    font-size: 14px;
    margin-top: 10px;
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

const LoginLink = styled.div`
  text-align: center;
  font-size: 14px;
  color: var(--secondary-text-color);
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
    const formData = {
      student_id: parseInt(data.student),
      name: data.username,
      email: data.mail,
      profile_picture: '',
      generation: data.generation,
      major: data.major,
      password: data.password,
    };

    API.POST('/users/signup', { body: formData })
      .then(() => {
        openAlert({
          title: '회원가입 요청 완료',
          content: <Text>회원가입 요청이 완료되었습니다!</Text>,
          onClose: () => {
            closeAlert();
            navigate('/');
          },
        });
      })
      .catch((error) => {
        // console.error('Error:', error);
        openAlert({
          title: '회원가입 실패',
          content: <Text>회원가입에 실패했습니다. 다시 시도해주세요.</Text>,
          onClose: () => closeAlert(),
        });
      });
  };

  return (
    <Container>
      <SignUpBox>
        <SignUpHeader>
          <TitleWrapper>
            <Text size="m" weight="light" color="--secondary-text-color">
              Sign Up to KERT
            </Text>
            <Text size="sxl" weight="bold">
              회원가입
            </Text>
          </TitleWrapper>
          <KertLogo />
        </SignUpHeader>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* name & student_id */}
            <InputGroup>
              <InputWrapper>
                <Text size="s" weight="regular">
                  이름
                </Text>
                <Input
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
              </InputWrapper>
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
                      message: '학번은 숫자 10자리로 입력해주세요.',
                    },
                  })}
                />
                {errors.student && (
                  <p className="error-message">{errors.student.message}</p>
                )}
              </InputWrapper>
            </InputGroup>
            {/* e-mail */}
            <InputWrapper>
              <Text size="s" weight="regular">
                이메일
              </Text>
              <Input
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
            </InputWrapper>
            {/* major & generation */}
            <InputGroup>
              <InputWrapper>
                <Text size="s" weight="regular">
                  전공
                </Text>
                <Input
                  type="text"
                  placeholder="플솦/심컴/글솝/인컴"
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
              </InputWrapper>
              <InputWrapper>
                <Text size="s" weight="regular">
                  기수
                </Text>
                <Input
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
              </InputWrapper>
            </InputGroup>
          </div>
          {/* password */}
          <InputWrapper>
            <Text size="s" weight="regular">
              비밀번호
            </Text>
            <Input
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
          </InputWrapper>
          <Button width="100%" height="60px">
            회원가입
          </Button>
          <LoginLink>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </LoginLink>
        </SignUpForm>
      </SignUpBox>
      {/* Alert 컴포넌트 렌더링 */}
      <Alert isOpen={isOpen} closeAlert={closeAlert} />
    </Container>
  );
}
