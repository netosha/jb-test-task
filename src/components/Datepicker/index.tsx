import React from 'react'
import { useDate } from '../../hooks/useDate'
import { getDateDay, offsetFromCurrentDay } from '../../utils'
import styles from './Datepicker.module.scss'

export default function Datepicker() {
  const { date, setDate } = useDate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Tasks</div>
      <div className={styles.date}>
        <select
          className={styles.select}
          value={date!.getTime()}
          onChange={e => setDate(new Date(Number.parseInt(e.target.value)))}
        >
          <option value={offsetFromCurrentDay(-3).getTime()}>
            {offsetFromCurrentDay(-3).toLocaleDateString()}
          </option>
          <option value={offsetFromCurrentDay(-2).getTime()}>
            {offsetFromCurrentDay(-2).toLocaleDateString()}
          </option>
          <option value={offsetFromCurrentDay(-1).getTime()}>Yesterday</option>
          <option value={getDateDay().getTime()}>Today</option>
          <option value={offsetFromCurrentDay(1).getTime()}>Tomorrow</option>
          <option value={offsetFromCurrentDay(2).getTime()}>
            {offsetFromCurrentDay(2).toLocaleDateString()}
          </option>
          <option value={offsetFromCurrentDay(3).getTime()}>
            {offsetFromCurrentDay(3).toLocaleDateString()}
          </option>
        </select>
        {/*<span style={{ cursor: 'pointer' }}>Today</span>*/}
      </div>
    </div>
  )
}
