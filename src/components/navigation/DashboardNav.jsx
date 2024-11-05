import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { Span } from '@components/typograph/Text';
import {
  HomeIcon,
  TimelineIcon,
  PersonIcon,
  VerifiedIcon,
  AccountIcon,
} from '@/assets/icons';

const cubicBezier = 'cubic-bezier(.43,.53,.16,.96)';

const Nav = styled.div.attrs({
  id: 'dashboard-nav',
})`
  transition: width 0.4s ${cubicBezier};

  width: 250px;
  border-right: 1px solid var(--container-border);
  box-sizing: border-box;

  padding: 40px 0px;

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    width: 80px;
  }
`;

const Logo = styled.div.attrs({
  id: 'dashboard-logo',
})`
  transition:
    width 0.4s ${cubicBezier},
    height 0.4s ${cubicBezier};
  width: 82px;
  height: 82px;
  background-image: var(--square-logo-url);
  background-size: contain;
  background-repeat: no-repeat;

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    width: 40px;
    height: 40px;
  }
`;

const Header = styled.div.attrs({
  id: 'dashboard-nav-header',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Span).attrs({
  id: 'dashboard-nav-header-title',
  $weight: 'bold',
})`
  margin-top: 20px;

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const SubTitle = styled(Span).attrs({
  id: 'dashboard-nav-header-subtitle',
  $size: 'xs',
  $color: '--secondary-text-color',
})`
  margin-top: 4px;

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const Menus = styled.div.attrs({
  id: 'dashboard-nav-menus',
})`
  margin-top: 40px;
  padding: 0px 14px;

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    padding: 0px;
  }
`;

const MenuItem = styled.div.attrs({
  id: 'dashboard-nav-menu-item',
})`
  transition: opacity 0.3s ease-in-out;

  padding: 10px;
  box-sizing: border-box;

  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  // 기본 투명도
  opacity: 0.4;
  background-color: transparent;

  // 선택되면 완전 잘보이게
  &.active {
    opacity: 1;
  }

  // 선택됬을 때 메뉴 배경
  // :before로 가상 오브젝트 생성 후 메인 텍스트 컬러에 투명도 적용
  &.active:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: var(--primary-text-color);
    opacity: 0.05;
  }

  & > svg {
    fill: var(--primary-text-color);
  }

  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    flex-direction: column;

    & > svg {
      width: 30px !important;
      height: 30px !important;
    }

    &.active:before {
      border-radius: 0px;
    }
  }
`;

const MenuName = styled(Span).attrs({
  $size: 's',
  $color: '--primary-text-color',
  $weight: 'regular',
})`
  // 가로 화면이 1080px 미만일 때
  @media screen and (max-width: 1080px) {
    margin-top: -2px;
    font-size: 0px;
    &:before {
      font-size: 13px;
      color: var(--primary-text-color);
      content: '${(props) => props.$shortsName}';
      white-space: nowrap; // 줄바꿈 방지
    }
  }
`;

/**
 *
 * @param {import("react").ReactSVGElement} icon 컴포넌트로 불러온 svg 파일
 * @param {text} children 무조건 텍스트 (</> -> X)
 * @returns
 */
const Menu = ({ path, icon, children, shortsName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 만약 주소의 마지막 path와 선택된 메뉴의 이름이 같다면 선택된 메뉴로 스타일을 적용합니다.
  // 또한 클릭 시 동일한 페이지임에도 애니메이션이 적용되는 것을 방지합니다.
  const isActive =
    location.pathname.replaceAll('/', '') ===
    `dashboard${path.replaceAll('/', '')}`;

  return (
    <MenuItem
      onClick={() => {
        isActive ? null : navigate(`/dashboard${path}`);
      }}
      className={isActive ? 'active' : ''}
    >
      {icon}
      <MenuName $shortsName={shortsName ?? children}>{children}</MenuName>
    </MenuItem>
  );
};

export const DashboardNav = () => {
  return (
    <Nav>
      <Header>
        <Logo />
        <Title>KERT 대시보드</Title>
        <SubTitle>Management System</SubTitle>
      </Header>
      <Menus>
        {/* shortName은 창 크기가 작을 때 뜨는 메뉴 이름입니다. 없다면 기본 이름이 표시됩니다. */}
        <Menu path="/" icon={<HomeIcon />}>
          홈
        </Menu>
        <Menu path="/history" icon={<TimelineIcon />} shortsName="연혁">
          연혁 추가/제거
        </Menu>
        {/* 임원진은 다음 개발에 진행합니다. */}
        {/* <Menu path="/executive" icon={<PersonIcon />} shortsName="임원진">
          임원진 추가/제거
        </Menu> */}
        <Menu path="/admin" icon={<VerifiedIcon />} shortsName="관리자">
          관리자 추가/제거
        </Menu>
        <Menu path="/users" icon={<AccountIcon />}>
          회원
        </Menu>
      </Menus>
    </Nav>
  );
};
