import clsx from 'clsx';

import { CalendarIcon } from '@/components/Icons';

export type TodoItemState =
  | 'data-analysis'
  | 'machine-learning'
  | 'data-visualization'
  | 'model-deployment';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
}

function TodoItem({
  state,
  title = 'Predictive Model Optimization',
  description = 'Enhance predictive model accuracy through advanced algorithms and data preprocessing techniques.',
  date = '14:00 · Today',
  tag1 = 'Machine Learning',
  tag2 = 'Data Analysis',
}: TodoItemProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        state.includes('data-analysis') && ['rounded-xl'],
        state.includes('machine-learning') && [''],
        state.includes('data-visualization') ? ['text-sm'] : ['font-serif'],
        state.includes('model-deployment')
          ? [
              'border-divider-light bg-white',
              'dark:border-divider-dark dark:bg-slate-900',
            ]
          : ['border-black bg-white', 'dark:border-white dark:bg-[#050914]']
      )}
      role="presentation"
    >
      <div
        className={clsx(
          'flex items-center',
          state.includes('machine-learning') && ['mb-4 justify-between']
        )}
      >
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              state.includes('data-analysis') && ['rounded-full'],
              state.includes('machine-learning') && [''],
              state.includes('data-visualization') && ['font-bold'],
              state.includes('model-deployment')
                ? ['border-white bg-sky-400 text-white']
                : [
                    'border-white bg-[#050914] text-white',
                    'dark:bg-white dark:text-black',
                  ]
            )}
          >
            P
          </div>
        </div>
        <div
          className={clsx(
            state.includes('data-analysis') && ['rounded-full'],
            state.includes('machine-learning') && ['px-2 py-0.5'],
            state.includes('data-visualization') && ['text-xs font-bold'],
            state.includes('model-deployment')
              ? [
                  'bg-green-100 text-green-800',
                  'dark:bg-green-500/20 dark:text-green-300',
                ]
              : ['bg-[#00ff00] text-white']
          )}
        >
          Advanced
        </div>
      </div>
      <div
        className={clsx(
          state.includes('machine-learning') && ['mb-1'],
          state.includes('data-visualization') && ['text-lg font-bold'],
          state.includes('model-deployment')
            ? [
                'bg-green-100 text-green-800',
                'dark:bg-green-500/20 dark:text-green-300',
              ]
            : ['bg-[#00ff00] text-white'],

          state.includes('data-analysis')
            ? ['text-red-700', 'dark:text-red-300']
            : ['text-black', 'dark:text-white']
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          state.includes('data-visualization') && ['mb-4'],
          state.includes('data-analysis') && [''],
          state.includes('model-deployment')
            ? ['text-red-600', 'dark:text-red-400']
            : ['text-black', 'dark:text-white']
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          'flex',
          state.includes('data-visualization') && ['mb-6 gap-2'],
          state.includes('data-analysis') && ['text-xs font-bold'],
          state.includes('model-deployment') && ['']
        )}
      >
        <div
          className={clsx(
            state.includes('machine-learning') && ['rounded-full'],
            state.includes('data-visualization') && ['px-2 py-0.5'],
            state.includes('data-analysis') && [''],
            state.includes('model-deployment')
              ? [
                  'bg-blue-100 text-blue-700',
                  'dark:bg-blue-500/20 dark:text-blue-300',
                ]
              : ['bg-[#0000ff] text-white']
          )}
        >
          {tag1}
        </div>
        <div
          className={clsx(
            state.includes('machine-learning') && ['rounded-full'],
            state.includes('data-visualization') && ['px-2 py-0.5'],
            state.includes('data-analysis') && [''],
            state.includes('model-deployment')
              ? [
                  'bg-yellow-100 text-yellow-700',
                  'dark:bg-yellow-500/20 dark:text-yellow-300',
                ]
              : ['bg-[#ffff00] text-black']
          )}
        >
          {tag2}
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('data-visualization') && ['gap-1'],
          state.includes('data-analysis') && ['text-xs font-medium'],
          state.includes('model-deployment') && ['']
        )}
      >
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('data-visualization') && ['-mt-1'],
            state.includes('data-analysis') && [''],
            state.includes('model-deployment')
              ? ['text-red-400', 'dark:text-red-600']
              : ['h-4 w-4 text-black', 'dark:text-white']
          )}
        />
        <div
          className={clsx(
            state.includes('data-visualization') && [''],
            state.includes('data-analysis') && [''],
            state.includes('model-deployment')
              ? ['text-red-600', 'dark:text-red-400']
              : ['text-black', 'dark:text-white']
          )}
        >
          {date}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
