import React from 'react';
import styles from '../styles/pages/Index.module.scss';
import Tasks from '../components/Tasks';
import Stats from '../components/Stats';

export default function Statistics() {
  return (
    <div className={styles.wrapper}>
      <Stats />
    </div>
  );
}
