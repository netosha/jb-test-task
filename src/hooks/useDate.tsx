import React from 'react'
import { getDateDay } from '../utils'

const DateContext = React.createContext<{
  date: Date
  setDate: (date: Date) => void
}>({
  date: getDateDay(),
  setDate: d => {},
})

export function DateProvider({ children }: any) {
  const [date, setDate] = React.useState<Date>(getDateDay())
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDate = () => {
  return React.useContext(DateContext)
}
