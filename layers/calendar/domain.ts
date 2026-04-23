export interface Calendar {
  userId: string
  id: string
  createdAt: Date
}

export interface CalendarEvent {
  id: string
  calendarId: string
  title: string
  description: string
  start: string
  end: string
}
