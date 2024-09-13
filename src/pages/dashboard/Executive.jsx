// 사용자 정의 컴포넌트
import { Text } from '../../components/typograph/Text';
import { Header } from './Dashboard.styled';
import { ManageExecutive } from './Executive.styled';
import { Menu } from './Executive.styled';

// svg 아이콘
import { useEffect } from 'react';
import useAlert from '../../stores/useAlert';

export default function Executive() {
  const { openAlert, closeAlert } = useAlert();

  useEffect(() => {
    openAlert({
      title: '개발중',
      content: <Text>임원진 관리는 준비중입니다.</Text>,
      onClose: () => closeAlert(),
    });
  }, []);

  return (
    <>
      <Header>임원진 추가/제거</Header>
      <ManageExecutive>
        <Text>준비중</Text>
        <Menu>
          {/* <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={() => {}} fill="#ffffff" /> */}
        </Menu>
      </ManageExecutive>
    </>
  );
}
