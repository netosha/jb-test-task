import React from 'react'
import cn from 'classnames'
import styles from './Tasks.module.scss'
import { Task } from './types'

const tasks: Task[] = [
  {
    name: 'Test todo',
    status: 'todo',
  },
  { name: 'Test done', status: 'done' },
]

export default function Tasks() {
  const todoTasks = tasks.filter(t => t.status === 'todo')
  const doneTasks = tasks.filter(t => t.status === 'done')

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.badge_wrapper}>
          <div className={styles.badge}>To-do</div>
        </div>
        {todoTasks.map(t => (
          <div className={styles.task}>{t.name}</div>
        ))}
      </div>
      <div className={styles.column}>
        <div className={styles.badge_wrapper}>
          <div className={cn(styles.badge, styles.done)}>Done</div>
        </div>
        {doneTasks.map(t => (
          <div className={cn(styles.task, styles.done)}>{t.name}</div>
        ))}
      </div>
    </div>
  )
}
