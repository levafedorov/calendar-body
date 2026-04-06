import type { AuthFormField as AuthFormFieldType } from '@nuxt/ui'

export type AuthFormField = AuthFormFieldType

export interface SigninFormProps {
  title: string
  description: string
  icon: string
  fields: AuthFormField[]
}

export interface SignupFormProps {
  title: string
  description: string
  icon: string
  fields: AuthFormField[]
}

export interface PageCardProps {
  cardClass: string
}
