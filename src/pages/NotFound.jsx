// 정의되지 않은 페이지를 접속했을 때 보이는 페이지

import { useState } from 'react';
import styled from 'styled-components';
import { useGlitch } from 'react-powerglitch';

import { Span } from '@components/typograph/Text';

import Square from '@/assets/kert_logos/Square.svg';
import NotFoundIcon from '@/assets/404.svg';

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  user-select: none;
`;

const Title = styled(Span).attrs({
  $size: 'sxl',
  $weight: 'extrabold',
})`
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled(Span).attrs({
  $size: 'l',
  $color: '--secondary-text-color',
})``;

const URL = styled(Span).attrs({
  $size: 's',
  $color: '--secondary-text-color',
})`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
  overflow: hidden;

  opacity: 0.5;

  & > svg {
    position: absolute;
    width: 758px;
    height: 758px;
  }

  & > svg:first-child {
    position: absolute;
    left: -258px;
    bottom: -136px;

    mask-image: linear-gradient(
      61deg,
      rgba(255, 255, 255, 0.3) -100%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  & > svg:last-child {
    position: absolute;
    top: calc(-258px + 80px);
    right: -136px;

    mask-image: linear-gradient(
      230deg,
      rgba(255, 255, 255, 0.3) -100%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default function NotFound() {
  const glitch = useGlitch({
    timing: {
      easing: 'ease-in-out',
    },
    slice: {
      hueRotate: false,
    },
  });

  const example = [
    '해킹 시도는 아니시죠?',
    'URL 오타라고 생각할게요',
    '보여드릴 내용이 없네요...',
  ];

  const [message] = useState(
    // example에서 랜덤으로 가져옴
    example[Math.floor(Math.random() * example.length)],
  );

  return (
    <Wrapper>
      <Background>
        <Square fill="var(--primary-text-color)" />
        <Square fill="var(--primary-text-color)" />
      </Background>
      <div ref={glitch.ref}>
        <NotFoundIcon
          fill="var(--primary-text-color)"
          style={{ width: '200px', opacity: '0.5' }}
        />
      </div>
      <div>
        <Title>찾을 수 없는 페이지</Title>
        <Subtitle>{message}</Subtitle>
      </div>
      <URL>{window.location.href}</URL>
    </Wrapper>
  );
}
