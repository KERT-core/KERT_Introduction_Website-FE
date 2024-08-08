import { useEffect } from "react";

import useDashboard from "../../../stores/dashboard";
import * as DS from "./Dashboard.styled";

const HistoryInfo = ({ historyCount=0, yearCount=0 }) => {
    return (
        <DS.Container $width="340px">
            <DS.Title>연혁</DS.Title>
            <DS.ColumnFlex $gap="20px">
                <DS.RowFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.Title $size="13px">전체 연혁 개수</DS.Title>
                        <DS.Title $size="26px">{historyCount}</DS.Title>
                    </DS.ColumnFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.Title $size="13px">연도 개수</DS.Title>
                        <DS.Title $size="26px">{yearCount}</DS.Title>
                    </DS.ColumnFlex>
                </DS.RowFlex>
                <DS.Button>연혁 추가/제거로 이동</DS.Button>
            </DS.ColumnFlex>
        </DS.Container>
    )
}

const UsersInfo = ({ userCount=0 }) => {
    return (
        <DS.Container $width="340px">
            <DS.Title>회원</DS.Title>
            <DS.ColumnFlex $gap="20px">
                <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                    <DS.Title $size="13px">전체 회원 수</DS.Title>
                    <DS.Title $size="26px">{userCount}</DS.Title>
                </DS.ColumnFlex>
                <DS.Button>회원 관리로 이동</DS.Button>
            </DS.ColumnFlex>
        </DS.Container>
    )
}

const ExecutiveInfo = ({ allExecutiveCount=0, currentExecutiveCount=0 }) => {
    return (
        <DS.Container $width="340px">
            <DS.Title>임원진</DS.Title>
            <DS.ColumnFlex $gap="20px">
                <DS.RowFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.Title $size="13px">역대 임원진 수</DS.Title>
                        <DS.Title $size="26px">{allExecutiveCount}</DS.Title>
                    </DS.ColumnFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.Title $size="13px">현재 임원진 수</DS.Title>
                        <DS.Title $size="26px">{currentExecutiveCount}</DS.Title>
                    </DS.ColumnFlex>
                </DS.RowFlex>
                <DS.Button>임원진 추가/제거로 이동</DS.Button>
            </DS.ColumnFlex>
        </DS.Container>
    )
}

const AdminInfo = ({ AdminCount=0 }) => {
    return (
        <DS.Container $width="340px">
            <DS.Title>관리자</DS.Title>
            <DS.ColumnFlex $gap="20px">
                <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                    <DS.Title $size="13px">등록된 관리자 수</DS.Title>
                    <DS.Title $size="26px">{AdminCount}</DS.Title>
                </DS.ColumnFlex>
                <DS.Button>관리자 추가/제거로 이동</DS.Button>
            </DS.ColumnFlex>
        </DS.Container>
    )
}

const PostInfo = ({ allPostCount=0, monthPostCount=0 }) => {
    return (
        <DS.Container $width="340px">
            <DS.Title>소식지</DS.Title>
            <DS.ColumnFlex $gap="20px">
                <DS.RowFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.ColumnFlex $gap="4px">
                            <DS.Title $size="12px" $color="#ffffff77">전체 기간</DS.Title>
                            <DS.Title $size="13px">게시한 소식지 수</DS.Title>
                        </DS.ColumnFlex>
                        <DS.Title $size="26px">{allPostCount}</DS.Title>
                    </DS.ColumnFlex>
                    <DS.ColumnFlex $gap="10px" style={{ width: "100%" }}>
                        <DS.ColumnFlex $gap="4px">
                            <DS.Title $size="12px" $color="#ffffff77">지난 28일</DS.Title>
                            <DS.Title $size="13px">게시한 소식지 수</DS.Title>
                        </DS.ColumnFlex>
                        <DS.Title $size="26px">{monthPostCount}</DS.Title>
                    </DS.ColumnFlex>
                </DS.RowFlex>
            </DS.ColumnFlex>
        </DS.Container>
    )
}

export default function DashboardHome() {
    const { moveHome } = useDashboard();

    useEffect(() => {
        moveHome();
    }, []);

    return (
        <DS.ColumnFlex>
            <DS.SectionTitle>홈</DS.SectionTitle>
            <DS.RowFlex $gap="30px">
                <DS.ColumnFlex $gap="30px">
                    <HistoryInfo historyCount={16} yearCount={10} />
                    <UsersInfo userCount={61} />
                </DS.ColumnFlex>
                <DS.ColumnFlex $gap="30px">
                    <ExecutiveInfo allExecutiveCount={36} currentExecutiveCount={5} />
                    <PostInfo allPostCount={100} monthPostCount={10} />
                </DS.ColumnFlex>
                <DS.ColumnFlex $gap="30px">
                    <AdminInfo AdminCount={5} />
                </DS.ColumnFlex>
            </DS.RowFlex>
        </DS.ColumnFlex>
    )
}