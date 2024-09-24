import useLoading from '../../../stores/useLoading';

import styled, { keyframes } from 'styled-components';

import { ModalLayout } from '../../layouts/ModalLayout';
import { Text } from '../../typograph/Text';

import { SquareLogo } from '../../../assets/kert_logos';

const LoadingContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

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

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

const growShrink = keyframes`
  0%, 100% {
    transform: scale(1);
    opcity: 1;
    background-color: transparent;
    border-radius: 20px;
  }
  50% {
    opacity: 0.5;
    transform: scale(0.25);
    background-color: white;
    border-radius: 20px;
  }
`;

const LoadingIcon = styled(SquareLogo)`
  fill: white;

  width: 32px;
  height: 32px;

  animation: ${growShrink} 1s cubic-bezier(0.58, 0.06, 0.35, 0.9) infinite;
  animation-delay: ${(props) => props.delay}s;
`;

export const Loading = () => {
  const { isOpen, message } = useLoading();

  return (
    <ModalLayout $isOpen={isOpen}>
      <LoadingContainer>
        <IconContainer>
          <LoadingIcon delay={0.0}></LoadingIcon>
          <LoadingIcon delay={0.12}></LoadingIcon>
          <LoadingIcon delay={0.24}></LoadingIcon>
          <LoadingIcon delay={0.36}></LoadingIcon>
        </IconContainer>
        <Text>{message}</Text>
      </LoadingContainer>
    </ModalLayout>
  );
};
