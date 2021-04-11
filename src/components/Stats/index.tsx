import React from 'react';
import Chart from '../Chart';
import { useTasks } from '../../hooks/useTasks';
import { getCurrentMonthDays, getOffsetedDay } from '../../utils';

export default function Stats() {
  const { tasks } = useTasks();
  const now = new Date();
  const data = Array.from({ length: getCurrentMonthDays() }).map((v, i) => ({
    value:
      tasks?.filter(
        (t) =>
          t.date.getTime() ===
          new Date(now.getFullYear(), now.getMonth(), i).getTime(),
      ).length ?? 0,
    label: `${new Date(now.getFullYear(), now.getMonth(), i).toLocaleString(
      'en-us',
      {
        weekday: 'short',
      },
    )} ${new Date(now.getFullYear(), now.getMonth(), i).getDate()}`,
    inner: {
      value:
        tasks
          ?.filter(
            (t) =>
              t.date.getTime() ===
              new Date(now.getFullYear(), now.getMonth(), i).getTime(),
          )
          .filter((t) => t.status === 'done').length ?? 0,
    },
  }));

  return (
    <div style={{ marginTop: 32, maxWidth: 640 }}>
      {data.filter((x) => x.value > 0).length === 0 && (
        <span style={{ color: 'gray' }}>
          🧐 No data available. Add any task.
        </span>
      )}
      <Chart data={data.filter((x) => x.value > 0)} />
    </div>
  );
}
