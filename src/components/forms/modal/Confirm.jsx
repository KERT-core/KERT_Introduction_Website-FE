import useConfirm from '@/stores/useConfirm';

import styled from 'styled-components';

import { ModalLayout } from '@components/layouts/ModalLayout';
import { Span } from '@components/typograph/Text';
import { IButton } from '@components/forms/Button';

const ModalContainer = styled.div`
  position: relative;

  padding: 30px;
  width: 500px;
  max-width: 90%;
  min-height: 100px;

  border-radius: 20px;
  box-sizing: border-box;

  background-color: var(--container-primary-background);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: slide-in 0.3s cubic-bezier(0.27, 0.02, 0.26, 0.99);
`;

const ConfirmButton = styled(IButton)`
  background-color: ${(props) => {
    if (props.$color?.startsWith('--')) {
      return `var(${props.$color});`;
    } else {
      return props.$color ?? 'var(--primary-color)';
    }
  }};
  margin: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton = styled(IButton)`
  transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  background-color: transparent;
  border: 2px solid var(--container-border);
  color: var(--secondary-text-color);
  margin: 5px;

  &:hover {
    border-color: ${(props) => {
      if (props.$color?.startsWith('--')) {
        return `var(${props.$color});`;
      } else {
        return props.$color ?? 'var(--secondary-text-color)';
      }
    }};
    color: ${(props) => {
      if (props.$color?.startsWith('--')) {
        return `var(${props.$color});`;
      } else {
        return props.$color ?? 'var(--secondary-text-color)';
      }
    }};
  }
`;

const Title = styled(Span).attrs({
  $size: 'l',
  $weight: 'extrabold',
})`
  margin-bottom: 20px;
`;

const BottomControlBox = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const Confirm = () => {
  const {
    isOpen,
    title,
    content,
    onConfirm,
    onCancel,
    confirm_label,
    cancel_label,
    confirm_color,
    cancel_color,
  } = useConfirm();

  return (
    <ModalLayout $isOpen={isOpen}>
      <ModalContainer>
        <Title>{title}</Title>
        {content}
        <BottomControlBox>
          <CancelButton
            type="flat"
            $width="110px"
            $color={cancel_color}
            onClick={onCancel}
          >
            {cancel_label}
          </CancelButton>
          <ConfirmButton
            type="flat"
            $width="110px"
            $color={confirm_color}
            onClick={onConfirm}
          >
            {confirm_label}
          </ConfirmButton>
        </BottomControlBox>
      </ModalContainer>
    </ModalLayout>
  );
};
