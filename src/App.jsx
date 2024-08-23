// 라우팅을 담당하는 App입니다.
// 페이지를 제작할 때 Navigation의 높이만큼 padding 또는 margin을 추가해야 페이지의 내용이 내비바 아래에 보여지게 됩니다.
// padding 같은 추가적인 작업이 없다면 내용이 내비바보다 더 높은 위치에서부터 표시되어 일부 내용이 보이지 않습니다.
// 내비바의 높이는 60px입니다.

import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { MainLayout } from "./components/layouts/MainLayout";
import "./styles/font.css";

import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import { DashboardLayout } from "./components/layouts/DashboardLayout";
import {DashboardAdmin, DashboardHome, DashboardHistory, DashboardExecutive ,DashboardUsers} from "./components/display/dashboard";
import DevDocument from "./pages/DevDocument";
import Board from "./pages/Board";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<MainPage />} />
                    <Route path="/developer" element={<DevDocument />} />
                    <Route path="/board" element={<Board />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index path="/dashboard" element={<DashboardHome />} />
                        <Route path="/dashboard/history" element={<DashboardHistory />} />
                        <Route path="/dashboard/executive" element={<DashboardExecutive />} />
                        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
                        <Route path="/dashboard/users" element={<DashboardUsers />} />
                        <Route path="/dashboard/*" element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}
