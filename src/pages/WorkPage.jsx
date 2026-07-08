import { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import SubPageShell from '../components/SubPageShell';
import LedgerColumn from '../components/LedgerColumn';
import ProfileColumn from '../components/ProfileColumn';
import { personaVariants } from '../constants/animations';

export default function WorkPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <SubPageShell
      title="Work & Experience"
      description="Professional experience, education, and technical capabilities of Viswanath Vasa."
      canonical="/work"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={personaVariants.container}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <motion.div variants={personaVariants.item}>
          <LedgerColumn />
        </motion.div>
        <motion.div variants={personaVariants.item} className="border-t lg:border-t-0 lg:border-l border-black lg:pl-10 pt-8 lg:pt-0">
          <ProfileColumn />
        </motion.div>
      </motion.div>
    </SubPageShell>
  );
}
