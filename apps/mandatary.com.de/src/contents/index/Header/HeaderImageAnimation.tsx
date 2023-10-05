import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i) => {
    const delay = 0.6 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 457 526"
      fill="none"
      initial="hide"
      animate="hide"
      strokeWidth={0}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[526px] w-[457px] opacity-60',
        'dark:opacity-40'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      <m.path
        variants={animation}
        custom={4}
        d="m167.8 23c2.3 0 8.8 1.5 14.4 3.4 5.7 1.8 14.3 5.5 19.3 8.1 4.9 2.6 11.7 6.6 15 8.8 3.3 2.3 11 9.1 17.2 15.2 10.3 10.1 11.3 11.5 12.8 17 1 3.3 3.2 8.5 5 11.5 1.7 3 4.8 8.4 6.7 12 2 3.6 7.5 14.2 12.3 23.5 4.8 9.3 10 18.5 11.6 20.3 1.6 1.7 2.9 3.8 2.9 4.4 0.1 0.7 5.3 8.2 11.8 16.6 6.4 8.4 11.8 15.3 11.9 15.2 0.2 0 3.3-0.8 7-1.7 4.4-1 11-1.6 18.8-1.7 8.2 0 14.1 0.6 18.5 1.7 3.6 1 9.9 3.4 14 5.3 4.1 2 10.2 5.5 13.5 7.9 3.3 2.3 8.6 7 11.7 10.4 3.6 3.7 7.1 8.9 9.2 13.3 1.9 4 4.2 10 5.1 13.3 0.8 3.3 1.8 11.6 2.2 18.5 0.4 8.2 0.2 15.2-0.6 20.5-0.7 4.4-2.4 11.6-3.8 16-1.4 4.4-4.4 11.6-6.7 16-2.3 4.4-6.2 10.7-8.8 14-2.5 3.3-6.5 8-8.9 10.5-2.4 2.5-6 5.9-7.9 7.5-2 1.7-3.9 3.9-4.2 5-0.3 1.1 0.5 6.1 1.8 11 1.4 4.9 2.8 13.1 3.1 18 0.5 8.8 0.4 9.4-4 22.5-2.5 7.4-7.2 20.9-10.5 30-3.3 9.1-8.1 21.9-10.7 28.5-2.6 6.6-6.4 15.4-8.5 19.5-2.1 4.1-5.4 10-7.4 13-2 3-7.4 13.1-12 22.5-4.6 9.4-11.3 23.7-14.9 32-3.5 8.2-8.3 20.6-10.5 27.5-2.3 6.9-5.7 18.1-7.6 25-2 7.4-5.1 15.6-7.5 20-2.2 4.1-4.1 7-4.1 6.5 0-0.5 2.1-9.1 4.6-19 2.5-9.9 6.6-24.4 9-32.3 2.4-7.8 7.8-22.2 12-32 4.1-9.7 11.2-24.9 15.8-33.7 4.5-8.8 9.7-18.3 11.6-21 1.9-2.8 5.3-9.1 7.6-14 2.3-4.9 7.1-16.6 10.7-26 3.5-9.4 9.4-25.6 13-36 3.6-10.4 7.1-21 7.7-23.5 0.9-3.4 0.9-6.4 0-12.5-0.6-4.4-1.9-10.6-2.8-13.9-1-3.3-2.5-6.2-3.5-6.7-1.2-0.7-3.5 0.1-8 2.5-3.4 1.9-9.1 4.4-12.7 5.6-3.6 1.2-8.8 2.6-11.5 3.1-2.8 0.5-10.2 1-16.5 1-8.4 0-13.6-0.6-19.5-2.1-4.4-1.2-11.6-4-16-6.3-5.7-3-10.3-6.5-16.1-12.2-4.5-4.4-9.7-10.9-11.8-14.5-2.1-3.6-5-10.1-6.6-14.5-1.7-4.9-3.2-11.9-3.8-18-0.7-6.6-0.7-13.1-0.1-19 0.5-4.9 1.6-11.5 2.4-14.5 0.8-3 2.4-8 3.6-11 1.1-3 3.2-7.8 4.6-10.5 1.4-2.8 4.4-7.7 6.7-11 2.2-3.3 5.3-7.5 6.8-9.3 1.6-1.8 2.5-3.7 2.1-4.5-0.4-0.6-6.4-9.5-13.4-19.7-7-10.2-13.5-19.2-14.6-20.1-1-0.9-7.7-5.6-14.8-10.4-7.2-4.9-17.3-11.8-22.5-15.4-5.2-3.5-12.9-8.8-17-11.6-4.1-2.9-20.1-13.7-35.5-24-15.4-10.3-30.7-20.1-34-21.6-3.3-1.6-7-2.9-8.3-2.9-1.3 0-2.5 0.8-3 2-0.5 1.5-1.2 1.9-2.7 1.4-1.1-0.4-2.2-0.8-2.5-1-0.3-0.2 0.3-2.8 1.3-5.7 1-2.8 2.9-6.9 4.3-8.9 1.3-2.1 4.1-4.9 6.1-6.3 3.2-2.2 4.9-2.6 17.3-2.5l10.5-7.3c9-6.2 10.5-7.6 10.5-9.9 0-1.6 0.9-4.5 1.9-6.5 1.1-2.1 3.2-5 4.8-6.6 1.5-1.5 4.6-3.4 6.8-4.2 2.2-0.8 5.9-1.4 8.2-1.5zm-12.1 8.8c-1 0.9-2.5 3.3-3.3 5.2-0.8 1.9-1.3 3.6-1.1 3.6 0.2 0.1 4.6-2.7 9.8-6.2 9-6.1 9.3-6.4 6-6.3-1.9 0-4.9 0.5-6.5 1-1.7 0.5-3.8 1.7-4.9 2.7zm-49.1 36.5c-1.1 1.5-1.7 2.9-1.3 3.2 0.5 0.3 3.5-1.4 6.8-3.8 3.4-2.3 6.1-4.3 6-4.5 0-0.1-0.6-0.2-1.3-0.2-0.6 0.1-2.8 0.6-4.7 1.3-1.9 0.7-4.3 2.5-5.5 4zm167.7 99.5c-1 0.5 0.1 2.9 4.2 8.9 3.6 5.3 6.3 8.3 7.4 8.3 1 0 2.3-0.6 3-1.3 0.7-0.6 1.2-1.9 1.2-2.7 0-0.8-2.2-5-4.9-9.3-2.6-4.2-5-7.7-5.2-7.7-0.2 0-1.3 0.8-2.4 1.6-1.1 0.8-2.6 1.8-3.3 2.2z"
      />
      <m.path
        variants={animation}
        custom={1}
        d="m303.3 3c0.4 0 2.2 0.7 3.9 1.6 1.8 0.9 6.3 2.5 10 3.5 3.8 1.1 9.8 3.3 13.5 4.9 3.8 1.7 9.5 3.7 12.8 4.5 3.3 0.7 6.2 1.2 6.5 1 0.3-0.3-1.3-1.5-3.5-2.7-2.8-1.6-3.5-2.4-2.3-2.5 1-0.2 5.4 1.5 9.8 3.7 4.4 2.2 9.6 5.5 11.6 7.3 1.9 1.7 3.7 3.9 3.9 4.7 0.2 0.8 2.6 2.1 5.2 2.8 2.6 0.8 6.5 2.2 8.5 3.3 2.1 1 3.8 2 3.8 2.1 0 0.2-2.6 0.2-11.5-0.3l7 3.4c4 2 8.9 5.4 11.5 8.1 2.5 2.5 4 4.6 3.5 4.7-0.6 0-1.7-0.8-2.5-1.7-0.8-0.9-3.4-3-5.8-4.5-2.3-1.6-4.8-2.9-5.5-2.9-0.6 0-0.1 0.7 1.3 1.6 1.4 0.9 5.2 4.4 8.5 7.6 5.1 5.1 6.6 6 10.5 6.5 2.5 0.2 5.2 0.9 6 1.4 1.1 0.8 0.8 0.9-1.3 0.5-1.6-0.4-2.5-0.2-2.2 0.4 0.3 0.5-0.4 1-1.5 1-1.7 0-1.2 0.9 2.7 5.3 2.7 3 6.6 8.7 8.7 12.8 2.2 4.1 5.2 8.6 6.8 10.2 1.5 1.5 2.8 3.2 2.8 3.7 0 0.5-0.6 1-1.3 1-0.6 0-1.8-1.1-2.5-2.5-0.6-1.4-1.7-2.5-2.2-2.5-0.6 0 0.1 2.3 1.5 5 1.4 2.8 2.9 5 3.5 5 0.6 0 0.7 0.8 0.4 1.8-0.3 1 0.7 3.2 2.6 5.7 1.8 2.2 4.1 5.7 5.1 7.8 1 2 1.8 4 1.7 4.5-0.1 0.4 0.6 2 1.7 3.7 1.9 2.7 2 4.8 2.1 30 0 14.8 0.3 29.5 0.7 32.5 0.5 3.1 0.4 6.8-1.1 11.5l-0.2-3q-0.2-3-1.5 3.5c-0.7 3.6-2.9 10.3-5 15-2.1 4.7-4.1 10.4-4.4 12.7-0.3 2.3-0.9 4-1.4 3.7-0.4-0.2-0.8 1.3-0.8 3.4-0.1 3.7-0.1 3.7-0.9 0.7-0.6-2.4-0.8-2.6-0.9-0.7 0 1.2-0.4 3-0.8 4-0.6 1.5-0.7 1.5-1.3-0.3-0.5-1.6-1.7-0.1-6.3 7.5-4 6.7-5.7 10.5-5.7 13 0 1.9-0.7 7.3-1.6 12-0.9 4.7-2.9 12.1-4.5 16.5-1.6 4.4-4.6 10.9-6.6 14.5-2 3.6-4.2 7.2-5 8-1.2 1.3-0.8 2.3 2.3 7 2 3 5.5 7.8 7.7 10.7 3.2 3.8 5.2 5.4 8.2 6.2 2.2 0.5 6 1.9 8.5 2.9 2.5 1.1 5.6 2.9 7 4.1 1.4 1.2 5.6 3.1 9.5 4.3 3.9 1.1 10.5 4.1 22.5 11.3v170.5h-170l0.3-12.7c0.2-11.7 0.5-13.2 2.8-17.3 1.5-2.5 2.9-5.7 3.3-7.2 0.3-1.6 1.3-10.8 2.1-20.5 1.4-16.7 1.4-17.9-0.3-19.7-0.9-1-7.6-6.6-14.7-12.4-8.1-6.5-15.6-11.7-20-13.7-3.9-1.7-8.5-4.4-10.3-5.8-1.7-1.5-3.5-2.7-4-2.7-0.4 0-7.9 4.2-16.7 9.2-8.8 5.1-18 10-20.5 10.9-2.5 0.9-8.1 2.3-12.5 2.9-5.8 0.9-9.1 1-12 0.2-2.2-0.6-6.2-2.6-9-4.4-2.7-1.8-6.3-5.1-8-7.3-2-2.6-4.1-7.6-6-14.4-3-10.3-3-10.4-8-13.6-3.8-2.5-5.5-4.5-7.3-8.4-1.2-2.8-2.2-6.3-2.2-7.8 0-2.3-0.5-2.9-3-3.5-2.2-0.6-4-2.4-7-7-3.7-6-3.9-6.6-3.2-11.9 0.5-3.9 0.3-6.1-0.6-7.3-1.1-1.5-1.5-1.5-5-0.1-2 0.9-5.4 1.5-7.5 1.5-2 0-5.1-0.7-6.7-1.5-1.7-0.8-3.8-2.7-4.9-4.2-1-1.6-2.1-4-2.5-5.5-0.3-1.6-0.1-6.3 0.5-10.5 0.6-4.3 1.2-16.4 1.4-26.8 0.3-15.1 0-19.5-1.1-21.2-0.8-1.3-1.9-2.1-2.4-1.8-0.6 0.3-1-0.2-1-1 0-0.8-0.5-1.5-1-1.5-0.6 0-1.1 1.5-1.2 6.5l-0.7-3.5c-0.4-1.9-2.1-4.9-3.7-6.6-1.9-2-4.9-3.7-8.7-4.8-3.1-0.9-7.1-1.6-8.7-1.6-1.7 0-4.3-1.1-9-5l-4.8 3.8c-2.6 2.2-6.2 4.6-8 5.5-1.7 1-3.4 1.6-3.7 1.5-0.3-0.2 1.2-1.5 3.2-2.9 2.1-1.5 4.6-4.1 5.5-5.8 1-1.7 1.5-3.1 1-3.1-0.4 0-2.6 1.3-5 3-2.3 1.6-4.4 3-4.7 3-0.3 0-0.3-0.4 0-1 0.3-0.6-0.8-0.8-2.8-0.5-1.9 0.4-0.6-0.5 3.3-2 3.6-1.3 7.2-3.2 8-4 1.3-1.3 1.2-1.5-0.8-1.5-1.2 0-2.1-0.5-2-1.1 0.2-0.6-0.3-1.3-1-1.5-0.6-0.2-1.5 0.4-1.8 1.4-0.3 0.9-0.8 2.4-1 3.2-0.4 1.1-0.7 1.2-1.2 0.2-0.5-0.9-1.5-0.9-4.2 0.4-1.9 1-4.8 2.7-6.4 3.8-2.1 1.5-3.1 1.7-3.3 0.9-0.2-0.7-1.5-1.3-3.1-1.4-2.1 0-1.5-0.5 2.8-2 3-1.1 7.1-3 9-4.1 3.2-2 3.3-2.2 1.5-2.9-1.1-0.3-2.3-0.5-2.8-0.3-0.4 0.2-0.9 0-1.2-0.6-0.3-0.6-1.2-0.8-2-0.5-0.8 0.3-1.5 0.1-1.5-0.5q0-1-2.5 0c-1.4 0.6-2.5 0.7-2.5 0.3 0-0.5-0.7 0.1-1.5 1.2-1.4 1.8-1.5 1.8-1.5 0.3 0-1-0.3-1.8-0.8-1.8-0.4 0-1.5 0.6-2.4 1.3-1 0.7-2.4 3.5-4.6 11.2l-0.1-3.7c-0.1-2.1-0.6-3.8-1.1-3.8-0.6 0-2.2-1.1-6.5-5.1l3.5 0.1c1.9 0 5-0.4 6.7-1 1.8-0.5 3.2-1.6 3-2.2-0.2-0.8-3-1.5-7.3-1.9-4.1-0.3-5.3-0.6-2.9-0.7 2.2-0.1 3.7-0.4 3.2-0.7-0.4-0.3-1-0.5-1.5-0.5-0.4-0.1-1.7-0.8-3-1.5-1.2-0.8-2.9-1.3-3.7-1-0.8 0.3-1.5 0.1-1.5-0.5 0-0.6-1.9-1.4-4.3-1.9-2.3-0.6-5.3-2.1-6.7-3.6-1.4-1.4-2.3-2.5-2-2.5 0.3 0 2.4 0.9 4.7 2 2.4 1.1 5.5 2 7 2 1.6 0 3.8-0.2 5-0.5 1.3-0.3 2.3-0.9 2.3-1.5 0-0.6-2.4-1-5.3-1-3.5 0.1-5.7-0.4-6.7-1.5-0.8-0.9-2.2-1.6-3-1.5-1.1 0-1.6-1.2-2-8.5l2.5 2.8c1.4 1.5 2.9 2.7 3.5 2.7 0.5 0 1-0.4 1-1 0-0.6-1-1.7-2.3-2.5-1.9-1.3-2-1.7-0.7-2.5 0.8-0.5 1.7-1 2-1 0.3 0 1.6 1.1 3 2.5 1.4 1.4 3.2 2.5 4 2.5 0.8 0 2.2-0.5 3-1.1 1.2-0.8 0.9-1-1.4-0.7-2 0.2-3.2-0.3-4.1-1.7-0.8-1.1-1.7-3.3-2-5-0.7-3-0.7-3 1.9 0.8 1.4 2 2.8 3.7 3.1 3.7 0.3 0 1.2-0.2 2-0.5 1.1-0.4 1.4-1.5 1-4.7-0.5-3.9-0.4-4.1 0.7-2 0.7 1.2 1.6 2.2 2 2.2 0.5 0 1.5-1.7 2.4-3.7 0.8-2.1 1.9-7.4 2.3-11.8 0.4-4.4 0.6-8.8 0.4-9.7-0.2-1-0.8-1.8-1.3-1.8-0.6 0-1 1.5-1.1 3.3-0.1 3.1-0.1 3.1-1 0.7-0.7-2-0.8-1.7-0.4 1.5 0.3 3.3 0.2 3.7-0.8 2.3-0.7-1-1.5-1.7-2-1.8-0.4 0-0.7 1.2-0.7 2.8 0 2-0.3 2.3-0.9 1.2-0.7-1.1-1-0.5-1.5 2.3-0.3 2-0.4 5.4-0.1 7.5 0.3 2.1 0.2 2.9-0.2 1.9-0.5-1-1.3-1.7-1.8-1.5-0.6 0.2-1.1-2.3-1.3-5.9-0.1-3.5-0.7-6.3-1.2-6.3-0.6 0-1.2 0.6-1.4 1.3-0.3 0.6-0.5-0.6-0.8-6.8l-2.7 6v-3.5c-0.1-1.9 1-5.9 2.4-8.7 1.9-4 2.5-6.8 2.3-11 0-3.2 0.2-7.7 0.5-10 0.4-2.4 0.4-4.3-0.1-4.3-0.4 0-1.7 1-3 2.3-1.2 1.2-2.3 1.8-2.3 1.2 0-0.6 1.9-2.8 4.3-4.9 2.4-2.2 5.7-6.5 7.3-9.5 1.7-3.1 3.7-6.7 4.5-8.1 0.8-1.4 1.8-2.7 2.2-3 0.4-0.3 2.5-3 4.8-6 2.2-3 4-5.9 4-6.5 0-0.6-1.1 0.1-2.6 1.5-1.5 1.4-3.5 4.3-4.5 6.5-1 2.2-1.9 3.3-1.9 2.5 0-0.9-0.6-0.5-1.5 1-0.7 1.4-1.7 2.3-2.2 2.2-0.4-0.2-1.3 1.1-1.9 3-1.1 3.1-1.2 3.2-1.6 0.8-0.2-1.5 0.9-5.2 2.9-9.2 1.8-3.8 3.3-7.1 3.3-7.5-0.1-0.5-1.6 1-3.5 3.2-1.9 2.2-3.5 3.4-3.5 2.8 0-0.7 2.6-4.1 5.8-7.5 3.2-3.5 7.9-9.2 10.4-12.8 2.5-3.6 7.4-9.3 10.9-12.7 4.8-4.6 8.8-7.3 16.1-10.7 5.4-2.5 15.3-6.2 22-8.2 6.8-1.9 12.6-4.1 13-4.7 0.4-0.7 0.8-1.9 0.8-2.7 0-0.8 1.1-3.8 2.3-6.5 1.3-2.8 3.9-6.4 5.8-8.1 1.9-1.6 5.2-3.6 7.4-4.3 2.3-0.8 5.7-1.1 8-0.7 3.7 0.5 4.7 0.1 14.5-6.7 10.1-7 10.5-7.5 11.3-11.8 0.4-2.4 1.5-5.8 2.5-7.4 1-1.6 3.8-4.4 6.1-6 3.3-2.3 5.7-3.1 10-3.4 3.4-0.2 8.4 0.4 12.8 1.5 5.8 1.5 7.5 1.6 8.5 0.7 0.9-1 0.7-1.3-1.3-1.3-1.8-0.1-2.1-0.3-0.9-1 0.8-0.4 5.1-1.2 9.5-1.6 4.4-0.4 11.6-1.7 16-3 7-2 7.5-2.3 4.1-2.3-2.2-0.1-3.6-0.4-3.2-0.9 0.4-0.4 3.5-0.6 6.9-0.5 3.5 0.1 9.2-0.6 13.2-1.7 3.8-1 6.1-1.9 5-2-1.1-0.1 1.6-0.8 6-1.6 4.4-0.7 14.3-1.8 22-2.4 7.7-0.6 14.7-1.4 15.5-1.7 0.8-0.4 6-0.5 11.5-0.4 5.5 0.1 10.8 0.4 11.7 0.7 1.3 0.3 1.6 0 1.1-1.1-0.3-0.8-0.3-1.5 0-1.5zm-146.3 27.8c-1.4 1-3.3 3.3-4.3 5.1-0.9 1.7-1.5 3.3-1.2 3.6 0.3 0.3 4-1.8 8.3-4.6 4.2-2.9 8.1-5.5 8.7-5.9q1-0.8-0.1-1.2c-0.7-0.2-2.9-0.1-5 0.3-2.2 0.4-5 1.6-6.4 2.7zm-50.2 37.5c-1 1.2-1.8 2.5-1.8 2.9 0 0.5 0.8 0.4 1.8-0.1 0.9-0.5 4-2.6 6.7-4.5 3.6-2.6 4.4-3.6 3-3.6-1.1 0-3.3 0.7-5 1.6-1.7 0.8-3.8 2.5-4.7 3.7z"
      />
    </m.svg>
  );
}

export default HeaderImageAnimation;
