<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import type { CalendarOptions, EventInput } from '@fullcalendar/core'

const externalEventsRef = ref<HTMLElement | null>(null)
const removeAfterDrop = ref(false)
let draggable: Draggable | null = null

const externalEvents = ref([
  { id: '1', title: 'Lunch' },
  { id: '2', title: 'Coffee break' },
  { id: '3', title: 'Team meeting' },
  { id: '4', title: 'Design review' }
])

const today = new Date()
const currentYear = today.getFullYear()
const currentMonth = today.getMonth()

function getDateAt(day: number): string {
  return new Date(currentYear, currentMonth, day).toISOString().slice(0, 10)
}

const initialEvents: EventInput[] = [
  {
    id: 'a',
    title: 'All-day event',
    start: getDateAt(1)
  },
  {
    id: 'b',
    title: 'Timed event',
    start: `${getDateAt(7)}T10:30:00`,
    end: `${getDateAt(7)}T12:30:00`
  }
]

const calendarOptions = reactive<CalendarOptions>({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'dayGridMonth',
  editable: true,
  selectable: true,
  droppable: true,
  events: initialEvents,
  eventReceive: onEventReceive
})

type CalendarEventReceiveArg = Parameters<NonNullable<CalendarOptions['eventReceive']>>[0]

function onEventReceive(info: CalendarEventReceiveArg): void {
  if (removeAfterDrop.value) {
    info.draggedEl.remove()
  }
}

onMounted(() => {
  if (!externalEventsRef.value) {
    return
  }

  draggable = new Draggable(externalEventsRef.value, {
    itemSelector: '.external-event-item',
    eventData(eventElement) {
      const serializedData = eventElement.getAttribute('data-event')
      if (!serializedData) {
        return { title: eventElement.innerText.trim() }
      }

      return JSON.parse(serializedData) as EventInput
    }
  })
})

onBeforeUnmount(() => {
  draggable?.destroy()
  draggable = null
})
</script>

<template>
  <div class="calendar-page grid gap-6 p-6 lg:grid-cols-[280px,1fr]">
    <aside class="space-y-4">
      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">
            Draggable events
          </h2>
        </template>

        <div
          ref="externalEventsRef"
          class="space-y-2"
        >
          <div
            v-for="event in externalEvents"
            :key="event.id"
            class="external-event-item cursor-grab rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary active:cursor-grabbing"
            :data-event="JSON.stringify({ title: event.title })"
          >
            {{ event.title }}
          </div>
        </div>

        <template #footer>
          <UCheckbox
            v-model="removeAfterDrop"
            label="Remove after drop"
          />
        </template>
      </UCard>
    </aside>

    <UCard>
      <FullCalendar :options="calendarOptions" />
    </UCard>
  </div>
</template>
