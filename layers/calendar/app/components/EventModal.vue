<script setup lang="ts">
const { isEventModalOpen } = useCalendarEventModal()
</script>

<template>
  <UModal
    v-model:open="isEventModalOpen"
    title="Modal with close button"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  >
    <template #body>
      <Placeholder class="h-48" />
    </template>
  </UModal>
</template>
