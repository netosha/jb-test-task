export const getDateDay = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export const offsetFromCurrentDay = (offset: number) => {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + offset,
  )
}
