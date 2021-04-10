import React from 'react'
import styles from './Datepicker.module.scss'

export default function Datepicker() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Tasks</div>
      <div className={styles.date}><span style={{cursor: 'pointer'}}>Today</span></div>
    </div>
  )
}
