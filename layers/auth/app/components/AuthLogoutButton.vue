<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const isLoading = ref(false)
const errorMessage = ref<string | null>(null)

async function onLogout(): Promise<void> {
  errorMessage.value = null
  isLoading.value = true

  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      errorMessage.value = error.message
      return
    }

    await navigateTo('/sign-in')
  } catch (error: unknown) {
    errorMessage.value = error instanceof Error
      ? error.message
      : 'Unable to sign out. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div
    v-if="user"
    class="flex items-center gap-2"
  >
    <UButton
      icon="i-lucide-log-out"
      color="neutral"
      variant="ghost"
      :loading="isLoading"
      @click="onLogout"
    >
      Logout
    </UButton>
    <p
      v-if="errorMessage"
      class="text-xs text-error"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
