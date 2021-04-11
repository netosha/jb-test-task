import React from 'react'
import cn from 'classnames'
import styles from './Breadcrumbs.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  console.log(location)
  return (
    <div className={styles.wrapper}>
      <Link
        to='/'
        className={cn(styles.item, {
          [styles.active]: location.pathname === '/',
        })}
      >
        <span>Tasks</span>
      </Link>
      <Link
        to='/stats'
        className={cn(styles.item, {
          [styles.active]: location.pathname === '/stats',
        })}
      >
        <span>Stats</span>
      </Link>
      <Link
        to='/help'
        className={cn(styles.item, {
          [styles.active]: location.pathname === '/help',
        })}
      >
        <span>Help</span>
      </Link>
    </div>
  )
}
