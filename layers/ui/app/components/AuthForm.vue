<script setup lang="ts">
import type { AuthFormProps, FormSubmitEventType } from '../../types'

const props = defineProps<AuthFormProps>()
const emit = defineEmits<{
  <T>(e: 'submit', payload: FormSubmitEventType<T>): void
}>()

function onSubmit<T>(payload: FormSubmitEventType<T>): void {
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
    :schema="props.schema"
    @submit="onSubmit"
  />
</template>
