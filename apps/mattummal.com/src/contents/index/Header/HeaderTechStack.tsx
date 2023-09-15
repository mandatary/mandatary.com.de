import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
  ScalaIcon,
  PostgresIcon,
  StackOverflowIcon,
  PythonIcon,
  KubernetesIcon,
  PShellIcon,
  IJIdeaIcon,
  JenkinsIcon,
  VIMIcon,
  TerraformIcon,
  AzureIcon,
  AWSIcon,
  DockerIcon,
} from '@/components/Icons';
import { Ultra } from '@next/font/google';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        have a profound appreciation for the following technology stack and
        tools:
      </m.p>
      <m.ul
        className={clsx(
          'flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <ScalaIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <PythonIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <DockerIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <JenkinsIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <KubernetesIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <AzureIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <AWSIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <PostgresIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <TerraformIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <TypeScriptIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#61DAFB]')}
            >
              <ReactIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <TailwindCssIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx(
                'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
              )}
            >
              <NextJsIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <m.li variants={animation} className="mb-2">
          <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
            <StackOverflowIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>

        <m.li variants={animation} className="mb-2">
          <div className={clsx('h-9 w-[2px] bg-slate-300 dark:bg-slate-700')} />
        </m.li>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#007ACC]')}
            >
              <VIMIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#007ACC]')}
            >
              <PShellIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#007ACC]')}
            >
              <VSCodeIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#007ACC]')}
            >
              <IJIdeaIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </ul>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
