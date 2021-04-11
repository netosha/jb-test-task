import React from 'react';
import { StorageTask, Task } from '../types';

const TasksContext = React.createContext<{
  tasks: Task[] | null;
  setTasks: (tasks: Task[]) => void;
  serializeTasks: (s: string) => Task[];
}>({
  tasks: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTasks: (d) => {},
  serializeTasks: () => [],
});

export function TasksProvider({ children }: any) {
  const [tasks, setTasks] = React.useState<Task[] | null>(null);

  const serializeTasks = (s: string) => {
    const rowTasks = JSON.parse(s) as StorageTask[];
    const serializedTasks: Task[] = rowTasks.map((t) => ({
      ...t,
      date: new Date(t.date),
    }));

    return serializedTasks;
  };

  React.useEffect(() => {
    localStorage.getItem('tasks');
    if (tasks !== null) {
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Define local tasks storage
  React.useEffect(() => {
    const localTasksString = window.localStorage.getItem('tasks');
    if (!localTasksString) {
      window.localStorage.setItem('tasks', JSON.stringify([]));
      setTasks([]);
    } else {
      try {
        const localTasks = serializeTasks(
          localStorage.getItem('tasks') as string,
        );
        setTasks(localTasks);
      } catch (e) {
        console.log('Error while loading local tasks', e);
      }
    }
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, serializeTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  return React.useContext(TasksContext);
};
