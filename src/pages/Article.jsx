import { useEffect } from 'react';
import useTheme from '@/hooks/theme/useTheme';
import styled from 'styled-components';
import { Text } from '@components/typograph/Text';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '@/utils/api';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
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

const ArticleViewerWrapper = styled.div`
  color: white;
`;

export default function Article() {
  const { id } = useParams();
  const theme = useTheme();

  const { data, isLoading } = useQuery(['post', id], () =>
    API.GET(`/posts/${id}`),
  );

  useEffect(() => {
    const editorEl = document.getElementsByClassName(
      'toastui-editor-contents',
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

  const post = data?.data;

  return (
    <ArticleContainer>
      {isLoading ? (
        <Text>불러오는 중</Text>
      ) : (
        <>
          <ArticleHeader>
            <Text size="18px" weight="bold" color="--secondary-text-color">
              {post?.tag}
            </Text>
            <ArticleTitleGroup>
              <Text size="40px" weight="extrabold">
                {post?.title}
              </Text>
              <Text size="m" color="--secondary-text-color">
                {post?.description}
              </Text>
            </ArticleTitleGroup>
            <Text size="s" color="--secondary-text-color">
              {post?.user?.name} | {post?.createdAt}
            </Text>
          </ArticleHeader>
          <ArticleHorizontalLine />
          <ArticleViewerWrapper>
            <Viewer
              initialValue={post?.content}
              language="ko-KR"
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              theme={theme.theme === 'dark' ? 'dark' : 'default'}
            />
          </ArticleViewerWrapper>
        </>
      )}
    </ArticleContainer>
  );
}
