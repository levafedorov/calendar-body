<script setup lang="ts">
import type { AuthFormField, ButtonProps, FormSubmitEvent } from '@nuxt/ui'
import type { SignupValidationModel } from '../../shared/validationModels'
import { signupValidationSchema } from '../../shared/validationSchemas'

const supabase = useSupabaseClient()

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
    placeholder: 'Create a password',
    required: true
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm password',
    placeholder: 'Confirm your password',
    required: true
  }
]

const providers: ButtonProps[] = [
  {
    label: 'Continue with Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'outline'
  }
]

const serverError = ref<string | null>(null)

async function onSubmit(payload: FormSubmitEvent<SignupValidationModel>): Promise<void> {
  serverError.value = null
  const { data: formData } = payload
  try {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    })

    if (error) {
      serverError.value = error.message
      return
    }
  } catch (error: unknown) {
    serverError.value = error instanceof Error
      ? error.message
      : 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Sign up"
        description="Create your account."
        icon="i-lucide-user-plus"
        :fields="fields"
        :providers="providers"
        :schema="signupValidationSchema"
        @submit="onSubmit"
      >
        <template
          v-if="serverError"
          #validation
        >
          <p class="text-sm text-error">
            {{ serverError }}
          </p>
        </template>
      </UAuthForm>
    </UPageCard>
  </main>
</template>
