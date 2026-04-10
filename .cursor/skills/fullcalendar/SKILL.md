---
name: fullcalendar
description: Integrates FullCalendar in this Nuxt/Vue 3 project with TypeScript, local UI wrappers, and calendar-layer composables. Use when adding or refactoring calendar views, FullCalendar options/plugins, event handlers, or FullCalendar-based UI.
---

# FullCalendar Skill

## Scope

- Use this skill when working with FullCalendar in Vue 3, Nuxt, or the calendar layer.
- Treat FullCalendar as an integration detail, not the app's domain model.

## Required Rules

1. For Vue 3, use `@fullcalendar/vue3`, not `@fullcalendar/vue`.
2. Install `@fullcalendar/core`, `@fullcalendar/vue3`, and only the plugins the feature needs.
3. Type calendar configuration with `CalendarOptions` from `@fullcalendar/core`.
4. Pass configuration and callbacks through a single `:options` object. FullCalendar Vue treats options and emitted events as entries on that object.
5. Keep FullCalendar-specific UI inside the UI boundary. Non-UI layers should consume local wrappers from `layers/ui`, not vendor components directly.
6. Keep thick business logic in composables. Components should focus on props, emits, refs, and rendering.
7. Event handler names must start with `on`.

## Vue 3 Usage

- Import the component from `@fullcalendar/vue3`.
- Import plugins explicitly and include them in `calendarOptions.plugins`.
- Render the calendar as `<FullCalendar :options="calendarOptions" />`.
- Put callbacks like `dateClick`, `eventClick`, `select`, `eventDrop`, and `eventResize` on `calendarOptions`.
- Update reactive options by mutating or replacing properties on the options object used by Vue.

## TypeScript Usage

- Import `CalendarOptions` from `@fullcalendar/core`.
- For Vue 3, no special TypeScript setup is needed beyond the normal project TS config.
- Keep FullCalendar types at the integration boundary. Map app/domain models to FullCalendar inputs instead of leaking FullCalendar event shapes through the feature layer.

## Troubleshooting

- If anything about FullCalendar behavior, API shape, plugin setup, callbacks, views, or options is unclear, use Context7 to read the FullCalendar docs at `https://fullcalendar.io/docs` before implementing changes.

## Project Integration Pattern

1. Define or reuse domain types in `layers/calendar`.
2. Build mapping/composable logic that converts domain events into FullCalendar inputs.
3. Put the actual FullCalendar wrapper component in `layers/ui`.
4. Let `layers/calendar/app` pages consume the UI wrapper and calendar-layer composables.
5. If forms or validation are involved, also follow `.cursor/skills/validation/SKILL.md`.
6. If a wrapper or vendor mapping is involved, also follow `.cursor/skills/ux-ui-boundery/SKILL.md`.

## Calendar API Access

- Use a Vue template ref on the FullCalendar component when imperative navigation is needed.
- Call `getApi()` on the component ref to access methods like `next()`, `prev()`, and other Calendar API methods.

## Rendering Customization

- Use Vue slots for FullCalendar content injection such as `eventContent`.
- Keep slot rendering presentational. Move computed state and transformation logic out of the template.

## Nuxt Notes

- Prefer a local UI wrapper component for any FullCalendar usage in pages.
- If SSR/browser behavior becomes a concern, keep browser-dependent rendering isolated in the UI layer and adapt the wrapper there.

## Default Example Pattern

```vue
<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarOptions } from '@fullcalendar/core'

const calendarOptions: CalendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dateClick: (info) => onDateClick(info.dateStr),
}

function onDateClick(dateStr: string) {
  // delegate to app logic
}
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>
```

## Verification

- Check imports use `@fullcalendar/vue3` for Vue 3 work.
- Check options are typed with `CalendarOptions`.
- Check non-UI layers do not import vendor UI components directly.
- Run lint/type checks for changed files after implementation work.
