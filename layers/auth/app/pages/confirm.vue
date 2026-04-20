<script setup lang="ts">
const route = useRoute()
const email = computed<string | undefined>(() => route.query.email as string | undefined)
const description = computed(() =>
  email.value
    ? `We've sent a confirmation link to ${email.value}. Click the link to activate your account.`
    : 'A confirmation link has been sent to your email. Click the link to activate your account.'
)
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <UPageCard class="w-full max-w-md text-center">
      <div class="flex flex-col items-center gap-6 py-4">
        <UIcon
          name="i-lucide-mail-check"
          class="size-12 text-primary"
        />
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">
            Check your email
          </h2>
          <p class="text-sm text-muted">
            {{ description }}
          </p>
        </div>
        <UButton
          to="/sign-in"
          variant="ghost"
          color="neutral"
          label="Back to sign in"
          icon="i-lucide-arrow-left"
        />
      </div>
    </UPageCard>
  </main>
</template>
