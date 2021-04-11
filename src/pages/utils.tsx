import React from 'react';
import cn from 'classnames';
import styles from '../styles/pages/Utils.module.scss';
import Button from '../components/Button';
import { useTasks } from '../hooks/useTasks';
import { useDate } from '../hooks/useDate';

export default function Utils() {
  const sampleTaskJSON = `[{"id":1618167500729,"status":"todo","date":"2021-04-10T21:00:00.000Z","placeholder":"Skip by store","name":"Do homework"},{"id":1618167505559,"status":"done","date":"2021-04-10T21:00:00.000Z","placeholder":"Raise a doctor","name":"Get an interview with Jetbrains"}]`;
  const [newTasks, setNewTasks] = React.useState<string>('');
  const { tasks, serializeTasks, setTasks } = useTasks();
  const { setDate } = useDate();

  const loadTasks = () => {
    try {
      const serializedTasks = serializeTasks(newTasks);
      setTasks(serializedTasks);
      setDate(serializedTasks[0].date);
    } catch (e) {
      alert('error while task serializing, check console');
      console.log(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.card_title}>Import from JSON</span>
        <span
          className={styles.card_description}
          style={{ fontWeight: 600, marginBottom: 8 }}
        >
          For example:
        </span>
        <span className={styles.card_description} style={{ marginBottom: 16 }}>
          {sampleTaskJSON}
        </span>
        <span
          className={styles.card_description}
          style={{ fontWeight: 600, marginBottom: 8 }}
        >
          Current:
        </span>
        <code className={styles.card_description} style={{ marginBottom: 16 }}>
          {JSON.stringify(tasks)}
        </code>
        <textarea
          value={newTasks}
          className={cn(styles.textarea)}
          onChange={(e) => setNewTasks(e.target.value)}
        />
        <div style={{ marginTop: 8 }}>
          <Button
            style={{ fontWeight: 600, marginRight: 8 }}
            onClick={loadTasks}
          >
            Import
          </Button>
          <Button
            style={{ fontWeight: 600, background: '#EE4444' }}
            onClick={() => {
              setTasks([]);
              setNewTasks('');
            }}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
