import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(5px);

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fade-in 0.2s ease-in-out;
`;

export const ModalLayout = ({ $isOpen, children }) => {
  return $isOpen ? <Overlay $isOpen={$isOpen}>{children}</Overlay> : null;
};
