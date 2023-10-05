import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'data-analysis',
    shows: ['data-analysis'],
    title: 'Data Analysis',
    description:
      'Perform in-depth data analysis and generate actionable insights.',
  },
  {
    state: 'machine-learning',
    shows: ['machine-learning', 'data-analysis'],
    title: 'Machine Learning Models',
    description:
      'Develop and deploy predictive machine learning models for data-driven decision-making.',
  },
  {
    state: 'data-visualization',
    shows: ['data-visualization', 'data-analysis'],
    title: 'Data Visualization',
    description:
      'Create informative and visually appealing data visualizations to communicate insights effectively.',
  },
  {
    state: 'model-deployment',
    shows: ['model-deployment', 'machine-learning', 'data-analysis'],
    title: 'Model Deployment',
    description:
      'Deploy machine learning models into production environments for real-time predictions.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Pioneering Tech-Infused Engineering"
          caption="Efficiency Meets Innovation"
          description="Fusing cutting-edge technology with seamless efficiency, sculpting user interfaces to reach unprecedented heights."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : [
                          'model-deployment',
                          'machine-learning',
                          'data-analysis',
                          'data-visualization',
                        ]
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : [
                          'model-deployment',
                          'machine-learning',
                          'data-analysis',
                          'data-visualization',
                        ]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
