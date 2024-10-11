import { useEffect } from 'react';

import useDashboard from '../../../stores/dashboard';

export default function DashboardExecutive() {
  const { moveExecutive } = useDashboard();

  useEffect(() => {
    moveExecutive();
  }, []);

  const ScrollTestPTag = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <>
      {ScrollTestPTag.map((number) => (
        <p key={number}>EXECUTIVES {number}</p>
      ))}
    </>
  );
}
