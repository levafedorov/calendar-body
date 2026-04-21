<script setup lang="ts">
import type { AuthFormField, ButtonProps, FormSubmitEvent } from '@nuxt/ui'
import type { SigninValidationModel } from '../../shared/validationModels'
import { signinValidationSchema } from '../../shared/validationSchemas'

const router = useRouter()
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
    placeholder: 'Enter your password',
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

async function onSubmit(payload: FormSubmitEvent<SigninValidationModel>): Promise<void> {
  serverError.value = null
  const { data: formData } = payload
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    })

    if (error) {
      serverError.value = error.message
      return
    }

    await router.push('/')
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
        title="Sign in"
        description="Enter your credentials to continue."
        icon="i-lucide-log-in"
        :fields="fields"
        :providers="providers"
        :schema="signinValidationSchema"
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
        <template #footer>
          <p class="text-sm text-center text-muted">
            Don't have an account?
            <ULink
              to="/sign-up"
              class="text-primary font-medium hover:underline"
            >
              Sign up
            </ULink>
          </p>
        </template>
      </UAuthForm>
    </UPageCard>
  </main>
</template>
