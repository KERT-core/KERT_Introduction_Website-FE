import styled from 'styled-components';

import { Span } from '../../../typograph/Text';

import DownIcon from '../../../../assets/icons/down.svg';

const ID = styled(Span).attrs({
  $size: 's',
  $weight: 'bold',
  $color: '--secondary-text-color',
})`
  margin-top: 30px;
  margin-bottom: 6px;
`;

const Description = styled(Span)`
  margin-bottom: 30px;
`;

const Display = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;

  text-align: center;
  background-color: var(--container-secondary-background);
`;

const Date = styled(Span).attrs({
  $size: 's',
  $weight: 'bold',
  $color: '--secondary-text-color',
})`
  margin-bottom: 8px;
`;

const Content = styled(Span).attrs({
  $size: 'l',
  $weight: 'extrabold',
})``;

export const UpdatedHistory = ({ current_history, updated_history }) => {
  return (
    <>
      <ID>History ID {updated_history.history_id}</ID>
      <Description>연혁이 다음과 같이 수정되었습니다.</Description>
      {/* 기존 연혁 */}
      <Display style={{ opacity: '0.5' }}>
        <Date>
          {current_history.year}년 {current_history.month}월
        </Date>
        <Content>{current_history.content}</Content>
      </Display>
      {/* 화살표 */}
      <div style={{ margin: '10px 0', width: '100%', textAlign: 'center' }}>
        <DownIcon fill="var(--container-secondary-background)" />
      </div>
      {/* 변경된 연혁 */}
      <Display>
        <Date>
          {updated_history.year}년 {updated_history.month}월
        </Date>
        <Content>{updated_history.content}</Content>
      </Display>
    </>
  );
};
