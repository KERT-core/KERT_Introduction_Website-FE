import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-image: url('@/assets/icons/menu/User.png');
  background-size: cover;
  background-position: center;
  border: 2px solid #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-left: 10px;
  margin-right: 23px;
  text-align: center;
  cursor: pointer;
`;

const menu_style = {
  textDecoration: 'none',
  color: 'var(--primary-text-color)',
  cursor: 'pointer',
};

export const Profile = ({ userName, logout }) => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative' }}>
      <ProfileContainer onClick={() => navigate('/mypage')}>
        <ProfileButton type="rounded" />
        <ProfileName style={menu_style}>{userName} 님</ProfileName>
        <Link
          to="/login"
          style={menu_style}
          onClick={() => {
            logout();
            window.location.href = '/';
          }}
        >
          로그아웃
        </Link>
      </ProfileContainer>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
