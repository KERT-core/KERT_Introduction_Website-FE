// Home.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import { useNavigate } from 'react-router-dom';

// 사용자가 생성한 컴포넌트 및 JS파일 import
import {
  Header,
  Container,
  ContainerHeader,
  Button,
  BoardColumn,
} from './Dashboard.styled';
import { NumberDisplay } from '../../components/display/NumberDisplay';

const HistoryBoard = ({ name, navigate }) => {
  return (
    <Container>
      <ContainerHeader>{name}</ContainerHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="전체 연혁 개수" number={16} />
        <NumberDisplay label="연도 개수" number={10} />
      </div>
      <Button
        type="translucent"
        onClick={() => {
          navigate('./history');
        }}
      >
        연혁 추가/제거로 이동
      </Button>
    </Container>
  );
};

const ExecutiveBoard = ({ name, navigate }) => {
  return (
    <Container>
      <ContainerHeader>{name}</ContainerHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="전체 임원진 수" number={36} />
        <NumberDisplay label="현재 임원진 수" number={5} />
      </div>
      <Button
        type="translucent"
        onClick={() => {
          navigate('./executive');
        }}
      >
        임원진 추가/제거로 이동
      </Button>
    </Container>
  );
};

const AdminBoard = ({ name, navigate }) => {
  return (
    <Container>
      <ContainerHeader>{name}</ContainerHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="등록된 관리자 수" number={5} />
      </div>
      <Button
        type="translucent"
        onClick={() => {
          navigate('./admin');
        }}
      >
        관리자 추가/제거로 이동
      </Button>
    </Container>
  );
};

const UserBoard = ({ name, navigate }) => {
  return (
    <Container>
      <ContainerHeader>{name}</ContainerHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="가입한 회원 수" number={61} />
      </div>
      <Button
        type="translucent"
        onClick={() => {
          navigate('./users');
        }}
      >
        회원 관리로 이동
      </Button>
    </Container>
  );
};

const PostBoard = ({ name, navigate }) => {
  return (
    <Container>
      <ContainerHeader>{name}</ContainerHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay
          label="게시한 소식지 수"
          detailed_label="전체 기간"
          number={102}
        />
        <NumberDisplay
          label="게시한 소식지 수"
          detailed_label="지난 28일"
          number={2}
        />
      </div>
      <Button
        type="translucent"
        onClick={() => {
          navigate('/posts');
        }}
      >
        소식지 페이지로 이동
      </Button>
    </Container>
  );
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* 유튜브 스튜디오의 배열을 따라갑니다. */}
      <Header>홈</Header>
      {/* 1차적으로 가로 방향 선 배치 후 2차적으로 세로 방향 후 배치 */}
      <BoardColumn>
        <HistoryBoard name="연혁" navigate={navigate} />
        <UserBoard name="회원" navigate={navigate} />
      </BoardColumn>
      <BoardColumn>
        <ExecutiveBoard name="임원진" navigate={navigate} />
        <PostBoard name="소식지" navigate={navigate} />
      </BoardColumn>
      <BoardColumn>
        <AdminBoard name="관리자" navigate={navigate} />
      </BoardColumn>
    </>
  );
}
