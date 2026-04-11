<script setup lang="ts">
import type { AuthFormField, AuthProvider, FormSubmitEventType } from '#layers/ui/types'
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

const providers: AuthProvider[] = [
  {
    label: 'Continue with Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'outline'
  }
]

const serverError = ref<string | null>(null)

async function onSubmit(payload: FormSubmitEventType<SignupValidationModel>): Promise<void> {
  serverError.value = null
  const { data } = payload
  try {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password
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
    <PageCard card-class="w-full max-w-md">
      <AuthForm
        title="Sign up"
        description="Create your account."
        icon="i-lucide-user-plus"
        :fields="fields"
        :providers="providers"
        :schema="signupValidationSchema"
        @submit="onSubmit"
      >
        <template #error>
          <p
            v-if="serverError"
            class="text-sm text-error"
          >
            {{ serverError }}
          </p>
        </template>
      </AuthForm>
    </PageCard>
  </main>
</template>
