import styled from 'styled-components';

import { ModalLayout } from '../../layouts/ModalLayout';
import { Button } from '../Button';
import { Span } from '../../typograph/Text';

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

export const Alert = ({
  title = '알림',
  isOpen,
  onClose,
  buttonColor,
  children,
}) => {
  return (
    <ModalLayout $isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <Title>{title}</Title>
        {children}
        <BottomControlBox>
          <Button type="flat" color={buttonColor} onClick={onClose}>
            닫기
          </Button>
        </BottomControlBox>
      </ModalContainer>
    </ModalLayout>
  );
};
