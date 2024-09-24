// 정의되지 않은 페이지를 접속했을 때 보이는 페이지입니다.
import { useEffect } from "react";

import useDashboard from "../stores/dashboard";

export default function NotFound() {
    const { notFound } = useDashboard();

    useEffect(() => {
        notFound();
    }, []);

    return (
        <>
            찾을 수 없는 페이지
        </>
    )
}