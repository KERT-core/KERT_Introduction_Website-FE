import styled from 'styled-components';

import { Span } from '@components/typograph/Text';
import { ExecutiveProfile } from '@components/display/section/ExecutiveProfile';

import PresidentImage from '@/assets/executive_profile/president.png'; // 회장 이미지
import VicePresidentImage from '@/assets/executive_profile/vice_president.png'; // 부회장 이미지
import FinancialManagerImage from '@/assets/executive_profile/affairs_manger.png'; // 총무부장 이미지
import TechnicalManagerImage from '@/assets/executive_profile/technic_director.png'; // 기술부장 이미지
import PromotionManagerImage from '@/assets/executive_profile/PR_director.png'; // 홍보부장 이미지
import StutyManagerImage from '@/assets/executive_profile/study_director.png'; // 학술부장 이미지
import ExternalImage from '@/assets/executive_profile/external.png'; // 학술부장 이미지
import SupporterImage from '@/assets/executive_profile/supporter.png'; // 서포트 이미지

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
      name: '장기원',
      role: '회장',
      group_number: 25,
      major: '플랫폼소프트웨어',
      student_id_year: 24,
      description: 'KERT를 운영하며 전반적인 활동을 총괄해요.',
      image_url: PresidentImage,
      color: '#0047FF',
    },
    {
      name: '박재민',
      role: '부회장',
      group_number: 25,
      major: '인공지능컴퓨팅',
      student_id_year: 24,
      description: 'KERT의 각종 행사를 기획하고 운영해요.',
      image_url: VicePresidentImage,
      color: '#5A00FF',
    },
    {
      name: '신찬규',
      role: '총무부장',
      group_number: 21,
      major: '심화컴퓨터',
      student_id_year: 20,
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
      name: '황부연',
      role: '기술부장',
      group_number: 25,
      major: '글로벌소프트웨어',
      student_id_year: 24,
      description: 'KERT의 웹사이트, 서버와 같은 IT 시스템을 관리해요.',
      image_url: TechnicalManagerImage,
      color: '#00FF0A',
    },
    {
      name: '김경민',
      role: '대외부장',
      group_number: 25,
      major: '인공지능컴퓨팅',
      student_id_year: 24,
      description: 'KERT 외부 행사 및 교류를 총괄해요.',
      image_url: ExternalImage,
      color: '#00FFA2',
    },
    {
      name: '권민서',
      role: '학술부장',
      group_number: 25,
      major: '글로벌소프트웨어',
      student_id_year: 24,
      description: '정기 세미나, 프로젝트 및 스터디를 관리해요.',
      image_url: StutyManagerImage,
      color: '#0094FF',
    },
    {
      name: '박소현',
      role: '대외/서포트',
      group_number: 24,
      major: '심화컴퓨터',
      student_id_year: 23,
      description: 'KERT의 전체적인 운영 및 관리에 도움을 줘요',
      image_url: SupporterImage,
      color: '#FF007A',
    },
  ];

  return (
    <Section id="executives">
      <Content>
        <Title>KERT 26기 임원진을 소개합니다</Title>
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
