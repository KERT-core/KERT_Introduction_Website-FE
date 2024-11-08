import { forwardRef } from 'react';
import styled from 'styled-components';

import { Input } from '@components/forms/Input';

const Wrapper = styled.div`
  margin: 40px 0;
`;

export const AddHistory = forwardRef(({ ...props }, ref) => {
  return (
    <Wrapper>
      {/* 사용자가 입력하는 부분 */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Input
          ref={ref.year}
          type="number"
          label="연도"
          placeholder="2024"
          defaultValue={history.year}
        />
        <Input
          ref={ref.month}
          type="number"
          label="월"
          placeholder="1"
          defaultValue={history.month}
        />
      </div>
      <Input
        ref={ref.content}
        label="내용"
        placeholder="연혁 내용 입력"
        defaultValue={history.description}
      />
    </Wrapper>
  );
});

AddHistory.displayName = 'AddHistory';
