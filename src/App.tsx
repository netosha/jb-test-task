import React from 'react'
import { Route, BrowserRouter as Routes } from 'react-router-dom'
import styles from './styles/App.module.scss'
import Header from './components/Header'
import Index from './pages'
import { DateProvider } from './hooks/useDate'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <div className={styles.inner}>
          <DateProvider>
            <Routes>
              <Route path='/' component={Index} />
            </Routes>
          </DateProvider>
        </div>
      </div>
    </div>
  )
}

export default App
