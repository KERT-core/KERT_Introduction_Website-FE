// 라우팅을 담당하는 App입니다.
// 페이지를 제작할 때 Navigation의 높이만큼 padding 또는 margin을 추가해야 페이지의 내용이 내비바 아래에 보여지게 됩니다.
// padding 같은 추가적인 작업이 없다면 내용이 내비바보다 더 높은 위치에서부터 표시되어 일부 내용이 보이지 않습니다.
// 내비바의 높이는 60px입니다.

import { Routes, Route, useLocation } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import { GlobalStyle } from './styles/global';
import { MainLayout } from './components/layouts/MainLayout';
import './styles/font.css';

import { AuthProvider } from './Components/navigation/AuthContext';
import Navigator from './Components/navigation/Navigation';

import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';

import { DashboardLayout } from './components/layouts/DashboardLayout';
import { Dashboard } from './pages/dashboard';
import DevDocument from './pages/DevDocument';
import Board from './pages/Board';
import Article from './pages/Article';
import NewArticleEditor from './pages/NewArticleEditor';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';

export default function App() {
  // location.key을 통해 화면 전환 시 컴포넌트 충돌/중복 방지 용으로 사용됩니다.
  const location = useLocation();

  return (
    <>
      <CookiesProvider>
        <AuthProvider>
          <GlobalStyle />
          <Navigator />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<MainPage />} />
              <Route path="/developer" element={<DevDocument />} />
              <Route path="/board">
                <Route index path="/board" element={<Board />} />
                <Route path="/board/new" element={<NewArticleEditor />} />
              </Route>
              <Route path="/articles/:id" element={<Article />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="*" element={<NotFound />} />

              {/* 대시보드 페이지 */}
              <Route element={<DashboardLayout location={location} />}>
                <Route index path="/dashboard" element={<Dashboard.Home />} />
                <Route
                  path="/dashboard/history"
                  element={<Dashboard.History />}
                />
                <Route
                  path="/dashboard/executive"
                  element={<Dashboard.Executive />}
                />
                <Route path="/dashboard/admin" element={<Dashboard.Admin />} />
                <Route path="/dashboard/users" element={<Dashboard.Users />} />
                <Route path="/dashboard/*" element={<NotFound />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </CookiesProvider>
    </>
  );
}
