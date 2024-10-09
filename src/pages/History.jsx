import styled from 'styled-components';
import { ShapeBackground } from '../components/display/ShapeBackground';
import { Text, Span } from '../components/typograph/Text';

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  & > div.shape-background {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
`;

const Description = styled(Span).attrs({
  $weight: 'light',
  $color:"rgba(255, 255, 255, 0.7)"
})`
  font-size: clamp(16px, 2vw, 18px);
  word-break: keep-all;
  margin-top: 10px; 
`;

const Year = styled(Span).attrs({
  $weight: 'bold',
})`
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
`;


const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 378px;
  height: 96px;
  left: calc(50% - 189px);
  top: 150px;
`;

const HistoryFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;

  width: 920px;
  height: 136px;

  position: absolute; 
  top: 300px;
  left: calc(50% - 460px); /*중앙 정렬*/
  transform: translateX(10%);
  
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;



const HistoryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 20px;

  width: 700px;
  height: 136px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const HistoryCard = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: 459px;
  height: 58px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), inset 4px 4px 20px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border-radius: 10px;


  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Month = styled(Span).attrs({
  $weight: 'bold',
})`
  font-size: clamp(18px, 2vw, 12px);
  word-break: keep-all;
`;

const HistoryContent=styled(Span).attrs({
  $weight: 'regular',
})`
  font-size: clamp(14px, 2vw, 12px);
  word-break: keep-all;

`

export default function History() {
  return (
    <>
      <BackgroundWrapper>
        <TitleContainer>
          <Title>KERT 연혁</Title>
          <Description>KERT는 매년 성장하는 동아리입니다</Description>
        </TitleContainer>
        <HistoryFrame>
          <Year>2024</Year>
          <HistoryCardContainer>
            <HistoryCard>
              <Month>4월</Month>
              <HistoryContent>전국 사이버 보안 연합 CCA 소속</HistoryContent>
            </HistoryCard>

            <HistoryCard>
              <Month>5월</Month>
              <HistoryContent>정보 보호 대학 동아리 연합 KUCIS 소속</HistoryContent>
            </HistoryCard>
          </HistoryCardContainer>
        </HistoryFrame>
        <ShapeBackground />
      </BackgroundWrapper>
    </>
  );
}
