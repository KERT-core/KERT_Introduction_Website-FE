import { forwardRef } from 'react';
import styled from 'styled-components';

import { Input } from '@components/forms/Input';

const Wrapper = styled.div`
  margin: 40px 0;
`;

export const AddAdmin = forwardRef(({ ...props }, ref) => {
  return (
    <Wrapper>
      {/* 사용자가 입력하는 부분 */}
      <Input ref={ref.student_id} label="학번" placeholder="20xxxxxxxx" />
      <div style={{ display: 'flex', gap: '20px' }}>
        <Input
          ref={ref.generation}
          label="동아리 가입연월"
          placeholder="2024-9"
        />
        <Input ref={ref.role} label="역할" placeholder="담당 역할" />
      </div>
      <Input
        ref={ref.description}
        label="기타 인적사항"
        placeholder="이름 및 별칭 등 추가 정보가 필요하면 자유롭게 입력"
      />
    </Wrapper>
  );
});

AddAdmin.displayName = 'AddAdmin';
