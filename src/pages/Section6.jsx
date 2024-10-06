import styled from 'styled-components';

import { Span } from '../components/typograph/Text';
import GraphSVG from '../assets/graph.svg';
import { Link } from 'react-router-dom';
import { HistoryPreview } from '../components/display/HistoryPreview';

const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  // viewport의 높이에서 내비바 높이만큼 감소합니다.
  min-height: calc(100vh - 80px);
  margin-top: 80px;
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
  width: 80%;
  height: max-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  @media (max-width: 900px) {
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
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 900px) {
    & {
      gap: 30px;
    }
  }
`;
const RightContent = styled.div``;

const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 60px);
  word-break: keep-all;
`;

const Description = styled(Span).attrs({
  $weight: 'light',
})`
  font-size: clamp(16px, 2vw, 24px);
  word-break: keep-all;
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
      {/* Scale 100% Fixed */}
      <Graph />
      {/* Center Fixed */}
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
