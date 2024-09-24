import styled from 'styled-components';
import { useEffect } from 'react';
import useTheme from '../hooks/useTheme';

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
      <Editor
        height="600px"
        initialEditType="wysiwyg"
        usageStatistics={false}
        language="ko-KR"
        hideModeSwitch={true}
        useCommandShortcut={false}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Container>
  );
}
