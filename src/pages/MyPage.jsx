import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import styled from 'styled-components';

import useAlert from '@/hooks/modal/useAlert';
import { useAuth } from '@components/navigation/AuthContext';

import { Text } from '@/components/typograph/Text';
import { Button } from '@components/forms/Button';
import { Alert } from '@components/forms/modal/Alert';

import defaultProfilePic from '@/assets/icons/menu/User.png';

import { API } from '@/utils/api';

const Container = styled.div`
  margin: 0;
  padding-top: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--body-background);
  color: var(--primary-text-color);
`;

const MyPageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
`;

const Section = styled.div`
  background-color: var(--container-primary-background);
  border: 1px solid var(--container-border);

  padding: 40px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
`;

const PicButtons = styled.div`
  display: flex;
  gap: 10px;
  height: 45px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  .change-pic-btn,
  .delete-pic-btn {
    width: 10vw;
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete-pic-btn {
    background-color: #d32f2f;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;

  & > * {
    width: 100%;
  }
`;

const WarningMessage = styled.p`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 20px;
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

  label {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  input {
    transition:
      border-color 0.2s ease-out,
      background-color 0.2s ease-out;
    width: 100%;

    box-sizing: border-box;
    border-radius: 14px;
    padding: 15px;
    margin-bottom: 20px;

    background-color: var(--container-primary-background);
    border: 1px solid var(--container-border);
    color: var(--primary-text-color);
    outline: none;

    &:read-only {
      background-color: var(--container-secondary-background);
      color: var(--primary-text-color);
    }
    &:focus {
      border: 1px solid var(--primary-color); /* 파란색 테두리 */
      box-shadow: none; /* 흰색 테두리 제거 */
      background-color: var(--container-secondary-background);
    }
  }
`;

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    student_id: 0,
    profile_picture: '',
    generation: '',
    major: '',
  });
  const { isLoggedIn, logout, user } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { openAlert, closeAlert, isOpen } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // 로그인 여부 확인
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // Fetch user data
  const { data, isLoading } = useQuery(
    ['userData', user?.student_id],
    async () => {
      const response = await API.GET(`/users/${user.student_id}`);
      return response.data;
    },
    {
      enabled: isLoggedIn,
      onSuccess: (data) =>
        setUserInfo({
          name: data.name,
          email: data.email,
          student_id: data.student_id,
          profile_picture: data.profile_picture || defaultProfilePic,
          generation: data.generation,
          major: data.major,
        }),
      onError: () => {
        openAlert({
          title: '사용자 정보 불러오기 실패',
          content: (
            <Text>사용자 정보 불러오기에 실패했습니다. 다시 시도해주세요.</Text>
          ),
          onClose: closeAlert,
        });
      },
    },
  );

  const imageUploadMutation = useMutation(
    async (file) => {
      if (file.size > 2 * 1024 * 1024) {
        throw new Error('이미지 크기는 2MB를 초과할 수 없습니다.');
      }

      const compressImage = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              const maxWidth = 800;
              const maxHeight = 800;
              let width = img.width;
              let height = img.height;

              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }

              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);

              canvas.toBlob(
                (blob) => {
                  resolve(blob);
                },
                'image/jpeg',
                0.75, // 이미지 퀄리티 (원본 : 100%)
              );
            };
            img.onerror = () =>
              reject(new Error('올바른 형식의 이미지가 아닌 것 같아요.'));
          };
          reader.onerror = () =>
            reject(new Error('이미지를 읽는 중 오류가 발생했어요.'));
        });
      };

      const compressedFile = await compressImage(file);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      return new Promise((resolve, reject) => {
        reader.onloadend = async () => {
          const base64String = reader.result;

          const formData = {
            ...userInfo,
            profile_picture: base64String,
          };

          try {
            const response = await API.PUT(`/users/${userInfo.student_id}`, {
              body: formData,
            });
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = () => reject(new Error('이미지 변환 실패'));
      });
    },
    {
      onSuccess: (data) => {
        setUserInfo((prev) => ({
          ...prev,
          profile_picture: data.profile_picture,
        }));
        setImagePreview(null);
      },
      onError: (error) => {
        openAlert({
          title: '이미지 업로드 실패',
          content: <Text>{error.message}</Text>,
          onClose: closeAlert,
        });
      },
    },
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      imageUploadMutation.mutate(file);
    }
  };

  const passwordChangeMutation = useMutation(
    async (data) => {
      return await API.PUT(`/passwords/${user.student_id}`, {
        body: data,
      });
    },
    {
      onSuccess: () => {
        openAlert({
          title: '비밀번호 변경',
          content: <Text>비밀번호가 성공적으로 변경되었습니다.</Text>,
          onClose: closeAlert,
        });
      },
      onError: () => {
        openAlert({
          title: '비밀번호 재설정 실패',
          content: (
            <Text>비밀번호 재설정에 실패했습니다. 다시 시도해주세요.</Text>
          ),
          onClose: closeAlert,
        });
      },
    },
  );

  const onSubmit = (data) => {
    setPasswordError('');
    if (data.newPassword !== data.confirmPassword) {
      setPasswordError('새로운 비밀번호가 일치하지 않습니다.');
      return;
    }

    // hash를 생성하여 data 객체를 수정
    const hashData = {
      currentPassword: data.currentPassword, // 기존 비밀번호 포함
      newPassword: data.newPassword, // 새 비밀번호
    };

    // 비밀번호 변경 요청
    passwordChangeMutation.mutate(hashData);
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      '계정을 삭제하면 복구할 수 없습니다. 정말로 삭제하시겠습니까?',
    );
    if (!confirmDelete) return;
    // 계정 삭제 요청
    const token = localStorage.getItem('accessToken');
    API.DELETE(`/users/${user.student_id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        openAlert({
          title: '계정 삭제 성공',
          content: <Text>계정이 성공적으로 삭제되었습니다.</Text>,
          onClose: () => {
            logout();
            navigate('/login');
          },
        });
      })
      .catch(() => {
        openAlert({
          title: '계정 삭제 실패',
          content: <Text>계정 삭제에 실패했습니다. 다시 시도해주세요.</Text>,
          onClose: closeAlert,
        });
      });
  };

  return (
    <Container>
      <MyPageContainer>
        {/* Account Info Section */}
        <Section>
          <Text size="m" weight="light" color="--secondary-text-color">
            Account Info
          </Text>
          <Text size="sxl" weight="bold">
            계정 정보
          </Text>
          <ProfilePicContainer>
            <ProfilePic src={userInfo.profile_picture} alt="Profile" />
            <PicButtons>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload" className="change-pic-btn">
                이미지 업로드
              </label>
              <button
                className="delete-pic-btn"
                onClick={() => imageUploadMutation.mutate(null)}
              >
                사진 제거
              </button>
            </PicButtons>
          </ProfilePicContainer>
          <Form>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  placeholder="이름"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  readOnly
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="student_id">학번</label>
                <input
                  type="text"
                  placeholder="학번"
                  id="student_id"
                  name="student_id"
                  value={userInfo.student_id}
                  readOnly
                />
              </InputWrapper>
            </InputGroup>
          </Form>
        </Section>

        {/* Change Password Section */}
        <Section>
          <Text size="m" weight="light" color="--secondary-text-color">
            Change Password
          </Text>
          <Text size="sxl" weight="bold">
            비밀번호 변경
          </Text>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <label htmlFor="current-password">현재 비밀번호 입력</label>
              <input
                type="password"
                id="current-password"
                placeholder="현재 비밀번호"
                {...register('currentPassword', {
                  required: '현재 비밀번호를 입력해주세요.',
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/,
                    message:
                      '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함한 8자 이상이어야 합니다.',
                  },
                })}
              />
              {errors.currentPassword && (
                <WarningMessage>
                  {errors.currentPassword.message}
                </WarningMessage>
              )}
            </InputWrapper>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="new-password">새 비밀번호 입력</label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="새 비밀번호"
                  {...register('newPassword', {
                    required: '새 비밀번호를 입력해주세요.',
                    minLength: {
                      value: 8,
                      message: '비밀번호는 8자리 이상이여야 합니다. ',
                    },
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
                      message:
                        '비밀번호는 숫자, 영문 대문자·소문자, 특수문자를 포함해야 합니다.',
                    },
                  })}
                />
                {errors.newPassword && (
                  <WarningMessage>{errors.newPassword.message}</WarningMessage>
                )}
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="confirm-password">새 비밀번호 확인</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="비밀번호 확인"
                  {...register('confirmPassword', {
                    required: '새 비밀번호를 다시 입력해주세요.',
                    validate: (value) =>
                      value === getValues('newPassword') ||
                      '비밀번호가 일치하지 않습니다.',
                  })}
                />
                {errors.confirmPassword && (
                  <WarningMessage>
                    {errors.confirmPassword.message}
                  </WarningMessage>
                )}
              </InputWrapper>
            </InputGroup>

            {passwordError && <WarningMessage>{passwordError}</WarningMessage>}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button width="25%" height="45px">
                비밀번호 변경
              </Button>
            </div>
          </Form>
        </Section>

        {/* Delete Account Section */}
        <Section>
          <Text size="m" weight="light" color="--secondary-text-color">
            Delete Account
          </Text>
          <Text size="sxl" weight="bold">
            계정 삭제
          </Text>

          <Form onClick={handleDeleteAccount}>
            <WarningMessage>
              계정을 삭제하면 복구할 수 없습니다. 신중히 선택하세요.
            </WarningMessage>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button width="25%" height="45px">
                계정 삭제
              </Button>
            </div>
          </Form>
        </Section>
        <Alert isOpen={isOpen} closeAlert={closeAlert} />
      </MyPageContainer>
    </Container>
  );
}
