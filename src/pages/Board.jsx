import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { Button } from '@/components/forms/Button';
import { Text } from '@/components/typograph/Text';

import { API } from '@/utils/api';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/utils/useDebounce';

import PropTypes from 'prop-types';

import defaultProfilePic from '@/assets/icons/menu/User.png';

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

const MenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  border: 1px solid var(--secondary-text-color);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background: none;
  color: var(--primary-text-color);
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

const PostCardAuthor = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PostCardAuthorImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const PostCard = ({ id, title, description, user, image }) => {
  return (
    <Link to={`/articles/${id}`}>
      <PostCardWrapper>
        {image && <PostCardImage src={image} />}
        <PostCardContainer>
          <Text size="l" weight="extrabold">
            {title}
          </Text>
          <Text size="s">{description}</Text>
          <PostCardAuthor>
            <PostCardAuthorImage
              src={user?.profileImage ?? defaultProfilePic}
            />
            <Text size="s" weight="bold">
              {user?.name}
            </Text>
          </PostCardAuthor>
        </PostCardContainer>
      </PostCardWrapper>
    </Link>
  );
};

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
  image: PropTypes.string,
};

function extractBase64ImageData(inputString) {
  const regex = /!\[.*?\]\((data:image\/[^;]+;base64,[^)]+)\)/g;
  const matches = [];
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

export default function Board() {
  const [tag, setTag] = useState('전체');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data: adminData } = useQuery('admin', () => API.GET('/admin'));

  const { data, isLoading } = useQuery(
    ['posts-tag-search', tag, debouncedSearch],
    () => API.GET(`/posts?search=${debouncedSearch}`),
  );

  return (
    <Container>
      <TitleBox>
        <Title>KERT 소식지</Title>
        <Description>열심히 소통하는 KERT, 자세히 알아볼 수 있어요</Description>
      </TitleBox>
      <MenuGroup>
        <ButtonGroup>
          {['전체', '공지', '블로그', '기보교'].map((t) => (
            <Button
              key={t}
              type="rounded"
              color={
                t === tag
                  ? '--primary-color'
                  : '--transparent-button-background'
              }
              onClick={() => setTag(t)}
            >
              {t}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          {!!adminData && (
            <Link to="/board/new">
              <Button type="rounded" color="--transparent-button-background">
                새 소식지 작성
              </Button>
            </Link>
          )}
          <SearchInput
            placeholder="검색어를 입력하세요"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </ButtonGroup>
      </MenuGroup>
      <PostItems>
        {isLoading ? (
          <Text>불러오는 중</Text>
        ) : (
          data?.data?.content
            ?.filter((post) => tag === '전체' || tag == post.tag)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post, index) => (
              <PostCard
                key={index}
                id={post.id}
                title={post.title}
                description={post.description}
                user={post.user}
                image={extractBase64ImageData(post.content)[0]}
              />
            ))
        )}
      </PostItems>
    </Container>
  );
}
