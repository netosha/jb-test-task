import React from 'react';
import { Route, BrowserRouter as Routes } from 'react-router-dom';
import styles from './styles/App.module.scss';
import Header from './components/Header';
import Index from './pages';
import Stats from './pages/stats';
import Utils from './pages/utils';
import Help from './pages/help';

import { DateProvider } from './hooks/useDate';
import { TasksProvider } from './hooks/useTasks';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <DateProvider>
      <TasksProvider>
        <Routes>
          <div className={styles.page}>
            <Header />
            <div className={styles.content}>
              <div className={styles.inner}>
                <Breadcrumbs />
                <Route path="/" exact component={Index} />
                <Route path="/stats" exact component={Stats} />
                <Route path="/utils" exact component={Utils} />
                <Route path="/help" exact component={Help} />
              </div>
            </div>
          </div>
        </Routes>
      </TasksProvider>
    </DateProvider>
  );
}

export default App;
