---
name: validation
description: Defines validation architecture for auth and feature layers using shared schemas/models with zod/mini. Use when adding or refactoring form validation, schema composition, or validation model typing.
---

# Validation Skill

## Scope

- Use this skill for validation-related work in feature layers.
- Keep validation logic centralized in shared modules, not route/page files.

## Required Rules

1. Prefer `zod/mini` for schemas.
2. Use `import * as z from 'zod/mini'` unless the user requests another style.
3. Build reusable small validators and compose feature schemas from them.
4. Keep schemas and inferred model types in shared validation modules.
5. Use `z.output<typeof schema>` for model types when schema output typing is needed.
6. Keep pages/components focused on wiring (`schema` passing, submit handling), not validation authoring.
7. Name validation exports with the word `Validation` included, for example: `SignupValidationSchema`, `SignupValidationModel`.

## Refinements and Cross-Field Rules

- Add object-level checks for cross-field constraints when needed.

## Troubleshooting

- If anything about Zod behavior is unclear, use Context7 MCP to read the Zod v4 documentation before implementing changes.

## Output Expectations

- Report:
  - what schema/model files were changed,
  - which reusable validators were introduced or reused,
  - how cross-field rules are enforced.
