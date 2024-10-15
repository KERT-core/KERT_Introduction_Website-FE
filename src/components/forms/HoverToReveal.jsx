import styled from 'styled-components';
import { Span } from '@components/typograph/Text';

const HoverToRevealWrapper = styled.div`
  position: relative;

  width: ${(props) => props.$width ?? 'fit-content'};
  height: ${(props) => props.$height ?? 'fit-content'};
  padding: 14px 20px;

  border-radius: 12px;

  background-color: var(--transparent-button-background);

  overflow: hidden;

  user-select: none;
  cursor: none;

  &:hover > #content {
    filter: blur(0px);
  }
  &:hover > #label {
    opacity: 0;
  }
`;

const Label = styled(Span).attrs({
  id: 'label',
  $size: '12px',
  $weight: 'bold',
  $color: '--secondary-text-color',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: opacity 0.2s ease-in-out;
  opacity: 1;

  white-space: nowrap;
`;

const Content = styled.div.attrs({ id: 'content' })`
  transition: filter 0.3s ease-in-out;
  filter: blur(10px);
`;

export const HoverToReveal = ({ children }) => {
  return (
    <HoverToRevealWrapper>
      <Label>커서를 올려서 확인</Label>
      <Content>{children}</Content>
    </HoverToRevealWrapper>
  );
};
