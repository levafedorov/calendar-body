<script setup lang="ts">
import type { AuthFormField, AuthProvider, FormSubmitEventType } from '#layers/ui/types'
import type { SigninValidationModel } from '../../shared/validationModels'
import { signinValidationSchema } from '../../shared/validationSchemas'

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

const providers: AuthProvider[] = [
  {
    label: 'Continue with Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'outline'
  }
]

function onSubmit(payload: FormSubmitEventType<SigninValidationModel>): void {
  const { data } = payload
  console.log(data)
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <PageCard card-class="w-full max-w-md">
      <AuthForm
        title="Sign in"
        description="Enter your credentials to continue."
        icon="i-lucide-log-in"
        :fields="fields"
        :providers="providers"
        :schema="signinValidationSchema"
        @submit="onSubmit"
      />
    </PageCard>
  </main>
</template>
