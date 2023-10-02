import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <SectionTitle
          title="Data Pipeline & Models"
          caption="olympics-data-pipeline"
          description="Harnessing the power of Azure to shape colossal datasets into valuable insights."
          button={{
            title: 'learn more',
            href: '/docs/olympics',
          }}
        />
      </div>

      <div style={{ marginBottom: '25px' }}>
        <SectionTitle
          title="Stock Market Analysis of Ford, GM & Tesla"
          caption="ford-GM-share-price"
          description="Analysing the stock market prices."
          button={{
            title: 'learn more',
            href: '/docs/ford-gm-share-price',
          }}
        />
      </div>

      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access my content."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Available on npm"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Explore my projects."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'github/mandatary',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <NpmIcon className="h-4 w-4" />,
                      title: 'npm/mandatary',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="mandatary"
                      license="MIT"
                      repository="ford-GM-share-price"
                      description="Stock Analysis of Ford, GM & Tesla."
                    />
                  )}
                  {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="npm/mandatary"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
