import { Header } from './Dashboard.styled';
import { Column, Row } from './Home.styled';

import { Board } from '@components/display/dashboard/home/board';

export default function Home() {
  return (
    <>
      {/* 유튜브 스튜디오의 배열을 따라갑니다. */}
      <Header>홈</Header>
      {/* 1차적으로 가로 방향 배치 후 2차적으로 세로 방향 배치 */}
      <Row>
        <Column>
          <Board.History />
          <Board.User />
        </Column>
        <Column>
          <Board.Admin />
          <Board.Executive />
        </Column>
        <Column>
          <Board.Post />
        </Column>
      </Row>
    </>
  );
}
