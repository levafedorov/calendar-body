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
  startsAt: Date
  endsAt: Date
  createdAt: Date
}
