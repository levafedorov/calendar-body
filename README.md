# Calendar-body

## Description

Calendar application that helps you manage your time and tasks. This is a simple calendar application that allows you to add, edit, and delete events.
This app have AI bot helper body that helps you to find the best time for your events. 

## Technologies

- Nuxt 4
- Tailwind CSS
- TypeScript
- Nuxt i18n
- Nuxt Image
- Nuxt Icon
- vitest
- nuxt-auth-utils
- VueUse
- Nuxt UI
- drizzle-orm
- postgres
- git actions for CI/CD
- ![fullCalendar](https://fullcalendar.io/docs/vue)

## Architecture

![Architecture](./architecture.scheme.drawio)

Architecture is devided into 1 main app and 5 nuxt layers for every feature. You find all the layers in /layers directory.

## Layers

### AUTH layer

AUTH layer is responsible for authentication and authorization.
You find all the files in /layers/auth directory.

### CALENDAR layer

CALENDAR layer is responsible for calendar and events.
You find all the files in /layers/calendar directory.

### AI BOT layer

AI BOT layer is responsible for AI bot and its related functionality.
You find all the files in /layers/ai-bot directory.

### BASE layer

BASE layer is responsible for base functionality and shared functionality.
You find all the files in /layers/base directory.

### UX/UI layer

UX/UI layer is responsible for UI and UX related functionality.
You find all the files in /layers/ui directory.

### USER layer

USER layer is responsible for user related functionality.
You find all the files in /layers/user directory.


## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
