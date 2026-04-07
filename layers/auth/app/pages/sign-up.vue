<script setup lang="ts">
import type { AuthFormField, AuthProvider } from '#layers/ui/types'

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

const providers: AuthProvider[] = [
  {
    label: 'Continue with Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'outline'
  }
]

interface SignupFormModel {
  name: string
  email: string
  password: string
}

function handleSubmit(payload: { data: SignupFormModel }): void {
  console.log(payload)
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <PageCard card-class="w-full max-w-md">
      <AuthForm
        title="Sign up"
        description="Create your account."
        icon="i-lucide-user-plus"
        :fields="fields"
        :providers="providers"
        @submit="handleSubmit"
      />
    </PageCard>
  </main>
</template>
