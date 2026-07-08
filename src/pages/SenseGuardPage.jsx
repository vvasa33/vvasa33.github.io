import { useLayoutEffect } from 'react';
import SubPageShell from '../components/SubPageShell';
import SenseGuardPromo from '../components/SenseGuardPromo';

export default function SenseGuardPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <SubPageShell
      title="SenseGuard"
      description="SenseGuard, Inc. - full-stack IoT security monitoring platform by Viswanath Vasa."
      canonical="/senseguard"
    >
      <SenseGuardPromo variant="edition" />
    </SubPageShell>
  );
}
