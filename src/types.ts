export interface Task {
  id: number
  name?: string
  status: 'todo' | 'done'
  date: Date
  placeholder?: string
}

export interface StorageTask {
  id: number
  name?: string
  status: 'todo' | 'done'
  date: string
  placeholder?: string
}
