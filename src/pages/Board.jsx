import styled from 'styled-components';
import { Button } from '../components/forms/Button';
import { Text } from '../components/typograph/Text';
import { useEffect, useState } from 'react';
import axios from 'axios';
import urlJoin from 'url-join';
import { API } from '../utils/api';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  padding: 3rem 3rem;

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

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--primary-text-color);
`;

const Description = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--secondary-text-color);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
`;

const PostItems = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const PostCardImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px;
  object-fit: cover;
`;

const PostCard = ({ title, description, author, image }) => {
  return (
    <PostCardWrapper>
      <PostCardImage src={image} />
      <PostCardContainer>
        <Text size="l" weight="extrabold">
          {title}
        </Text>
        <Text size="s">{description}</Text>
        <Text size="s" weight="bold">
          {author}
        </Text>
      </PostCardContainer>
    </PostCardWrapper>
  );
};

export default function Board() {
  const [posts, setPosts] = useState([]);

  const [tag, setTag] = useState('전체');

  useEffect(() => {
    API.GET('/posts').then((r) => {
      setPosts(r.data);
    });
  }, []);

  return (
    <Container>
      <TitleBox>
        <Title>KERT 소식지</Title>
        <Description>열심히 소통하는 KERT, 자세히 알아볼 수 있어요</Description>
      </TitleBox>
      <ButtonGroup>
        <Button type="rounded">전체</Button>
        <Button type="rounded" color="--transparent-button-background">
          공지
        </Button>
        <Button type="rounded" color="--transparent-button-background">
          블로그
        </Button>
        <Button type="rounded" color="--transparent-button-background">
          기.보.교
        </Button>
      </ButtonGroup>
      <PostItems>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.content}
            author={post.admin_id}
            image={`https://picsum.photos/200?random=${index}`}
          />
        ))}
      </PostItems>
    </Container>
  );
}
