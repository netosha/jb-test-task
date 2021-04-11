import React, { MouseEventHandler } from 'react'
import styles from './Task.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import Checkbox from '../../Checkbox'
import { Task } from '../types'

export default function TaskCard({
  task,
  onClick,
  onNameChange,
  onDelete,
}: {
  task: Task
  onClick: MouseEventHandler<HTMLDivElement>
  onNameChange?: (name: string) => void
  onDelete?: () => void
}) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)
  const [textAreaHeight, setTextAreaHeight] = React.useState('auto')
  const [parentHeight, setParentHeight] = React.useState('auto')

  React.useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
  }, [task])

  return (
    <motion.div
      key={task.id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(styles.task, { [styles.done]: task.status === 'done' })}
    >
      <Checkbox onClick={onClick} checked={task.status === 'done'} />
      <textarea
        ref={textAreaRef}
        rows={1}
        className={styles.textarea}
        placeholder={'Do homework'}
        value={task.name}
        onChange={e => onNameChange?.(e.target.value)}
        style={{
          height: textAreaHeight,
        }}
      />
      <div className={styles.remove} onClick={onDelete}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      {/*{task.date.toISOString()}*/}
    </motion.div>
  )
}
