import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimised() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Comprehensible and Optimised Code."
        caption="Pretty & Optimised"
        description="Writing clean code is a top priority while keeping it as optimised as possible."
      />
    </header>
  );
}

export default PrettyOptimised;
