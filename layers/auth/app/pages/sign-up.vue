<script setup lang="ts">
import type { AuthFormField } from '#layers/ui/types'

const fields: AuthFormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true
  },
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
    placeholder: 'Create a password',
    required: true
  }
]
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <PageCard card-class="w-full max-w-md">
      <SignupForm
        title="Sign up"
        description="Create your account."
        icon="i-lucide-user-plus"
        :fields="fields"
      />
    </PageCard>
  </main>
</template>
