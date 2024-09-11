// 외부 라이브러리에서 import

// 사용자가 생성한 컴포넌트 및 JS파일 import
import { Header } from './Dashboard.styled';
import { ManageExecutive } from './Executive.styled';
import { Text } from '../../components/typograph/Text';
import { Menu } from './Executive.styled';

// svg 아이콘
import { AddIcon } from '../../assets/icons';
import { RefreshIcon } from '../../assets/icons';
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
        <Text size="m" weight="regular">
          메인 페이지에 표시되는 임원진
        </Text>
        <Menu>
          <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={() => {}} fill="#ffffff" />
        </Menu>
      </ManageExecutive>
      <Text size="m" weight="regular">
        준비중
      </Text>
      <ManageExecutive>
        <Text size="m" weight="regular">
          별도 페이지에 표시되는 역대 임원진
        </Text>
        <Menu>
          <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={() => {}} fill="#ffffff" />
        </Menu>
      </ManageExecutive>
      <Text size="m" weight="regular">
        준비중
      </Text>
    </>
  );
}
