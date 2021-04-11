import React from 'react';
import styles from '../styles/pages/Utils.module.scss';

export default function Help() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.card_title}>
          Check{' '}
          <a
            href="https://github.com/netosha/jb-test-task#readme"
            rel="noreferrer"
            target="_blank"
            style={{ color: '#0099ff' }}
          >
            README.MD
          </a>
        </span>
      </div>
    </div>
  );
}
