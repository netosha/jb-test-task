import React from 'react';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Tasks.module.scss';
import { Task } from '../../types';
import TaskCard from './Task';
import { useDate } from '../../hooks/useDate';
import { useTasks } from '../../hooks/useTasks';
import { getRandomPlaceholder } from '../../utils';
import useWindowSize from '../../hooks/useWindowSize';

export default function Tasks() {
  const { tasks, setTasks } = useTasks();
  const { date } = useDate();
  const { width } = useWindowSize();
  // Only for mobie
  const [tab, setTab] = React.useState<'todo' | 'done'>('todo');

  // TODO: Do skeleton here
  // Case, when tasks are not loaded from localstorage
  if (tasks === null) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <div className={styles.task_title_wrapper}>
            <div className={styles.badge}>To-do</div>
          </div>
        </div>
        <div className={styles.task_title_wrapper}>
          <div className={cn(styles.badge, styles.done_badge)}>Done</div>
        </div>
      </div>
    );
  }

  const currentDayTasks = tasks!.filter(
    (t) => date.getTime() === t.date.getTime(),
  );

  const todoTasks = currentDayTasks
    .filter((t) => t.status === 'todo')
    .sort((a, b) => a.id - b.id);

  const doneTasks = currentDayTasks
    .filter((t) => t.status === 'done')
    .sort((a, b) => a.id - b.id);

  const changeTask = (id: number, newTask: Task) => {
    console.log(id, newTask);
    const oldTasks = [...tasks!];
    const neededTask = oldTasks.splice(
      oldTasks.findIndex((t) => t.id === id),
      1,
    );
    setTasks([...oldTasks, { ...newTask }]);
  };

  const addTask = () => {
    setTasks([
      ...tasks!,
      {
        id: new Date().getTime(),
        status: 'todo',
        date,
        placeholder: getRandomPlaceholder(),
      },
    ]);
  };

  const removeTask = (id: number) => {
    const oldTasks = [...tasks!];
    const neededTask = oldTasks.splice(
      oldTasks.findIndex((t) => t.id === id),
      1,
    );
    setTasks([...oldTasks]);
  };

  console.log(window.innerWidth, 'lox');

  // Adopted for mobile devices
  if ((width ?? window.innerWidth) < 720) {
    return (
      <div className={styles.wrapper} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.column}>
          <div className={styles.task_title_wrapper}>
            <div
              className={cn(styles.badge, {
                [styles.done_badge]: tab === 'todo',
              })}
              onClick={(e) => setTab('todo')}
            >
              To-do
            </div>
            <div
              className={cn(styles.badge, {
                [styles.done_badge]: tab === 'done',
              })}
              onClick={(e) => setTab('done')}
            >
              Done
            </div>
          </div>
          <div className={styles.tasks_container}>
            {tab === 'todo' && (
              <>
                {' '}
                {todoTasks.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    onClick={() =>
                      changeTask(t.id, {
                        ...t,
                        status: 'done',
                        name: t.name ?? t.placeholder,
                      })
                    }
                    onNameChange={(name) =>
                      changeTask(t.id, { ...t, id: t.id, name })
                    }
                    onDelete={() => removeTask(t.id)}
                  />
                ))}
                <motion.div
                  layout
                  key="add-new-task"
                  onClick={addTask}
                  className={styles.mobile_add_button}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.add_button_icon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </motion.div>
              </>
            )}

            {tab === 'done' && (
              <>
                {doneTasks.length === 0 && (
                  <div style={{ color: 'gray', fontWeight: 600 }}>
                    😕 No tasks yet
                  </div>
                )}
                {doneTasks.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    onNameChange={(name) =>
                      changeTask(t.id, { ...t, id: t.id, name })
                    }
                    onClick={() => changeTask(t.id, { ...t, status: 'todo' })}
                    onDelete={() => removeTask(t.id)}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  console.log(width);
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.task_title_wrapper}>
          <div className={styles.badge}>To-do</div>
          <span className={styles.count}>{todoTasks.length}</span>
        </div>
        <div className={styles.tasks_container}>
          {todoTasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onClick={() =>
                changeTask(t.id, {
                  ...t,
                  status: 'done',
                  name: t.name ?? t.placeholder,
                })
              }
              onNameChange={(name) =>
                changeTask(t.id, { ...t, id: t.id, name })
              }
              onDelete={() => removeTask(t.id)}
            />
          ))}
          <motion.div
            layout
            key="add-new-task"
            onClick={addTask}
            className={styles.add_button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.add_button_icon}
              fill="gray"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>New</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.task_title_wrapper}>
          <div className={cn(styles.badge, styles.done_badge)}>Done</div>
          <span className={styles.count} style={{ color: '#1199ff' }}>
            {doneTasks.length}
          </span>
        </div>
        <div className={styles.tasks_container}>
          {doneTasks.length === 0 && (
            <div style={{ color: 'gray', fontWeight: 600 }}>
              😕 No tasks yet
            </div>
          )}
          {doneTasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onNameChange={(name) =>
                changeTask(t.id, { ...t, id: t.id, name })
              }
              onClick={() => changeTask(t.id, { ...t, status: 'todo' })}
              onDelete={() => removeTask(t.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
