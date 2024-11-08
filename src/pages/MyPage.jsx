import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import styled from 'styled-components';

import useAlert from '@/hooks/modal/useAlert';
import { useAuth } from '@components/navigation/AuthContext';

import { Container } from '@components/Container';
import { Text } from '@components/typograph/Text';
import { Button } from '@components/forms/Button';
import { Alert } from '@components/forms/modal/Alert';
import { ContainerHeader } from '../components/ContainerHeader';

import defaultProfilePic from '@/assets/icons/menu/User.png';

import { API } from '@/utils/api';
import { ContainerControlBox } from '../components/ContainerControlBox';
import { Input } from '../components/forms/Input';

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 120px auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  width: 100%;

  display: flex;
  gap: 40px;

  & > * {
    width: 100%;
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
  const { openAlert, closeAlert } = useAlert();

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
  }, []);

  // Fetch user data
  useQuery(
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

  const imageDeleteMutation = useMutation(
    async (default_profile_path) => {
      const image = await fetch(default_profile_path);
      const blob = await image.blob();
      const reader = new FileReader();

      reader.readAsDataURL(blob);

      const base64String = await new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('이미지 변환 실패'));
      });

      const formData = {
        ...userInfo,
        profile_picture: base64String,
      };

      const response = await API.PUT(`/users/${userInfo.student_id}`, {
        body: formData,
      });
      return response.data;
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

  const handleImageUpload = () => {
    // input 생성
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImagePreview(URL.createObjectURL(file));
        imageUploadMutation.mutate(file);
      }
      // 파일 선택 후 input 제거
      fileInput.remove();
    };
    fileInput.click();
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
      user_id: user.student_id,
      old_password: data.currentPassword, // 기존 비밀번호 포함
      password: data.newPassword, // 새 비밀번호
    };

    // 비밀번호 변경 요청
    passwordChangeMutation.mutate(hashData);
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      '계정을 삭제하면 복구할 수 없습니다. 정말로 삭제하시겠습니까?',
    );
    if (!confirmDelete) return;
    // 계정 삭제 요청
    try {
      await API.DELETE(`/users/${user.student_id}`, {});
      logout();
      openAlert({
        title: '계정 삭제됨',
        content: <Text>계정이 성공적으로 삭제되었습니다.</Text>,
        onClose: () => {
          closeAlert();
          navigate('/');
        },
      });
    } catch (error) {
      openAlert({
        title: '계정 삭제 실패',
        content: <Text>계정 삭제에 실패했습니다. 다시 시도해주세요.</Text>,
        onClose: closeAlert,
      });
    }
  };

  return (
    <>
      <Alert />
      <MyPageWrapper>
        {/* Account Info Section */}
        <Container $width="100%">
          <ContainerHeader title="계정 정보" subtitle="Account Info" />
          <ProfilePicContainer>
            <ProfilePic src={userInfo.profile_picture} alt="Profile" />
            <PicButtons>
              <Button
                type="outline"
                color="--primary-text-color"
                text_color="--primary-text-color"
                onClick={handleImageUpload}
              >
                사진 업로드
              </Button>
              <Button
                type="outline"
                color="--danger-color"
                text_color="--danger-color"
                onClick={() => {
                  imageDeleteMutation.mutate(defaultProfilePic);
                }}
              >
                사진 제거
              </Button>
            </PicButtons>
          </ProfilePicContainer>
          <Form>
            <InputGroup>
              <Input
                type="text"
                label="이름"
                placeholder="이름"
                id="name"
                name="name"
                value={userInfo.name}
                readOnly
              />
              <Input
                type="text"
                label="학번"
                placeholder="학번"
                id="student_id"
                name="student_id"
                value={userInfo.student_id.toString()}
                readOnly
              />
            </InputGroup>
            <Input
              type="text"
              label="이메일"
              placeholder="example@knu.ac.kr"
              id="email"
              name="email"
              value={userInfo.email}
              readOnly
            />
          </Form>
        </Container>

        {/* 비밀번호 변경란 */}
        <Container as="form" $width="100%" onSubmit={handleSubmit(onSubmit)}>
          {/* 상단 컨테이너 헤더 */}
          <ContainerHeader title="비밀번호 변경" subtitle="Change Password" />

          {/* 현재 비밀번호 검증 */}
          <Input
            type="password"
            id="current-password"
            label="현재 비밀번호"
            error_label={errors.currentPassword?.message}
            placeholder="현재 비밀번호"
            {...register('currentPassword', {
              required: '현재 비밀번호를 입력해주세요.',
            })}
          />
          {/* 새 비밀번호 입력 & 검증 */}
          <InputGroup>
            {/* 새 비밀번호 입력 */}
            <Input
              type="password"
              id="new-password"
              label="새 비밀번호 입력"
              error_label={errors.newPassword?.message}
              placeholder="새 비밀번호 입력"
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
            {/* 새 비밀번호 검증 */}
            <Input
              type="password"
              id="confirm-password"
              label="새 비밀번호 검증"
              error_label={errors.confirmPassword?.message}
              placeholder="비밀번호 검증"
              {...register('confirmPassword', {
                required: '새 비밀번호를 한번 더 입력해주세요.',
                validate: (value) =>
                  value === getValues('newPassword') ||
                  '새 비밀번호와 일치하지 않습니다.',
              })}
            />
          </InputGroup>

          {/* 버튼 컨트롤 박스 */}
          <ContainerControlBox>
            <Button width="25%" height="45px">
              비밀번호 변경
            </Button>
          </ContainerControlBox>
        </Container>

        {/* Delete Account Section */}
        <Container $width="100%">
          <ContainerHeader title="계정 삭제" subtitle="Delete Account" />

          <Text size="m" weight="regular" color="--warning-color">
            KERT 계정을 삭제합니다. 삭제한 계정은 복구가 불가하며 삭제 후엔
            새로운 계정을 생성해야합니다.
          </Text>

          <ContainerControlBox>
            <Button
              onClick={handleDeleteAccount}
              type="outline"
              color="--danger-color"
              text_color="--danger-color"
            >
              계정 삭제
            </Button>
          </ContainerControlBox>
        </Container>
      </MyPageWrapper>
    </>
  );
}
