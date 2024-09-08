// MyPage.jsx
// 코드 작성자 : GiHhub @huisuu

import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MyPage.css';

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

    // Call the API to delete the image
    axios.post('/delete-profile-pic-endpoint')
      .then(response => {
        console.log('Image deleted successfully');
      })
      .catch(error => {
        console.error('Image deletion failed:', error);
      });
  };

  return (
    <div className="mypage-container">
      {/* Account Info Section */}
      <div className="section">
        <h2 className="section-title">계정 정보 <span className="section-title-en">Account Info</span></h2>

        <div className="profile-pic-container">
          <img src={imagePreview} alt="Profile" className="profile-pic" />
          <div className="pic-buttons">
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <label htmlFor="image-upload" className="change-pic-btn">이미지 업로드</label>
            <button className="delete-pic-btn" onClick={handleDeleteImage}>사진 제거</button>
          </div>
        </div>

        <form className="form">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                readOnly
              />
            </div>

            <div className="input-group">
              <label htmlFor="studentNumber">학번</label>
              <input
                type="text"
                id="studentNumber"
                name="studentNumber"
                value={userInfo.studentNumber}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="section">
        <h2 className="section-title">비밀번호 변경 <span className="section-title-en">Change Password</span></h2>
        <form className="form">
          <div className="input-group-long">
            <label htmlFor="current-password">현재 비밀번호 입력</label>
            <input type="password" id="current-password" name="current-password" />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="new-password">새로운 비밀번호 입력</label>
              <input type="password" id="new-password" name="new-password" />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">새로운 비밀번호 확인</label>
              <input type="password" id="confirm-password" name="confirm-password" />
            </div>
          </div>
          <button type="button" className="edit-btn">저장</button>
        </form>
      </div>

      {/* Delete Account Section */}
      <div className="section">
        <h2 className="section-title">계정 탈퇴 <span className="section-title-en">Delete Account</span></h2>
        <p className="warning-message">
          KERT 계정을 삭제합니다. 삭제된 계정은 복구가 불가능하며 동일 이메일로 계정을 새로 생성해야 합니다.
        </p>
        <form className="form">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="delete-email">이메일</label>
              <input type="email" id="delete-email" name="delete-email" value="test@koreatech.ac.kr"/>
            </div>
            <div className="input-group">
              <label htmlFor="current-password">비밀번호</label>
              <input type="password" id="current-password" name="current-passwor" value="****"/>
            </div>
          </div>      
          <button type="button" className="delete-btn">계정 삭제</button>
        </form>
      </div>
    </div>
  );
}