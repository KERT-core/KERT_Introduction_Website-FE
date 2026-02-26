import styled from 'styled-components';

import { Span } from '@components/typograph/Text';
import { ExecutiveProfile } from '@components/display/section/ExecutiveProfile';

import PresidentImage from '@/assets/executive_profile/president.png'; // 회장 이미지
// import VicePresidentImage from '@/assets/executive_profile/vice_president.png'; // 부회장 이미지
import FinancialManagerImage from '@/assets/executive_profile/affairs_manger.png'; // 총무부장 이미지
import TechnicalManagerImage from '@/assets/executive_profile/technic_director.png'; // 기술부장 이미지
import PromotionManagerImage from '@/assets/executive_profile/PR_director.png'; // 홍보부장 이미지
import StutyManagerImage from '@/assets/executive_profile/study_director.png'; // 학술부장 이미지
// import ExternalImage from '@/assets/executive_profile/external.png'; // 학술부장 이미지
// import SupporterImage from '@/assets/executive_profile/supporter.png'; // 서포트 이미지

// MainPage 양식과 호환될 수 있도록 바탕 설정
const Section = styled.section`
  position: relative;

  width: 100vw;
  padding: 160px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000212;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Title = styled(Span).attrs({
  $size: '36px',
  $weight: 'extrabold',
  $color: 'white',
})`
  // 모바일 대응
  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    word-break: keep-all;
  }
`;

const ProfilesWrapper = styled.div`
  width: 100%;
  max-width: 900px;

  // 모바일 대응
  @media (max-width: 768px) {
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export default function Section6() {
  const executives = [
    {
      name: '박우현',
      role: '회장',
      group_number: 26,
      major: '플랫폼소프트웨어',
      student_id_year: 25,
      description: 'KERT를 운영하며 전반적인 활동을 총괄해요.',
      image_url: PresidentImage,
      color: '#0047FF',
    },
    {
      name: '김유준',
      role: '총무부장',
      group_number: 22,
      major: '심화컴퓨터',
      student_id_year: 21,
      description: 'KERT의 재정을 기록하고 관리해요.',
      image_url: FinancialManagerImage,
      color: '#FA00FF',
    },
    {
      name: '김시연',
      role: '홍보부장',
      group_number: 25,
      major: '글로벌소프트웨어',
      student_id_year: 24,
      description: '활동 홍보 자료를 제작하고 업로드해요.',
      image_url: PromotionManagerImage,
      color: '#FFF500',
    },
    {
      name: '정성진',
      role: '기술부장',
      group_number: 25,
      major: '플랫폼소프트웨어',
      student_id_year: 24,
      description: 'KERT의 웹사이트, 서버와 같은 IT 시스템을 관리해요.',
      image_url: TechnicalManagerImage,
      color: '#00FF0A',
    },
    {
      name: '배민주',
      role: '학술부장',
      group_number: 26,
      major: '글로벌소프트웨어',
      student_id_year: 25,
      description: '정기 세미나, 프로젝트 및 스터디를 관리해요.',
      image_url: StutyManagerImage,
      color: '#0094FF',
    },
  ];

  return (
    <Section id="executives">
      <Content>
        <Title>KERT 27기 임원진을 소개합니다</Title>
        <ProfilesWrapper>
          {executives.map((executive, i) => (
            // 짝수일 때는 isReversed = true
            <ExecutiveProfile
              key={i}
              profile={executive}
              isReversed={i % 2 == 1 ? true : false}
            />
          ))}
        </ProfilesWrapper>
      </Content>
    </Section>
  );
}
