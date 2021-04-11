import React from 'react';
import styles from '../styles/pages/Index.module.scss';
import Datepicker from '../components/Datepicker';
import Tasks from '../components/Tasks';
import Stats from '../components/Stats';

export default function Index() {
  const [isChartVisible, setChartVisible] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <Datepicker />
      <Tasks />
    </div>
  );
}
