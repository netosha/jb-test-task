import React from 'react'
import styles from './Tasks.module.scss'
import { AnimatePresence } from 'framer-motion'
import { Task } from './types'
import TaskCard from './Task'
import { useDate } from '../../hooks/useDate'

let intalValue: Task[] = [
  {
    id: 1,
    name: 'Test todo',
    status: 'todo',
    date: new Date(2021, 3, 11),
  },
  { id: 2, name: 'Test done', status: 'done', date: new Date(2021, 3, 13) },
]

export default function Tasks() {
  const [tasks, setTasks] = React.useState<Task[]>(intalValue)
  const { date } = useDate()
  console.log('curr date', date)
  const currentDayTasks = tasks.filter(t => date.getTime() === t.date.getTime())

  const todoTasks = currentDayTasks
    .filter(t => t.status === 'todo')
    .sort((a, b) => a.id - b.id)
  const doneTasks = currentDayTasks
    .filter(t => t.status === 'done')
    .sort((a, b) => a.id - b.id)

  const changeTask = (id: number, newTask: Task) => {
    console.log(id, newTask)
    const oldTasks = [...tasks]
    const neededTask = oldTasks.splice(
      oldTasks.findIndex(t => t.id === id),
      1,
    )
    setTasks([...oldTasks, { ...newTask }])
  }

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        name: '',
        status: 'todo',
        date: date,
      },
    ])
  }

  const removeTask = (id: number) => {
    const oldTasks = [...tasks]
    const neededTask = oldTasks.splice(
      oldTasks.findIndex(t => t.id === id),
      1,
    )
    setTasks([...oldTasks])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.badge_wrapper}>
          <div className={styles.badge}>To-do ({todoTasks.length})</div>
        </div>
        <div className={styles.tasks_container}>
          <AnimatePresence>
            {todoTasks.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onClick={() => changeTask(t.id, { ...t, status: 'done' })}
                onNameChange={name =>
                  changeTask(t.id, { ...t, id: t.id, name })
                }
                onDelete={() => removeTask(t.id)}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className={styles.add_button_wrapper} onClick={addTask}>
          <div className={styles.add_button}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={styles.add_button_icon}
              fill='gray'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
            <span>New</span>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.badge_wrapper}>
          <div
            className={styles.badge}
            style={{ background: '#1199EE', color: 'white' }}
          >
            Done ({doneTasks.length})
          </div>
        </div>
        <div className={styles.tasks_container}>
          <AnimatePresence>
            {doneTasks.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onNameChange={name =>
                  changeTask(t.id, { ...t, id: t.id, name })
                }
                onClick={() => changeTask(t.id, { ...t, status: 'todo' })}
                onDelete={() => removeTask(t.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
