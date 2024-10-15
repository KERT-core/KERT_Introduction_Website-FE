import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '@/components/typograph/Text';

import VerticalLogoSVG from '@/assets/kert_logos/Vertical.svg';
import Github from '@/assets/icons/Github.png';
import Instagream from '@/assets/icons/Instagram.png';
import Facebook from '@/assets/icons/Facebook.png';
import Youtube from '@/assets/icons/Youtube.png';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 400px;
  padding: 0 10.5vw;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
`;

const LeftContent = styled.div`
  display: flex;
  gap: 7.8vw;

  @media (max-width: 1000px) {
    & > #links {
      display: none;
    }
  }
`;

const LogoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const AddressText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

const CopyrightText = styled.div`
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  color: #83878b;
`;

const Content = styled.div`
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TextHreyfer = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #83878b;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SNSLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Aligns icons to the left */
  align-items: center;
  gap: 50px;
  padding: 0;
`;

const SNSIcon = styled.a`
  width: 20px;
  height: 20px;
  background-color: #080f17;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <LeftContent>
        <Content id="address">
          <LogoAddressContainer>
            <VerticalLogoSVG width="160px" height="fit-content" />
            <AddressText>대구광역시 북구 대학로80(경북대학교)</AddressText>
          </LogoAddressContainer>
          <CopyrightText>
            Copyright 2024. KERT from KNU all rights reserved.
          </CopyrightText>
        </Content>
        <Content id="links">
          <Links>
            <TextHreyfer to="https://www.knu.ac.kr/wbbs/wbbs/main/main.action">
              경북대학교
            </TextHreyfer>
            <TextHreyfer to="https://cse.knu.ac.kr/index.php">
              경북대학교 컴퓨터학부
            </TextHreyfer>
            <TextHreyfer to="https://github.com/KERT-core">
              KERT 깃허브
            </TextHreyfer>
            <TextHreyfer to="https://hspace.io">HSpace</TextHreyfer>
          </Links>
          <TextHreyfer to="https://github.com/KERT-core">
            오픈소스 라이선스
          </TextHreyfer>
        </Content>
      </LeftContent>
      <SNSLinkContainer>
        <SNSIcon
          href="https://github.com/KERT-core"
          backgroundImage={Github}
          target="_blank"
        />
        <SNSIcon
          href="https://youtube.com/@kert_knu593"
          backgroundImage={Youtube}
          target="_blank"
        />
        <SNSIcon
          href="https://www.facebook.com/KNU.KERT"
          backgroundImage={Facebook}
          target="_blank"
        />
        <SNSIcon
          href="https://instagram.com/knu_kert"
          backgroundImage={Instagream}
          target="_blank"
        />
      </SNSLinkContainer>
    </FooterWrapper>
  );
};
