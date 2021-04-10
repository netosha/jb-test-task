import React from 'react'
import styles from '../styles/pages/Index.module.scss'
import Datepicker from '../components/Datepicker'
import Tasks from '../components/Tasks'

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Datepicker />
      <div>
        <Tasks />
      </div>
    </div>
  )
}
