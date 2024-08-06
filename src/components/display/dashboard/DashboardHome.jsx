export default function DashboardHome() {
    const ScrollTestPTag = Array.from({ length: 200 }, (_, i) => i + 1);

    return (
        <>
            {ScrollTestPTag.map(number => (
                <p key={number}>HOME {number}</p>
            ))}
        </>
    )
}