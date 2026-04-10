import type * as z from 'zod/mini'
import type { signinValidationSchema, signupValidationSchema } from './validationSchemas'

export type SignupValidationModel = z.output<typeof signupValidationSchema>

export type SigninValidationModel = z.output<typeof signinValidationSchema>
