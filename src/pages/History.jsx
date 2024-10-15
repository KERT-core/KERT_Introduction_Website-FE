import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useHistoriesQuery } from '@/hooks/histories/query';

import { ShapeBackground } from '@components/display/ShapeBackground';
import { Span } from '@components/typograph/Text';

const Wrapper = styled.div`
  overflow: hidden;

  & > div.shape-background {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TitleWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
`;

const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  display: block;
  text-align: center;
  font-size: clamp(36px, 5vw, 52px);
  word-break: keep-all;
`;

const Description = styled(Span).attrs({
  $weight: 'light',
  $color: 'rgba(255, 255, 255, 0.7)',
})`
  display: block;
  text-align: center;
  font-size: clamp(16px, 2.5vw, 24px);
  word-break: keep-all;
  margin-top: 10px;
`;

const HistoriesWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;

const Year = styled(Span).attrs({
  $weight: 'bold',
})`
  width: 100px;
  text-align: left;
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
  color: ${(props) => props.$color || '#FFFFFF'};
`;

const YearHistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 180px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.$isVisible ? '0px' : '20px')});
  transition:
    opacity 0.6s ease-in-out 0.1s,
    transform 0.6s ease-out 0.1s;
`;

const HistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 20px;
`;

const HistoryCard = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: auto;
  height: 58px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow:
    0px 0px 20px rgba(0, 0, 0, 0.1),
    inset 4px 4px 20px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border-radius: 10px;
`;

const Month = styled(Span).attrs((props) => ({
  $weight: 'bold',
  $color: props.$color || '#FFFFFF',
}))`
  font-size: clamp(18px, 2vw, 12px);
  word-break: keep-all;
  color: ${(props) => props.$color};
`;

const HistoryContent = styled(Span).attrs((props) => ({
  $weight: 'regular',
  $color: props.$color || '#FFFFFF',
}))`
  font-size: clamp(14px, 2vw, 12px);
  word-break: keep-all;
  color: ${(props) => props.$color};
`;

export default function History() {
  const { data, isFetched } = useHistoriesQuery();
  const [visibleYears, setVisibleYears] = useState({});

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setVisibleYears((prev) => ({
        ...prev,
        [entry.target.dataset.year]: entry.isIntersecting, // 화면에 보이면 true, 안보이면 false
      }));
    });
  };

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // 필요한 threshold 값을 설정 (0.1은 요소가 10% 보일 때 trigger)
    });

    const yearContainers = document.querySelectorAll('[data-year]');
    yearContainers.forEach((container) => {
      observer.current.observe(container);
    });

    return () => {
      yearContainers.forEach((container) => {
        if (observer.current) observer.current.unobserve(container);
      });
    };
  }, [data]);

  return (
    <Wrapper>
      <ShapeBackground />
      <TitleWrapper>
        <Title>KERT 연혁</Title>
        <Description>KERT는 매년 성장하는 동아리입니다</Description>
      </TitleWrapper>
      <HistoriesWrapper>
        {!isFetched ? (
          <></>
        ) : (
          Object.keys(data)
            .reverse()
            .map((year) => (
              <YearHistoryContainer
                key={year}
                data-year={year}
                $isVisible={visibleYears[year]}
              >
                <Year>{year}</Year>
                <HistoryCardContainer>
                  {data[year].map((history, i) => (
                    <HistoryCard key={i}>
                      <Month>{history.month}월</Month>
                      <HistoryContent>{history.content}</HistoryContent>
                    </HistoryCard>
                  ))}
                </HistoryCardContainer>
              </YearHistoryContainer>
            ))
        )}
      </HistoriesWrapper>
    </Wrapper>
  );
}
