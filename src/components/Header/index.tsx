import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <Link to="/">
          <div className={styles.logo} />
        </Link>
      </div>
    </header>
  );
}
