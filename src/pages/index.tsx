import React from 'react'
import styles from '../styles/pages/Index.module.scss'
import Datepicker from '../components/Datepicker'
import Tasks from '../components/Tasks'
import Chart from '../components/Chart'

export default function Index() {
  const [isChartVisible, setChartVisible] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <Datepicker />
      <Tasks />
      <div style={{ marginTop: 32, maxWidth: 640 }}>
        <span
          style={{ fontSize: 36, fontWeight: 700, cursor: 'pointer' }}
          onClick={() => setChartVisible(!isChartVisible)}
        >
          Stats{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            style={{ height: 24, width: 24 }}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </span>

        {true && <Chart />}
      </div>
    </div>
  )
}
