import { useEffect } from "react";

import useDashboard from "../../../stores/dashboard";

export default function DashboardAdmin() {
    const { moveAdmin } = useDashboard();

    useEffect(() => {
        moveAdmin();
    }, []);

    const ScrollTestPTag = Array.from({ length: 200 }, (_, i) => i + 1);

    return (
        <>
            {ScrollTestPTag.map(number => (
                <p key={number}>ADMIN {number}</p>
            ))}
        </>
    )
}