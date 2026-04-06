<script setup lang="ts">
import type { SigninFormProps } from '../../types'

const props = defineProps<SigninFormProps>()
</script>

<template>
  <UAuthForm
    :title="props.title"
    :description="props.description"
    :icon="props.icon"
    :fields="props.fields"
  />
</template>
