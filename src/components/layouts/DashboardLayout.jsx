import { createRef } from 'react';
import { useOutlet } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 사용자가 생성한 컴포넌트 및 JS파일 import
import { DashboardNav } from '../navigation/DashboardNav';
import { Alert } from '../forms/modal/Alert';
import { Confirm } from '../forms/modal/Confirm';
import { Loading } from '../forms/modal/Loading';

// 전환 애니메이션
import '../../transitions/fade-slide.css';

const Layout = styled.div.attrs({
  id: 'dashboard',
})`
  position: fixed;
  margin-top: 80px;
  width: 100vw;
  height: calc(100vh - 80px);

  border-top: 1px solid var(--container-border);

  display: flex;

  z-index: 1000;

  & > #dashboard-nav {
    height: calc(100vh - 80px);
  }
`;

const Content = styled(TransitionGroup).attrs({
  id: 'dashboard-content',
})`
  transition: width 0.4s cubic-bezier(0.43, 0.53, 0.16, 0.96);

  position: relative;
  overflow: scroll;
  width: calc(100% - 250px);
  height: 100%;

  box-sizing: border-box;
  padding: 40px;

  @media screen and (max-width: 1080px) {
    width: calc(100% - 80px);
  }
`;

// API 요청을 위한 QueryClient 생성
const queryClient = new QueryClient();

/**
 * 대시보드 레이아
 */
export const DashboardLayout = ({ location }) => {
  // Warning: findDOMNode is deprecated and will be remove 해제
  // 안정적인 사용을 위해 createRef로 nodeRef를 설정해야합니다.
  const nodeRef = createRef(null);

  // <Outlet/>은 화면 전환 시 다음에 표시될 컴포넌트에도 종료 이펙트가 적용됩니다.
  // 따라서 useOutlet()을 통해 기존에 마운트된 컴포넌트를 기억하여 이전 컴포넌트에 종료 이펙트를 적용합니다.
  const currentOutlet = useOutlet();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Confirm />
        <Alert />
        <Loading />
        {/* 내비바 */}
        <DashboardNav />
        {/* 콘텐츠 */}
        <Content>
          {/* location.key로 랜덤한 index를 부여하여 화면 전환 시 컴포넌트 충돌이 없도록 예방합니다. */}
          <CSSTransition
            nodeRef={nodeRef}
            key={location.key}
            timeout={{ enter: 500, exit: 300 }}
            classNames="fade-slide"
            style={{
              width: 'calc(100% - 80px)',
              position: 'absolute',
            }}
          >
            <div ref={nodeRef}>
              {/* 전환 후 표시될 컴포넌트 */}
              {currentOutlet}
            </div>
          </CSSTransition>
        </Content>
      </Layout>
    </QueryClientProvider>
  );
};

DashboardLayout.propTypes = {
  location: PropTypes.object.isRequired,
};
