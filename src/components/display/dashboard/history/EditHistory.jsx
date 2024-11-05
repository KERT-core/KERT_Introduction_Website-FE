import { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { Span } from '@components/typograph/Text';
import { Button } from '@components/forms/Button';

import { formatDate } from '@/utils/formatDate';
import { HintedInput } from '@components/forms/HintedInput';
import { Container } from '@components/forms/Container';

const Wrapper = styled.div`
  margin: 40px 0;

  & > Button {
    position: absolute;
    left: 35px;
    bottom: 35px;
  }
`;

const Preview = styled(Container)`
  margin: 0;
  margin-bottom: 30px;

  width: 100%;
  padding: 30px;
  border-radius: 20px;

  border: none;
  background-color: var(--container-secondary-background);
`;

const Description = styled(Span).attrs({
  $size: 'l',
  $weight: 'bold',
})`
  margin-bottom: 8px;
`;

const Date = styled(Span).attrs({
  $size: 's',
  $color: '--secondary-text-color',
})``;

export const EditHistory = forwardRef(
  ({ history, onDelete, ...props }, ref) => {
    if (!history) {
      // console.error('history 객체가 없습니다.');
      return;
    }

    const [previewDesc, setPreviewDesc] = useState(history.content);

    return (
      <Wrapper>
        {/* 수정할 타겟을 보여줌 */}
        <Preview>
          <Description>
            {previewDesc != '' ? previewDesc : '비어있음'}
          </Description>
          <Date>
            <b>등록</b> {formatDate(history.created_at)}ㆍ<b>수정</b>{' '}
            {formatDate(history.updated_at)}
          </Date>
        </Preview>
        {/* 사용자가 수정하는 부분 */}
        <div style={{ display: 'flex' }}>
          <HintedInput
            ref={ref.year}
            type="number"
            label="연도"
            defaultValue={history.year}
          />
          <HintedInput
            ref={ref.month}
            type="number"
            label="월"
            defaultValue={history.month}
          />
        </div>
        <HintedInput
          ref={ref.content}
          label="내용"
          defaultValue={history.content}
          onChange={(e) => {
            // 사용자가 내용을 변경하면 미리보기의 내용도 변경합니다.
            setPreviewDesc(e.target.value);
          }}
        />
        <Button
          type="outline"
          color="--danger-color"
          text_color="--danger-color"
          onClick={onDelete}
        >
          삭제
        </Button>
      </Wrapper>
    );
  },
);
