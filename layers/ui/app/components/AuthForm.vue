<script setup lang="ts">
import type { AuthFormProps } from '../../types'

const props = defineProps<AuthFormProps>()
const emit = defineEmits<{
  <T>(e: 'submit', payload: { data: T }): void
}>()

function handleSubmit<T>(payload: { data: T }): void {
  emit('submit', payload)
}
</script>

<template>
  <UAuthForm
    :title="props.title"
    :description="props.description"
    :icon="props.icon"
    :fields="props.fields"
    :providers="props.providers"
    @submit="handleSubmit"
  />
</template>
