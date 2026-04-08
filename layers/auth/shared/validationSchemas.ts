import * as z from 'zod/mini'

export const emailValidation = z.email().check(z.trim(), z.maxLength(254))

export const passwordValidation = z.string().check(z.minLength(8), z.maxLength(72))

export const confirmPasswordValidation = passwordValidation

export const signupValidationSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
}).check(
  z.refine(data => data.password === data.confirmPassword)
)
