export interface Task {
  id: number
  name: string
  status: 'todo' | 'done'
  date: Date
}
