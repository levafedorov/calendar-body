<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import type { CalendarOptions, EventInput } from '@fullcalendar/core'



const removeAfterDrop = ref(false)

const events = reactive<EventInput[]>([{
  id: 'a',
  title: 'All-day event',
  start: '2026-04-23T10:00:00',
  end: '2026-04-23T18:00:00',
  description: 'This is a description of the event'
}])

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'timeGridWeek',
  editable: true,
  selectable: true,
  droppable: true,
  events,
  eventReceive: onEventReceive
}

type CalendarEventReceiveArg = Parameters<NonNullable<CalendarOptions['eventReceive']>>[0]

function onEventReceive(info: CalendarEventReceiveArg): void {
  if (removeAfterDrop.value) {
    info.draggedEl.remove()
  }
}
</script>

<template>
  <div class="calendar-page grid gap-6 p-6 lg:grid-cols-[280px,1fr]">
    <UCard>
      <FullCalendar :options="calendarOptions" />
    </UCard>
    <EventModal />
  </div>
</template>
