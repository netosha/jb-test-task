import React from 'react'
import { getDateDay } from '../utils'
import { Simulate } from 'react-dom/test-utils'

const DateContext = React.createContext<{
  date: Date
  setDate: (date: Date) => void
}>({
  date: getDateDay(),
  setDate: d => {},
})

export function DateProvider({ children }: any) {
  const loadLocalDate = () => {
    const localDate = window.localStorage.getItem('date')
    if (!localDate) {
      return getDateDay()
    } else {
      console.log(new Date(Number.parseInt(localDate)), localDate)
      return new Date(Number.parseInt(localDate))
    }
  }
  const [date, setDate] = React.useState<Date>(loadLocalDate())

  React.useEffect(() => {
    window.localStorage.setItem('date', String(date.getTime()))
  }, [date])

  React.useEffect(() => {
    const localDate = window.localStorage.getItem('date')
    if (!localDate) {
      window.localStorage.setItem(
        'date',
        JSON.stringify(getDateDay().getTime()),
      )
    } else {
      try {
        const localDate = window.localStorage.getItem('date')
        console.log(localDate)
      } catch (e) {
        console.log('Error while loading local tasks', e)
      }
    }
  }, [])

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDate = () => {
  return React.useContext(DateContext)
}
