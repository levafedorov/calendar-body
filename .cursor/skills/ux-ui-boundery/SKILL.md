---
name: ui-boundery
description: General UI boundary standard for keeping vendor UI libraries isolated in layers/ui and exposing local typed wrapper APIs to feature layers.
---

# UX/UI Boundery Skill

## Purpose

Keep a dedicated UI boundary layer between app/domain code and external UI libraries:
- feature/page code passes app-level data
- wrapper components expose local typed APIs
- wrappers map local props to vendor component APIs internally

## Pattern Summary

1. Define shared boundary types in a local types module (for example: `<layer>/types.ts`).
2. In wrapper components, import types from that local module, not directly from the UI library.
3. Use explicit props APIs (`defineProps<...>()`) in wrappers.
4. Map wrapper props directly to vendor component props.
5. Do not rely on fallthrough attrs for high-level wrapper configuration.
6. Feature/page components pass explicit props to wrappers (for example: `title`, `description`, `icon`, `fields`, `containerClass`).

## Required Conventions

- **Boundary ownership:** wrapper prop names and types are owned by the boundary layer.
- **Local types first:** app and wrapper files should import shared types from the layer-local types module.
- **No implicit forwarding:** avoid `useAttrs()` / `v-bind="attrs"` for primary wrapper API.
- **Thin wrappers:** wrappers should stay minimal and mostly map props to vendor UI components.
- **Composition API:** use `<script setup lang="ts">`.

## Non-Negotiable Boundary Rules

1. Non-UI layers consume components from `layers/ui`, not vendor libraries.
2. Wrapper component props and types are owned by the UI boundary and defined locally.
3. Use explicit typed props (`<script setup lang="ts">` + `defineProps`) for primary APIs.
4. Map local wrapper props to vendor component props inside wrappers.
5. Keep wrappers thin, predictable, and easy to swap to another UI library.
6. If a shared type is needed, define or import it from a local UI-layer types module.

## Implementation Workflow

1. Understand the request and identify what belongs in `layers/ui`.
2. Create or update local UI wrapper components and local UI types.
3. Update consuming feature code to import only boundary components and types.
4. Remove or avoid direct vendor imports in non-UI layers.
5. Run lint/type checks on changed files and fix introduced issues.

## Generic Canonical Example

- `FormWrapper` components
  - explicit props like `title`, `description`, `icon`, `fields`
  - internal mapping to a vendor form component

- `CardWrapper` component
  - explicit prop like `containerClass`
  - internal mapping to a vendor card/container component

- feature pages/views
  - pass all form data from page to wrapper
  - do not configure vendor UI components directly in pages

## Implementation Checklist

- [ ] Types added/updated in the boundary layer's shared types module
- [ ] Wrapper imports local types (not direct external UI types unless intentionally re-exported locally)
- [ ] Wrapper has explicit `defineProps` API
- [ ] Wrapper maps props to vendor component explicitly
- [ ] Page passes required wrapper props
- [ ] No direct vendor UI imports exist in non-UI layers
- [ ] Lint/typecheck passes for changed files

## Example Mapping

```vue
<script setup lang="ts">
import type { GenericFormWrapperProps } from '../types'

const props = defineProps<GenericFormWrapperProps>()
</script>

<template>
  <VendorAuthForm
    :title="props.title"
    :description="props.description"
    :icon="props.icon"
    :fields="props.fields"
  />
</template>
```
