import { useEffect } from 'react';

// 사용자 정의 컴포넌트
import { Text } from '../../components/typograph/Text';
import { Header } from './Dashboard.styled';

import { Empty } from '../../components/display/dashboard/Empty';

import useAlert from '../../stores/useAlert';

export default function Executive() {
  const { openAlert, closeAlert } = useAlert();

  useEffect(() => {
    openAlert({
      title: '개발중',
      content: <Text>임원진 관리는 준비중이에요... 뚝딱뚝딱...</Text>,
      onClose: () => closeAlert(),
    });
  }, []);

  return (
    <>
      <Header>임원진 추가/제거</Header>
      <Empty message="뚝딱뚝딱 안전?하게 만들고 있어요..." />
    </>
  );
}
