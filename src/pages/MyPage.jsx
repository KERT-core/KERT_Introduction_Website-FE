// MyPage.jsx
// 코드 작성자 : GiHhub @huisuu

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../utils/api'; 
import { useAuth } from '../components/navigation/AuthContext';
import defaultProfilePic from '../assets/icons/menu/User.png';

const Container = styled.div`
  background-color: #0d0e14;
  color: #ffffff;
  margin: 0;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const MyPageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
`;

const Section = styled.div`
  background-color: #1b1e27;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  .section-title-en {
    font-size: 14px;
    color: #aaa;
    margin-left: 10px;
  }
`;

const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
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

  .change-pic-btn {
    background-color: #3b82f6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .delete-pic-btn {
    background-color: #ff4d4d;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  // margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  gap: 38px;
  align-items: center;
`;

const InputGroup = styled.div`
  width: 47%;

  label {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #2c2f3e;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    outline: none;

    &:read-only {
      background-color: #2c2f3e;
      color: #777;
    }
    &:focus {
      border: 1px solid #4a90e2;
      box-shadow: none;
    }
  }
`;

const InputGroupLong = styled.div`
  width: 98%;
  label {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #2c2f3e;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    outline: none;

    &:read-only {
      background-color: #2c2f3e;
      color: #777;
      outline: none;
    }

    &:focus {
      border: 1px solid #4a90e2;
      box-shadow: none;
  }
`;

const EditButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  margin-left: auto;
  matgin-top: auto;
`;

const WarningMessage = styled.p`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({
    studentNumber: '',
    name: '',
    email: '',
    generation: '',
    major: '',
    profilePic: null,
  });
  const { isLoggedIn, user } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  // Fetch user data after login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        // console.log(user.student_id)
        const response = await API.GET(`/users/${user.student_id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
          },
        });

        updateUserState(response.data);
        console.log('Success to fetch user data:');
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  }, [isLoggedIn, navigate]);

  const updateUserState = (data) => {
    setUserInfo({
      studentNumber: data.student_id,
      name: data.name,
      email: data.email,
      generation: data.generation,
      major: data.major,
      profilePic: data.profile_picture || defaultProfilePic,
    });
    setImagePreview(data.profile_picture || defaultProfilePic);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64String = reader.result; // Base64 인코딩된 문자열
        const token = localStorage.getItem('token');

        const formData = {
          name: userInfo.name,
          email: userInfo.email,
          generation: userInfo.generation,
          major: userInfo.major,
          profile_picture: base64String, // Base64 문자열로 전송
        };

        try {
          const response = await API.PUT(`/users/${user.student_id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          updateUserState(response.data);
          console.log('Image uploaded successfully');
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      };
    }
  };

  const handleDeleteImage = async () => {
    setImagePreview(defaultProfilePic);
    const token = localStorage.getItem('token');

    try {
      const response = await API.PUT(`/users/${user.student_id}`, {
        name: userInfo.name,
        email: userInfo.email,
        generation: userInfo.generation,
        major: userInfo.major,
        profile_picture: "",  // 삭제 시 빈 문자열을 보냄
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      updateUserState(response.data);
      console.log('Image deleted successfully');
    } catch (error) {
      console.error('Image deletion failed:', error);
    }
  };


  const onSubmit = async (data) => {
    setPasswordError('');

    if (data.newPassword !== data.confirmPassword) {
      setPasswordError('새로운 비밀번호가 일치하지 않습니다.');
      return;
    }

    const token = localStorage.getItem('token');

    try {
      // 서버로 비밀번호 정보를 전송
      const response = await API.POST(`/users/${user.student_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('서버로 전송:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('비밀번호 재설정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("계정을 삭제하면 복구할 수 없습니다. 정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        await API.DELETE(`/users/${user.student_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("계정이 성공적으로 삭제되었습니다.");
      } catch (error) {
        console.error('계정 삭제 실패:', error);
        alert("계정 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <Container>
      <MyPageContainer>
        {/* Account Info Section */}
        <Section>
          <SectionTitle>
            계정 정보 <span className="section-title-en">Account Info</span>
          </SectionTitle>
          <ProfilePicContainer>
            <ProfilePic src={userInfo.profilePic} alt="Profile" />
            <PicButtons>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload" className="change-pic-btn">이미지 업로드</label>
              <button className="delete-pic-btn" onClick={handleDeleteImage}>사진 제거</button>
            </PicButtons>
          </ProfilePicContainer>
          <Form>
            <InputRow>
              <InputGroup>
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  readOnly
                />
              </InputGroup>

              <InputGroup>
                <label htmlFor="studentNumber">학번</label>
                <input
                  type="text"
                  id="studentNumber"
                  name="studentNumber"
                  value={userInfo.studentNumber}
                  readOnly
                />
              </InputGroup>
            </InputRow>
          </Form>
        </Section>

        {/* Change Password Section */}
        <Section>
          <SectionTitle>
            비밀번호 변경 <span className="section-title-en">Change Password</span>
          </SectionTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroupLong>
              <label htmlFor="current-password">현재 비밀번호 입력</label>
              <input
                type="password"
                id="current-password"
                placeholder="현재 비밀번호"
                {...register('currentPassword', {
                  required: '현재 비밀번호를 입력해주세요.',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/,
                    message: '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함한 8자 이상이어야 합니다.',
                  }
                })}
              />
              {errors.currentPassword && <WarningMessage>{errors.currentPassword.message}</WarningMessage>}
            </InputGroupLong>
            <InputRow>
              <InputGroup>
                <label htmlFor="new-password">새 비밀번호 입력</label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="새 비밀번호"
                  {...register('newPassword', {
                    required: '새 비밀번호를 입력해주세요.',
                    minLength: { value: 8, message: '비밀번호는 8자리 이상이여야 합니다. '},
                    pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/, message: '비밀번호는 숫자, 영문 대문자·소문자, 특수문자를 포함해야 합니다.'},
                  })}
                />
                {errors.newPassword && <WarningMessage>{errors.newPassword.message}</WarningMessage>}
              </InputGroup>

              <InputGroup>
                <label htmlFor="confirm-password">새 비밀번호 확인</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="비밀번호 확인"
                  {...register('confirmPassword', {
                    required: '새 비밀번호를 다시 입력해주세요.',
                    validate: value => value === getValues('newPassword') || '비밀번호가 일치하지 않습니다.'
                  })}
                />
                {errors.confirmPassword && <WarningMessage>{errors.confirmPassword.message}</WarningMessage>}
              </InputGroup>
            </InputRow>

            {passwordError && <WarningMessage>{passwordError}</WarningMessage>}

            <EditButton type="submit">비밀번호 변경</EditButton>
          </Form>
        </Section>

        {/* Delete Account Section */}
        <Section>
          <SectionTitle>
            계정 삭제 <span className="section-title-en">Delete Account</span>
          </SectionTitle>
          <Form>
            <WarningMessage>계정을 삭제하면 복구할 수 없습니다. 신중히 선택하세요.</WarningMessage>
            <EditButton type="button" onClick={handleDeleteAccount}>계정 삭제</EditButton>
          </Form>
        </Section>
      </MyPageContainer>
    </Container>
  );
}
