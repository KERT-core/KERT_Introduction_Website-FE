import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Text } from '../typograph/Text';

import useHistory from '../../stores/dashboard/useHistory';
import { API } from '../../utils/api';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../transitions/fade-slide.css';

const PreviewWrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  gap: 80px;
`;

const YearListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HistoryListWrapper = styled.div``;

const HistoryElementWrapper = styled.div`
  padding: 15px 20px;
  background-color: #ffffff10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
`;

const YearWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 34px;
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
  font-size: 22px;
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
        {history.description}
      </Text>
    </HistoryElementWrapper>
  );
};

export const HistoryPreview = () => {
  const nodeRef = createRef(null);
  const [display_year, setDisplayYear] = useState();
  const { saveHistory, histories } = useHistory(); // 불러온 데이터를 저장할 상태

  useEffect(() => {
    // 만약 이전에 받은 API 데이터가 없다면 API 요청 후 데이터를 store에 저장
    if (Object.keys(histories).length === 0) {
      API.GET('/histories')
        .then((api_res) => {
          const return_value = saveHistory(api_res); // API 데이터를 Zustand 상태에 반영
          setDisplayYear(Object.keys(return_value).reverse().at(0));
          console.log(api_res);
        })
        .catch((err) => {
          // 오류 발생 시 안내
          console.warn('History API 통신 실패. 기본 데이터를 사용합니다.', err);
          const return_value = saveHistory([
            {
              id: 0,
              year: 1997,
              month: 11,
              description: '동아리 창립',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 1,
              year: 2006,
              month: 4,
              description: '정보보호대학동아리엽학 KUCIS 소속',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 2,
              year: 2008,
              month: 8,
              description: '한국정보보호진흥원 S/W 보안취약점 찾기 대회 우수상',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 3,
              year: 2013,
              month: 4,
              description: '삼성소프트웨어프렌드쉽',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 4,
              year: 2016,
              month: 2,
              description: '대경강원권 연합창업경진대회 최우수상',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 5,
              year: 2016,
              month: 4,
              description: 'Naver D2 Campus 파트너 선정',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 6,
              year: 2016,
              month: 4,
              description: '정보보호대학동아리연합 KUCIS 소속',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 7,
              year: 2016,
              month: 7,
              description: 'KERPERENCE S/S 주최',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 8,
              year: 2016,
              month: 12,
              description: 'KERPERENCE W/W 주최',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 9,
              year: 2017,
              month: 2,
              description: 'KNU 창업 비즈니스 플랜 경진대회 대상',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 10,
              year: 2017,
              month: 4,
              description: '정보보호대학 동아리 연합 KUCIS 소속',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 11,
              year: 2018,
              month: 4,
              description: 'Naver D2 Campus 파트너 선정',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 12,
              year: 2021,
              month: 9,
              description: '제2회 KOSPO 웹서비스 정보보안 경진대회 최우수상',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 13,
              year: 2023,
              month: 4,
              description: 'HSpace 파트너십 체결',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 14,
              year: 2024,
              month: 4,
              description: '전국사이버보안연합 CCA 소속',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
            {
              id: 15,
              year: 2024,
              month: 5,
              description: '정보보호대학동아리연합 KUCIS 소속',
              created_at: '2024-09-26T23:48:50.068140',
              updated_at: '2024-09-26T23:48:50.068140',
            },
          ]);
          setDisplayYear(Object.keys(return_value).reverse().at(0));
        })
        .finally(() => {
          console.log('History API 통신 종료');
        });
    } else {
      console.info('이미 API 데이터가 있으므로 API 응답을 요청하지 않습니다.');
    }
  }, [histories, saveHistory]);

  const display_key = Object.keys(histories).reverse().slice(0, 4);

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
            {histories[
              display_year ?? Object.keys(histories).reverse().at(0)
            ]?.map((history, i) => (
              <HistoryElement key={i} history={history} />
            ))}
          </HistoryListWrapper>
        </CSSTransition>
      </TransitionGroup>
    </PreviewWrapper>
  );
};
