<script setup lang="ts">
import type { PageCardProps } from '../../types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<PageCardProps>()
</script>

<template>
  <UPageCard :class="props.cardClass">
    <slot />
  </UPageCard>
</template>
