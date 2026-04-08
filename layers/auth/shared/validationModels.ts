import type * as z from 'zod/mini'
import type { signupValidationSchema } from './validationSchemas'

export type SignupValidationModel = z.output<typeof signupValidationSchema>
