// 사용자 정의 컴포넌트
import { Text } from '../../components/typograph/Text';
import { Header } from './Dashboard.styled';
import { ManageHistory, Menu } from './History.styled';

// SVG 아이콘
import { AddIcon, RefreshIcon } from '../../assets/icons';

export default function History() {
  return (
    <>
      <Header>연혁 추가/제거</Header>
      <ManageHistory>
        <Text>+를 눌러 연혁 추가</Text>
        <Menu>
          <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={() => {}} fill="#ffffff" />
        </Menu>
      </ManageHistory>
    </>
  );
}
