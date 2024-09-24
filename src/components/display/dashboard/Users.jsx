import { useEffect } from "react";

import useDashboard from "../../../stores/dashboard";

export default function DashboardUsers() {
    const { moveUsers } = useDashboard();

    useEffect(() => {
        moveUsers();
    }, []);

    const ScrollTestPTag = Array.from({ length: 200 }, (_, i) => i + 1);

    return (
        <>
            {ScrollTestPTag.map(number => (
                <p key={number}>USERS {number}</p>
            ))}
        </>
    )
}