import { createRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useOutlet } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { API } from '@/utils/api';
import useLoading from '@/hooks/modal/useLoading';
import useAlert from '@/hooks/modal/useAlert';

import { DashboardNav } from '@components/navigation/DashboardNav';
import { Text } from '@components/typograph/Text';
import { Alert } from '@components/forms/modal/Alert';
import { Confirm } from '@components/forms/modal/Confirm';
import { Loading } from '@components/forms/modal/Loading';

import '@/transitions/fade-slide.css';

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

/**
 * 대시보드 레이아
 */
export const DashboardLayout = ({ location }) => {
  const navigate = useNavigate();

  // Warning: findDOMNode is deprecated and will be remove 해제
  // 안정적인 사용을 위해 createRef로 nodeRef를 설정해야합니다.
  const nodeRef = createRef(null);

  // <Outlet/>은 화면 전환 시 다음에 표시될 컴포넌트에도 종료 이펙트가 적용됩니다.
  // 따라서 useOutlet()을 통해 기존에 마운트된 컴포넌트를 기억하여 이전 컴포넌트에 종료 이펙트를 적용합니다.
  const currentOutlet = useOutlet();

  // 레이아웃단에서 관리자 권한을 체크합니다.
  const { showLoading, hideLoading } = useLoading();
  const { openAlert } = useAlert();

  // api/admin으로 권한 체크
  const { isLoading, isError } = useQuery('dashboard-protection', async () => {
    const { status } = await API.GET('/admin');
    return status;
  });

  useEffect(() => {
    if (isLoading) {
      showLoading({ message: '대시보드를 준비하는 중...' });
    } else {
      hideLoading();
    }

    if (isError) {
      openAlert({
        title: '대시보드 권한이 없습니다.',
        content: <Text>루트 페이지로 이동합니다.</Text>,
        onClose: () => {
          navigate('/');
        },
      });
    }
  }, [isLoading, isError]);

  return (
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
          timeout={{ enter: 500, exit: 400 }}
          classNames="fade-slide"
        >
          <div
            ref={nodeRef}
            style={{ width: 'calc(100% - 80px)', position: 'absolute' }}
          >
            {/* 전환 후 표시될 컴포넌트 */}
            {currentOutlet}
          </div>
        </CSSTransition>
      </Content>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  location: PropTypes.object.isRequired,
};
