<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="border-b border-default bg-background/80 backdrop-blur sticky top-0 z-50"
    >
      <div class="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-highlighted font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          <UIcon
            name="i-lucide-calendar-days"
            class="size-6 text-primary"
          />
          <span>Calendar-body</span>
        </NuxtLink>
        <AuthLogoutButton />
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
