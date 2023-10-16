import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 text-xl font-bold')}>
      <div
        className={clsx(
          'bg-accent-600 text-white',
          'h-13 w-13 sm:h-11 sm:w-11',
          'flex items-center justify-center',
          [
            active
              ? 'border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500'
              : 'border-accent-600 dark:border-accent-500',
          ]
        )}
      >
        mDy
      </div>
      <div className={clsx('-mt-1 text-2xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          man
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          Datary
        </span>
      </div>
    </div>
  );
}

export default Logo;
