import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container',
})`
  // 그 외 커스텀 css 지원
  ${({ css }) => css}

  width: ${({ $width }) => $width || 'fit-content'};
  max-width: ${({ $maxWidth }) => $maxWidth || '1000px'};
  height: ${({ $height }) => $height || 'fit-content'};
  max-height: ${({ $maxHeight }) => $maxHeight || '100%'};

  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '50px'};
  box-sizing: border-box;

  display: ${({ $display }) => $display || 'flex'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'flex-start'};
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  gap: ${({ $gap }) => $gap || '60px'};

  border-radius: ${({ $borderRadius }) => $borderRadius || '30px'};

  background-color: var(--container-primary-background);
  border: 1px solid var(--container-border);
`;
