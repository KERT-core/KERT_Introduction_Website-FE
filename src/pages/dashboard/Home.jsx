// Home.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHome from '../../stores/dashboard/useHome';

// 사용자가 생성한 컴포넌트 및 JS파일 import
import HomeLoading from './Home.Loading';
import {
  Header,
  Container,
  ContainerHeader,
  Button,
  BoardColumn,
} from './Dashboard.styled';
import { NumberDisplay } from '../../components/display/NumberDisplay';

const HistoryBoard = ({ name, data, navigate }) => {
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
        <NumberDisplay label="전체 연혁 개수" number={data.wholeCount} />
        <NumberDisplay label="연도 개수" number={data.yearCount} />
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

const ExecutiveBoard = ({ name, data, navigate }) => {
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
        <NumberDisplay label="전체 임원진 수" number={data.wholeCount} />
        <NumberDisplay label="현재 임원진 수" number={data.displayCount} />
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

const AdminBoard = ({ name, data, navigate }) => {
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
        <NumberDisplay label="등록된 관리자 수" number={data.wholeCount} />
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

const UserBoard = ({ name, data, navigate }) => {
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
        <NumberDisplay label="가입한 회원 수" number={data.wholeCount} />
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

const PostBoard = ({ name, data, navigate }) => {
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
          number={data.wholeCount}
        />
        <NumberDisplay
          label="게시한 소식지 수"
          detailed_label="지난 28일"
          number={data.perMonthCount}
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
  // 메뉴 변경마다 재렌더링을 막기 위해 useDashboardStore를 불러옵니다.
  const { home, saveHome } = useHome();

  // 다른 컴포넌트에서 URL 이동을 할 수 있도록 navigate를 넙깁니다.
  const navigate = useNavigate();

  // API 요청을 날리기 전 isLoading을 True로 설정합니다.
  const [isLoading, setLoading] = useState(true);

  // 컴포넌트가 마운트되면
  useEffect(() => {
    // 만약 이전에 받은 API 데이터가 없다면 API 요청 후 데이터를 store에 저장
    if (home == null) {
      console.log('API 데이터가 없으므로 API 응답을 요청합니다.');

      // API 요청하는 척 3초 Timeout을 겁니다.
      setTimeout(() => {
        setLoading(false); // 로딩 해제
        saveHome({
          history: { wholeCount: 16, yearCount: 10 },
          executive: { wholeCount: 36, displayCount: 5 },
          admin: { wholeCount: 5 },
          user: { wholeCount: 61 },
          post: { wholeCount: 102, perMonthCount: 2 },
        }); // API 응답 데이터 저장
      }, 3000);
    }
    // 이미 데이터가 있다면 요청 X
    else {
      console.log('이미 API 데이터가 있으므로 API 응답을 요청하지 않습니다.');
      setLoading(false);
    }
  }, []);

  return isLoading ? (
    <HomeLoading />
  ) : (
    <>
      {/* 유튜브 스튜디오의 배열을 따라갑니다. */}
      <Header>홈</Header>
      {/* 1차적으로 가로 방향 선 배치 후 2차적으로 세로 방향 후 배치 */}
      <BoardColumn>
        <HistoryBoard name="연혁" data={home.history} navigate={navigate} />
        <UserBoard name="회원" data={home.user} navigate={navigate} />
      </BoardColumn>
      <BoardColumn>
        <ExecutiveBoard
          name="임원진"
          data={home.executive}
          navigate={navigate}
        />
        <PostBoard name="소식지" data={home.post} navigate={navigate} />
      </BoardColumn>
      <BoardColumn>
        <AdminBoard name="관리자" data={home.admin} navigate={navigate} />
      </BoardColumn>
    </>
  );
}
