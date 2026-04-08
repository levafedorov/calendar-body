import type {
  AuthFormField as AuthFormFieldType,
  ButtonProps as ButtonPropsType
} from '@nuxt/ui'

export type { FormSubmitEvent as FormSubmitEventType } from '@nuxt/ui'

export type AuthFormField = AuthFormFieldType
export type AuthProvider = ButtonPropsType

export interface AuthFormProps {
  title: string
  description: string
  icon: string
  fields: AuthFormField[]
  providers?: AuthProvider[]
  schema?: unknown
}

export interface PageCardProps {
  cardClass: string
}
