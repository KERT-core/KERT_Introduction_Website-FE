import { useEffect } from 'react';

import useDashboard from '../../../stores/dashboard';

export default function DashboardHistory() {
  const { moveHistory } = useDashboard();

  useEffect(() => {
    moveHistory();
  }, []);

  const ScrollTestPTag = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <>
      {ScrollTestPTag.map((number) => (
        <p key={number}>HISTORY {number}</p>
      ))}
    </>
  );
}
