import { Link } from 'react-router-dom';
import styled from 'styled-components';

import VerticalLogoSVG from '@/assets/kert_logos/Vertical.svg';
import { SNSButton } from './SNSButton';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 400px;
  padding: 0 10.5vw;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;

  // 모바일 대응
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
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

  // 모바일 대응
  @media (max-width: 768px) {
    align-items: center;
  }
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

  // 모바일 대응
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
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
  gap: 20px;
  padding: 0;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <LeftContent>
        <Content id="address">
          <LogoAddressContainer>
            <VerticalLogoSVG width="161px" height="36px" />
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
      {/* SNS 링크 */}
      <SNSLinkContainer>
        <SNSButton type="github" href="https://github.com/KERT-core" />
        <SNSButton type="youtube" href="https://youtube.com/@kert_knu593" />
        <SNSButton type="facebook" href="https://www.facebook.com/KNU.KERT" />
        <SNSButton type="instagram" href="https://instagram.com/knu_kert" />
      </SNSLinkContainer>
    </FooterWrapper>
  );
};
