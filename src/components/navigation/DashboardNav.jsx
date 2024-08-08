import HomeIcon from "/src/assets/icons/menu/Home.png";
import HistoryIcon from "/src/assets/icons/menu/History.png";
import ExecutiveIcon from "/src/assets/icons/menu/Executive.png";
import AdminIcon from "/src/assets/icons/menu/Admin.png";
import ManageUserIcon from "/src/assets/icons/menu/ManageUser.png";

import styled from "styled-components"

import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";

const DashboardNavBox = styled.div`
    position: fixed;
    width: 250px;

    padding: 40px 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    box-sizing: border-box;
`

const Title = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Menus = styled.div`
    width: 100%;
`

export const DashboardNav = () => {
    const navigate = useNavigate();

    // 여기에 토큰 유효 검사해서 관리자 아니면 메인으로 내보내기

    return (
        <DashboardNavBox>
            <Title>
                <img width="82px" src="/dashboard_nav_logo.png" alt="관리자 페이지용 글자 없는 로고" />
                <div>
                    <p style={{ fontWeight: "bold", fontSize: "15px", textAlign: "center", marginBottom: "6px" }}>KERT 대시보드</p>
                    <p style={{ fontWeight: "normal", fontSize: "12px", textAlign: "center", color: "#ffffff88" }}>Management System</p>
                </div>
            </Title>
            <Menus>
                <Menu onClick={() => {navigate("/dashboard")}}            icon={HomeIcon}       name="home"      >홈</Menu>
                <Menu onClick={() => {navigate("/dashboard/history")}}    icon={HistoryIcon}    name="history"   >연혁 추가/제거</Menu>
                <Menu onClick={() => {navigate("/dashboard/executive")}}  icon={ExecutiveIcon}  name="executive" >임원진 추가/제거</Menu>
                <Menu onClick={() => {navigate("/dashboard/admin")}}      icon={AdminIcon}      name="admin"     >관리자 추가/제거</Menu>
                <Menu onClick={() => {navigate("/dashboard/users")}}      icon={ManageUserIcon} name="users">회원 관리</Menu>
            </Menus>
        </DashboardNavBox>
    )
}