import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '@components/typograph/Text';

import { API } from '@/utils/api';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '@/transitions/fade-slide.css';
import SAMPLE_HISTORIES from '@/utils/sampleHistories';
import { useQuery } from 'react-query';
import { refineHistories } from '@/utils/refineHistory';

const PreviewWrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  gap: min(5vw, 80px);
`;

const YearListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HistoryListWrapper = styled.div``;

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
`;

const Year = styled.span`
  transition: color 0.2s ease-in-out;
  width: 63px;
  font-weight: 800;
  font-size: clamp(16px, 2vw, 24px);
  text-align: left;
  color: white;
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
  const [display_year, setDisplayYear] = useState();
  const [display_key, setDisplayKey] = useState();

  const [sampleData] = useState(refineHistories(SAMPLE_HISTORIES));

  const { data, isLoading, isError } = useQuery(
    'mainpage_history',
    async () => {
      let data = await API.GET('/histories');
      console.log(data);

      // 만약 서버에 저장된 연혁이 없으면 기본 데이터 반환
      if (data.length > 0) {
        data = refineHistories(data);
      } else {
        data = sampleData;
      }

      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  );

  useEffect(() => {
    const keys = Object.keys(data ?? sampleData).reverse();
    setDisplayYear(keys[0]);
    setDisplayKey(keys.slice(0, 4));
  }, [data, sampleData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PreviewWrapper>
      <YearListWrapper>
        {display_key.map((year, i) => (
          <YearWrapper
            key={i}
            className={display_year == year ? 'active' : ''}
            onClick={() => setDisplayYear(parseInt(year))}
          >
            <Year>{year}</Year>
            <Dot />
          </YearWrapper>
        ))}
      </YearListWrapper>
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={display_year}
          timeout={500}
          classNames="fade-slide"
          style={{ position: 'absolute' }}
        >
          <HistoryListWrapper ref={nodeRef}>
            {isError
              ? sampleData[display_year]?.map((history, i) => (
                  <HistoryElement key={i} history={history} />
                ))
              : data[display_year]?.map((history, i) => (
                  <HistoryElement key={i} history={history} />
                ))}
          </HistoryListWrapper>
        </CSSTransition>
      </TransitionGroup>
    </PreviewWrapper>
  );
};
