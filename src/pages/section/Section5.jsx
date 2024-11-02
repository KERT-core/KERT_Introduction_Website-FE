import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Span } from '@components/typograph/Text';
import { HistoryPreview } from '@components/display/HistoryPreview';

import GraphSVG from '@/assets/graph.svg';

const SectionWrapper = styled.section.attrs({
  id: 'history',
})`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    326deg,
    rgba(0, 9, 21, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  overflow: hidden;
`;

const Graph = styled(GraphSVG)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 1280px;
  height: max-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    & {
      flex-direction: column; /* 화면이 작아지면 세로 방향 */
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 80px;
    }
  }
`;

const LeftContent = styled.div`
  margin: 20px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1280px) {
    & {
      gap: 30px;
      align-items: center;
    }
  }
`;
const RightContent = styled.div``;

const Title = styled(Span).attrs({
  $size: '45px',
  $weight: 'extrabold',
})`
  word-break: keep-all;

  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled(Span).attrs({
  $size: 'l',
  $weight: 'light',
})`
  word-break: keep-all;

  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 300;
  font-size: clamp(12px, 1.5vw, 20px);
  text-decoration: none;
  color: var(--primary-text-color);
  opacity: 0.5;
  width: fit-content;
  height: fit-content;
`;

export default function Section6() {
  return (
    <SectionWrapper>
      <Graph />
      <Content>
        <LeftContent>
          <Title>
            KERT는
            <br />
            매년 성장하고 있어요
          </Title>
          <Description>
            작년보다 더 뛰어난 동아리로 발전하고 있답니다.
          </Description>
          <StyledLink to="/history">상세 연혁 보기 →</StyledLink>
        </LeftContent>
        <RightContent>
          <HistoryPreview />
        </RightContent>
      </Content>
    </SectionWrapper>
  );
}
