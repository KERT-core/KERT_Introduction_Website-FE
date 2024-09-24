import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Span } from '../../components/typograph/Text';

/**
 * 대시보드 헤더
 * 기존 Span을 상속하여 사용함
 */
export const Header = styled(Span).attrs({
  id: 'dashboard-header',
  $size: 'xl',
  $weight: 'extrabold',
})`
  margin-left: 6px;
  margin-bottom: 20px;
`;
