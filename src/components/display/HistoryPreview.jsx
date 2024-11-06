import { createRef, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '@components/typograph/Text';

import { refineHistories } from '@/utils/refineHistory';
import { useHistoriesQuery } from '@/hooks/histories/query';

import SAMPLE_HISTORIES from '@/utils/sampleHistories';

import '@/transitions/fade-slide.css';

const PreviewWrapper = styled.div`
  width: 600px;
  height: auto;

  padding: 20px;

  display: flex;
  flex-direction: row;
  gap: 50px;

  // 모바일 대응
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const YearListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
    overflow-x: visible;
  }

  // 모바일 대응
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const HistoryListWrapper = styled.div`
  // 모바일 대응
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const HistoryElementWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  background-color: #ffffff10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 10px;

  & > span {
    word-break: keep-all;
  }

  // 모바일 대응
  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const YearWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 2vw;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:not(.active) > span {
    color: #303146;
  }

  &:not(.active) > div {
    background-color: #303146;
  }

  &:last-child > div:after {
    background: linear-gradient(
      0deg,
      rgba(48, 49, 70, 0) 0%,
      rgba(48, 49, 70, 1) 100%
    );
  }

  // 모바일 대응
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(.active) > div {
      background-color: transparent;
    }
  }
`;

const Year = styled.span`
  transition: color 0.2s ease-in-out;
  width: 63px;
  font-weight: 800;
  font-size: clamp(16px, 2vw, 24px);
  text-align: left;
  color: white;

  // 모바일 대응
  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const Dot = styled.div`
  position: relative;
  transition: background-color 0.2s ease-in-out;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: white;

  &:after {
    transform: background 0.2s ease-in-out;
    content: '';
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 60px;
    background: #303146;
  }

  // 모바일 대응
  @media (max-width: 768px) {
    width: 100%;
    height: 2px;
    border-radius: 0px;

    &:after {
      display: none;
    }
  }
`;

const HistoryElement = ({ history }) => {
  return (
    <HistoryElementWrapper>
      <Text size="s" color="#ffffff88">
        {history.year}.{history.month}
      </Text>
      <Text size="m" color="white">
        {history.content}
      </Text>
    </HistoryElementWrapper>
  );
};

HistoryElement.propTypes = {
  history: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export const HistoryPreview = () => {
  const nodeRef = createRef(null);

  const [displayData, setDisplayData] = useState({}); // 화면 표시에 사용할 데이터 (모든 데이터가 저장됨)
  const [displayYear, setDisplayYear] = useState(); // 기본으로 표시할 연도 (최신 연도 저장함)
  const [displayKey, setDisplayKey] = useState(); // 화면에 표시할 연도 4개 저장

  const { data, isLoading, isError } = useHistoriesQuery();

  useEffect(() => {
    if (isError || isLoading) {
      setDisplayData(refineHistories(SAMPLE_HISTORIES));
    } else {
      setDisplayData(data);
    }

    const keys = Object.keys(displayData).reverse();
    setDisplayYear(keys[0]);
    setDisplayKey(keys.slice(0, 4));
  }, [data, displayData]);

  if (isLoading) {
    return <></>;
  }

  return (
    <PreviewWrapper>
      <YearListWrapper>
        {displayKey?.map((year, i) => (
          <YearWrapper
            key={i}
            className={displayYear == year ? 'active' : ''}
            onClick={() => setDisplayYear(parseInt(year))}
          >
            <Year>{year}</Year>
            <Dot />
          </YearWrapper>
        ))}
      </YearListWrapper>
      <TransitionGroup style={{ position: 'relative', width: '100%' }}>
        <CSSTransition
          nodeRef={nodeRef}
          key={displayYear}
          timeout={500}
          classNames="fade-slide"
          style={{ position: 'absolute', left: '0' }}
        >
          <HistoryListWrapper ref={nodeRef}>
            {displayData[displayYear]?.map((history, i) => (
              <HistoryElement key={i} history={history} />
            ))}
          </HistoryListWrapper>
        </CSSTransition>
      </TransitionGroup>
    </PreviewWrapper>
  );
};
