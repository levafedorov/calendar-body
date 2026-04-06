<script setup lang="ts">
import type { SignupFormProps } from '../../types'

const props = defineProps<SignupFormProps>()
</script>

<template>
  <UAuthForm
    :title="props.title"
    :description="props.description"
    :icon="props.icon"
    :fields="props.fields"
  />
</template>
