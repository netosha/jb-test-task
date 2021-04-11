import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <Link to='/'>
          <div className={styles.logo} />
        </Link>
      </div>
    </header>
  )
}
