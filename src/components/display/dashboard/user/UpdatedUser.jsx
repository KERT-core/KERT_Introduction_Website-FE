import styled from 'styled-components';

import { Span } from '@components/typograph/Text';

import DownIcon from '@/assets/icons/down.svg';

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

const Info = styled(Span).attrs({
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

export const UpdatedUser = ({ current_admin, updated_admin }) => {
  return (
    <>
      <ID>Admin ID {updated_admin.student_id}</ID>
      <Description>관리자가 다음과 같이 수정되었습니다.</Description>
      {/* 기존 관리자 */}
      <Display style={{ opacity: '0.5' }}>
        <Info>
          {current_admin.generation}ㆍ{current_admin.name}ㆍ{current_admin.role}
        </Info>
        <Content>{current_admin.description}</Content>
      </Display>
      {/* 화살표 */}
      <div style={{ margin: '10px 0', width: '100%', textAlign: 'center' }}>
        <DownIcon fill="var(--container-secondary-background)" />
      </div>
      {/* 변경된 관리자 */}
      <Display>
        <Info>
          {updated_admin.generation}ㆍ{updated_admin.name}ㆍ{updated_admin.role}
        </Info>
        <Content>{updated_admin.description}</Content>
      </Display>
    </>
  );
};
