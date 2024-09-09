// MyPage.jsx
// 코드 작성자 : GiHhub @huisuu

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #0d0e14;
  color: #ffffff;
  margin: 0;
  padding-top: 60px;
  display: flex;
  justify-content: center;
`;

const MyPageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;

const Section = styled.div`
  background-color: #1b1e27;
  padding: 30px;
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
  }
`;

const Form = styled.form`
  margin-top: 20px;
  margin-right: 20px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const InputGroup = styled.div`
  width: 48%;

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

    &:read-only {
      background-color: #2c2f3e;
      color: #777;
    }
  }
`;

const InputGroupLong = styled.div`
  width: 100%;

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

    &:read-only {
      background-color: #2c2f3e;
      color: #777;
    }
  }
`;

const EditButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
`;

const WarningMessage = styled.p`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    studentNumber: '',
    profilePic: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  
  // Fetch user data after login
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user');
        setUserInfo({
          name: response.data.name,
          studentNumber: response.data.studentNumber,
          profilePic: response.data.profilePic || '../assets/icons/menu/Executive.png',
        });
        setImagePreview(response.data.profilePic || '../assets/icons/menu/Executive.png');
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('profilePic', file);

      axios.post('/upload-profile-pic-endpoint', formData)
        .then(response => {
          console.log('Image uploaded successfully');
        })
        .catch(error => {
          console.error('Image upload failed:', error);
        });
    }
  };

  const handleDeleteImage = () => {
    setImagePreview('../assets/menu/Executive.png'); // Reset to default

    axios.post('/delete-profile-pic-endpoint')
      .then(response => {
        console.log('Image deleted successfully');
      })
      .catch(error => {
        console.error('Image deletion failed:', error);
      });
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
            <ProfilePic src={imagePreview} alt="Profile" />
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
          <Form>
            <InputGroupLong>
              <label htmlFor="current-password">현재 비밀번호 입력</label>
              <input type="password" id="current-password" name="current-password" />
            </InputGroupLong>
            <InputRow>
              <InputGroup>
                <label htmlFor="new-password">새로운 비밀번호 입력</label>
                <input type="password" id="new-password" name="new-password" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="confirm-password">새로운 비밀번호 확인</label>
                <input type="password" id="confirm-password" name="confirm-password" />
              </InputGroup>
            </InputRow>
            <EditButton type="button">저장</EditButton>
          </Form>
        </Section>

        {/* Delete Account Section */}
        <Section>
          <SectionTitle>
            계정 탈퇴 <span className="section-title-en">Delete Account</span>
          </SectionTitle>
          <WarningMessage>
            KERT 계정을 삭제합니다. 삭제된 계정은 복구가 불가능하며 동일 이메일로 계정을 새로 생성해야 합니다.
          </WarningMessage>
          <Form>
            <InputRow>
              <InputGroup>
                <label htmlFor="delete-email">이메일</label>
                <input type="email" id="delete-email" name="delete-email" value="test@koreatech.ac.kr" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="current-password">비밀번호</label>
                <input type="password" id="current-password" name="current-password" value="****" />
              </InputGroup>
            </InputRow>
            <EditButton type="button">계정 삭제</EditButton>
          </Form>
        </Section>
      </MyPageContainer>
    </Container>
  );
}
