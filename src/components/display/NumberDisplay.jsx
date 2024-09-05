// NumberDisplay.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import styled from 'styled-components';

// 사용자가 생성한 컴포넌트 및 JS파일 import
import { Text } from '../typograph/Text';

const NumberDisplayBox = styled.div.attrs({
  id: 'dashboard-number-display',
})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  & span:not(:last-child) {
    margin-bottom: 4px;
  }
`;

/**
 * 라벨과 함께 숫자를 강조하여 표시합니다.
 * @param {string} label *라벨
 * @param {number} number *표시될 숫자
 * @param {string} detailed_label 상세 라벨
 * @returns {ReactElement} NumberDisplay
 */
export const NumberDisplay = ({ label, number, detailed_label }) => {
  return (
    <NumberDisplayBox>
      <div>
        {/* 만약 detailed_label을 받으면 표시합니다. */}
        {detailed_label ? (
          <Text size="xs" weight="regular" color="--secondary-text-color">
            {detailed_label}
          </Text>
        ) : null}
        <Text size="s" weight="regular">
          {label}
        </Text>
      </div>
      <Text size="sxl" weight="bold">
        {number}
      </Text>
    </NumberDisplayBox>
  );
};