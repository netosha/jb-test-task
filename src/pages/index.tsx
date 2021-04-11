import React from 'react'
import styles from '../styles/pages/Index.module.scss'
import Datepicker from '../components/Datepicker'
import Tasks from '../components/Tasks'
import Chart from '../components/Chart'

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Datepicker />
      <Tasks />
      <div style={{ marginTop: 32, maxWidth: 640 }}>
        <Chart />
      </div>
    </div>
  )
}
