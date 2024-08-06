import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";
import { DashboardNav } from "../navigation/DashboardNav";

const NavSection = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    
    width: 250px;
    height: calc(100vh - 80px);
    
    border-right: 1px solid #ffffff10;
`
    
const Content = styled.section`
    overflow: scroll;

    position: fixed;
    top: 80px;
    left: 250px;

    width: calc(100% - 250px);
    height: calc(100% - 80px);

    padding: 40px;

    box-sizing: border-box;
`

export const DashboardLayout = () => {
    return (
        <>
            <NavSection>
                <DashboardNav />
            </NavSection>
            <Content>
                <Outlet />
            </Content>
        </>
    );
};