<script setup lang="ts">
import type { AuthFormField } from '#layers/ui/types'

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true
  }
]
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <PageCard card-class="w-full max-w-md">
      <SigninForm
        title="Sign in"
        description="Enter your credentials to continue."
        icon="i-lucide-log-in"
        :fields="fields"
      />
    </PageCard>
  </main>
</template>
