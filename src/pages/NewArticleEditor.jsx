import styled from 'styled-components';
import { useEffect } from 'react';
import useTheme from '@/hooks/theme/useTheme';

import { Text } from '@components/typograph/Text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import 'prismjs/themes/prism.css';
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

export default function NewArticle() {
  const theme = useTheme();

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

  return (
    <Container>
      <ArticleHeader>
        <Text size="18px" weight="bold" color="--secondary-text-color">
          카테고리
        </Text>
        <ArticleTitleGroup>
          <TitleInput placeholder="제목을 입력하세요" />
          <DescriptionInput placeholder="카드에 표시될 설명을 입력하세요" />
        </ArticleTitleGroup>
      </ArticleHeader>
      <ArticleHorizontalLine />

      <Editor
        height="600px"
        initialEditType="wysiwyg"
        usageStatistics={false}
        language="ko-KR"
        hideModeSwitch={true}
        useCommandShortcut={false}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />

      <BottomBarWrapper>
        <BottomBarContainer>
          <Button type="translucent">취소</Button>
          <Button>글 게시</Button>
        </BottomBarContainer>
      </BottomBarWrapper>
    </Container>
  );
}
