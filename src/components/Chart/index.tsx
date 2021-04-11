import React from 'react'
import styles from './Chart.module.scss'
import { offsetFromCurrentDay, getDateDay } from '../../utils'

const data = [
  {
    value: 1,
    label: offsetFromCurrentDay(-3).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
  {
    value: 2,
    label: offsetFromCurrentDay(-2).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
  {
    value: 4,
    label: offsetFromCurrentDay(-1).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
  {
    value: 1,
    label: getDateDay().toLocaleString('en-us', { weekday: 'short' }),
  },
  {
    value: 1,
    label: offsetFromCurrentDay(1).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
  {
    value: 1,
    label: offsetFromCurrentDay(2).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
  {
    value: 1,
    label: offsetFromCurrentDay(3).toLocaleString('en-us', {
      weekday: 'short',
    }),
  },
]

const maxValue = Math.max(...data.map(x => x.value), 0)

export default function Chart() {
  return (
    <div className={styles.wrapper}>
      {data.map(c => (
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div
            className={styles.column}
            style={{ height: `${(c.value / maxValue) * 100}%` }}
          >
            {c.value}
          </div>
        </div>
      ))}
      {data.map((c, i) => (
        <div className={styles.label}>{c.label}</div>
      ))}
    </div>
  )
}
