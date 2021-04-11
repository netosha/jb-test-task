import React from 'react'
import styles from './Chart.module.scss'
import { motion } from 'framer-motion'
export default function Chart({
  data,
}: {
  data: { value: number; label: string; inner?: { value: number } }[]
}) {
  const maxValue = Math.max(...data.map(x => x.value), 0)

  return (
    <div
      className={styles.wrapper}
      style={{ gridTemplateColumns: `repeat(${data.length}, auto)` }}
    >
      {data.map(c => (
        <motion.div
          layout
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div
            className={styles.column}
            style={{
              height: `${(c.value / maxValue) * 100}%`,
              minHeight: c.value > 0 ? 48 : 0,
            }}
          >
            {c.inner?.value !== c.value && (
              <div className={styles.primary}>{c.value}</div>
            )}
            {c.value > 0 && c.inner && c.inner?.value > 0 && (
              <motion.div
                layout
                className={styles.inner}
                style={{ height: `${(c.inner.value / c.value) * 100}%` }}
              >
                {c.inner?.value}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
      {data.map((c, i) => (
        <div className={styles.label}>{c.label}</div>
      ))}
    </div>
  )
}
