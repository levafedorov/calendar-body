---
name: ui-boundery
description: Strategy for the layers/ui layer — when to create custom components vs use Nuxt UI directly.
---

# UX/UI Layer Strategy

## Core Principle

`layers/ui` is the home for the project's **design system** — custom components that add real value on top of Nuxt UI. It is **not** a blanket wrapper layer around every Nuxt UI component.

Nuxt UI components (`UAuthForm`, `UPageCard`, `UButton`, etc.) are used **directly** in feature/page layers. Wrappers are only introduced when they genuinely earn their place.

## When to Add a Component to `layers/ui`

Add a component here **only if at least one of these is true:**

1. **It customises behaviour or appearance** — e.g. an `<AppButton>` that always injects the brand loading spinner, or an `<AppInput>` with the project's validation error style baked in.
2. **It composes multiple primitives** into a reusable pattern specific to this project — e.g. a `<StatCard>` that combines a `UCard`, a `UIcon`, and a trend badge in a consistent layout.
3. **It enforces a project-wide constraint** — e.g. a `<PageLayout>` that always wraps content with the correct max-width and padding tokens.

## When NOT to Add a Component to `layers/ui`

Do **not** create a wrapper if:

- The wrapper just passes props through to a Nuxt UI component with no added logic or style.
- The only purpose is "we might want to swap the UI library later" — that is speculative abstraction.
- The component name and API are identical to the vendor component.

## What Lives in `layers/ui`

- `assets/css/main.css` — theme tokens, Tailwind config, global styles
- `nuxt.config.ts` — `@nuxt/ui` module registration (single source)
- `types.ts` — types for custom components defined in this layer
- `app/components/` — only genuinely custom components (see criteria above)

## What Does NOT Live in `layers/ui`

- Thin pass-through wrappers around Nuxt UI components
- Re-exports of Nuxt UI types (import from `@nuxt/ui` directly in consuming layers)

## Conventions

- **Composition API:** use `<script setup lang="ts">`.
- **Explicit props:** `defineProps<MyCustomProps>()` with types defined in `types.ts`.
- **No implicit forwarding** (`useAttrs()` / `v-bind="$attrs"`) as the primary API surface.
- **Import Nuxt UI types directly** from `@nuxt/ui` where needed — do not re-export them through `types.ts`.

## Implementation Checklist (when adding a new component)

- [ ] The component meets at least one of the "When to Add" criteria above
- [ ] Props type is defined in `layers/ui/types.ts`
- [ ] Component uses `<script setup lang="ts">` with explicit `defineProps`
- [ ] Lint/typecheck passes for touched files
