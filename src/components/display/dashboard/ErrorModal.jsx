import { Text } from '@components/typograph/Text';

export const ErrorModal = ({ error }) => {
  return (
    <>
      <Text>오류가 발생했습니다. 다시 시도해주세요.</Text>
      <br />
      <br />
      <Text color="--danger-color">{error.message}</Text>
    </>
  );
};
