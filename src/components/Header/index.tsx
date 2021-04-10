import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo} />
      </div>
    </header>
  )
}
