import React from 'react'
import Chart from '../Chart'
import { useTasks } from '../../hooks/useTasks'
import { getDateDay, getOffsetedDay } from '../../utils'

export default function Stats() {
  const { tasks } = useTasks()

  const data = [
    {
      value:
        tasks?.filter(t => t.date.getTime() === getOffsetedDay(-3).getTime())
          .length ?? 0,
      label: getOffsetedDay(-3).toLocaleString('en-us', {
        weekday: 'short',
      }),
    },
    {
      value:
        tasks?.filter(t => t.date.getTime() === getOffsetedDay(-2).getTime())
          .length ?? 0,
      label: getOffsetedDay(-2).toLocaleString('en-us', {
        weekday: 'short',
      }),
    },
    {
      value:
        tasks?.filter(t => t.date.getTime() === getOffsetedDay(-1).getTime())
          .length ?? 0,
      label: getOffsetedDay(-1).toLocaleString('en-us', {
        weekday: 'short',
      }),
    },
    {
      value:
        tasks?.filter(t => t.date.getTime() === getOffsetedDay(0).getTime())
          .length ?? 0,
      label: getOffsetedDay(0).toLocaleString('en-us', {
        weekday: 'short',
      }),
    },
    {
      value:
        tasks?.filter(t => t.date.getTime() === getOffsetedDay(1).getTime())
          .length ?? 0,
      label: getOffsetedDay(1).toLocaleString('en-us', {
        weekday: 'short',
      }),
    },
  ]

  const dataTest = Array.from({ length: 7 }).map((v, i) => ({
    value:
      tasks?.filter(t => t.date.getTime() === getOffsetedDay(-3 + i).getTime())
        .length ?? 0,
    label: getOffsetedDay(-3 + i).toLocaleString('en-us', {
      weekday: 'short',
    }),
    inner: {
      value:
        tasks
          ?.filter(t => t.date.getTime() === getOffsetedDay(-3 + i).getTime())
          .filter(t => t.status === 'done').length ?? 0,
    },
  }))

  console.log(dataTest)
  return (
    <div style={{ marginTop: 32, maxWidth: 640 }}>
      <Chart data={dataTest} />
    </div>
  )
}
