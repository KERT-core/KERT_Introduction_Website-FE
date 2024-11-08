import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import useTheme from '@/hooks/theme/useTheme';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css'; // 다크 모드 테마를 추가합니다
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'; // Toast UI 에디터 다크 모드 테마를 추가합니다

import 'prismjs/components/prism-jsx.min'; // JSX 언어 지원을 포함합니다 (선택 사항)

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // 코드 블럭에 줄 번호를 추가하기 위해 이 줄을 추가합니다
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import { Button } from '@components/forms/Button';

import { API } from '@/utils/api';
import useAlert from '@/hooks/modal/useAlert';
import { Alert } from '@/components/forms/modal/Alert';
import useLoading from '@/hooks/modal/useLoading';
import { Loading } from '../components/forms/modal/Loading';
import NotFound from './NotFound';
import { Text } from '@components/typograph/Text';

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

const ArticleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1rem;
  gap: 1rem;
  width: 100%;
`;

const ArticleTitleGroup = styled.div`
  padding: 0.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
`;

const ArticleHorizontalLine = styled.hr`
  width: 100%;
  margin: 1.5rem 0;
  border: 1px solid #282c30;
`;

const TitleInput = styled.input`
  font-size: 30px;
  font-weight: 800;
  background: none;
  border: 1px solid transparent;

  width: 100%;

  color: var(--primary-text-color);
  outline: none;

  transition: all 0.2s ease-in-out;
  padding: 0.3rem 0;

  &:focus {
    border-bottom: 1px solid var(--primary-text-color);
  }
`;

const DescriptionInput = styled.input`
  font-size: 15px;
  font-weight: normal;
  background: none;
  border: none;
  width: 100%;
  outline: none;

  color: var(--secondary-text-color);
`;

const CategorySelect = styled.select`
  font-size: 18px;
  font-weight: bold;
  color: var(--secondary-text-color);
  background: none;
  border: none;
  outline: none;

  transition: all 0.2s ease-in-out;
  padding: 0.3rem 0;

  &:focus {
    border-bottom: 1px solid var(--primary-text-color);
  }
`;

const BottomBarWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  gap: 1rem;
  justify-content: end;

  background-color: black;
  padding: 1rem 5rem;

  z-index: 100;
`;

export default function EditArticle() {
  const { id } = useParams();
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const ref = useRef(null);

  const { openAlert } = useAlert();

  const navigate = useNavigate();

  const { data: adminData, isLoading: isAdminLoading } = useQuery('admin', () =>
    API.GET('/admin'),
  );

  const { data, isLoading } = useQuery(['post', id], () =>
    API.GET(`/posts/${id}`),
  );

  const post = data?.data;

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setCategory(post.tag);
      ref.current.getInstance().setMarkdown(post.content);
    }
  }, [post, isLoading]);

  const handleSubmit = async () => {
    API.PUT('/posts', {
      body: {
        title,
        description,
        tag: category || null,
        content: ref.current.getInstance().getMarkdown(),
      },
    })
      .then((r) => {
        openAlert({
          title: '게시글 수정 완료',
          content: <Text>게시글이 성공적으로 수정되었습니다.</Text>,
          onConfirm: () => {
            navigate(`/articles/${r.data.id}`);
          },
        });
      })
      .catch((e) => {
        openAlert({
          title: '게시글 수정 실패',
          content: <Text>게시글을 수정하는 도중 문제가 발생했습니다.</Text>,
        });
      });
  };

  useEffect(() => {
    const editorEl = document.getElementsByClassName(
      'toastui-editor-defaultUI',
    )[0];

    if (editorEl) {
      const shouldAddDarkClass =
        theme.theme === 'dark' &&
        !editorEl.classList.contains('toastui-editor-dark');
      const shouldRemoveDarkClass =
        theme.theme !== 'dark' &&
        editorEl.classList.contains('toastui-editor-dark');

      if (shouldAddDarkClass) {
        editorEl.classList.add('toastui-editor-dark');
      } else if (shouldRemoveDarkClass) {
        editorEl.classList.remove('toastui-editor-dark');
      }
    }
  }, [theme]);

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    if (isLoading || isAdminLoading) {
      showLoading({ message: '불러오는 중' });
    } else {
      hideLoading();
    }
  }, [isLoading, isAdminLoading]);

  if (!adminData && !isLoading) {
    return <NotFound />;
  }

  return (
    <Container>
      {!isLoading && adminData && (
        <>
          <ArticleHeader>
            <CategorySelect
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">카테고리 선택</option>
              <option value="공지">공지</option>
              <option value="블로그">블로그</option>
              <option value="기보교">기보교</option>
            </CategorySelect>
            <ArticleTitleGroup>
              <TitleInput
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="제목을 입력하세요"
              />
              <DescriptionInput
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="카드에 표시될 설명을 입력하세요"
              />
            </ArticleTitleGroup>
          </ArticleHeader>
          <ArticleHorizontalLine />

          <Editor
            ref={ref}
            height="600px"
            initialEditType="wysiwyg"
            usageStatistics={false}
            language="ko-KR"
            hideModeSwitch={true}
            useCommandShortcut={false}
            plugins={[
              colorSyntax,
              [codeSyntaxHighlight, { highlighter: Prism }],
            ]}
          />

          <BottomBarWrapper>
            <BottomBarContainer>
              <Link to="/board">
                <Button type="translucent">취소</Button>
              </Link>
              <Button onClick={handleSubmit}>글 수정</Button>
            </BottomBarContainer>
          </BottomBarWrapper>
        </>
      )}

      <Alert />
      <Loading />
    </Container>
  );
}
