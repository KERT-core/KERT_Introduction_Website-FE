import styled from 'styled-components';
import { Text } from '@components/typograph/Text';

const ArticleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  padding: 3rem 4rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const ArticleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const ArticleTitleGroup = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ArticleHorizontalLine = styled.hr`
  width: 100%;
  margin: 1.5rem 0;
  border: 1px solid #282c30;
`;

export default function Article() {
  return (
    <ArticleContainer>
      <ArticleHeader>
        <Text size="18px" weight="bold" color="--secondary-text-color">
          카테고리
        </Text>
        <ArticleTitleGroup>
          <Text size="40px" weight="extrabold">
            제목을 입력하세요
          </Text>
          <Text size="m" color="--secondary-text-color">
            카드에 표시될 설명을 입력하세요
          </Text>
        </ArticleTitleGroup>
        <Text size="s" color="--secondary-text-color">
          KERT 관리자 | 2024.07.27
        </Text>
      </ArticleHeader>
      <ArticleHorizontalLine />
    </ArticleContainer>
  );
}
