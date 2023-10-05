// import { Ultra } from '@next/font/google';
import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  AirflowIcon,
  AnsibleIcon,
  AWSIcon,
  AzureIcon,
  DockerIcon,
  GCPIcon,
  JenkinsIcon,
  KafkaIcon,
  KubernetesIcon,
  PostgresIcon,
  SparkIcon,
  TerraformIcon,
} from '@/components/Icons';

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
        <strong>We are proud users of the following technologies : </strong>
      </m.p>
      <m.ul
        className={clsx(
          'flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="show"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <DockerIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <JenkinsIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <AnsibleIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <KubernetesIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <AzureIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <GCPIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <AWSIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <SparkIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <KafkaIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <AirflowIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>

        <ul>
          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#3178C6]')}
            >
              <PostgresIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>

          <m.li variants={animation} className="mb-2">
            <div
              className={clsx('transition duration-200 hover:text-[#06B6D4]')}
            >
              <TerraformIcon className={clsx('h-11 w-11')} />
            </div>
          </m.li>
        </ul>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
