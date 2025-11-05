# Nuxie UI

> Nuxie UI is a component library built on top of shadcn/ui to make it easier to build web based paywalls.

## Contents

This repo is a Turborepo monorepo that ships the Nuxie UI components, examples, and supporting apps.

- `apps/docs`: Next.js documentation site that showcases every component and example.
- `apps/web`: Playground Next.js app for quickly trying components in isolation.
- `packages/ui`: Core component library (`@nuxie/ui`) that wraps shadcn/ui primitives and exports paywall-specific building blocks.
- `packages/examples`: Example compositions (`@nuxie/examples`) used by docs and sandboxes.
- `packages/eslint-config`: Centralized ESLint presets shared across the monorepo.
- `packages/typescript-config`: Shared TypeScript configuration used by every package and app.

All code is written in TypeScript and styled with Tailwind via shadcn/ui.

## Getting Started

```bash
bun install
```

### Run everything

```bash
bun run dev
```

This uses Turborepo to start both Next.js apps with shared caching.

### Focused development

```bash
# Docs site (served publicly at https://ui.nuxie.io)
bun run dev --filter=docs

# Playground app
bun run dev --filter=web

# Component library type checks
bun run check-types --filter=@nuxie/ui
```

### Build & Lint

```bash
# Build all apps and packages
bun run build

# Lint using shared config
bun run lint
```

## Registry & Distribution

- The `@nuxie/ui` package mirrors ai-elements’ structure so components can be distributed through a shadcn-compatible registry hosted at `ui.nuxie.io`.
- `packages/examples` exports ready-to-use snippets that the docs site imports dynamically, keeping previews and install snippets in sync.
- Future releases will expose a CLI installer that proxies to the hosted registry for quick paywall scaffolding.

## Contributing

1. Fork & clone the repo.
2. Create a branch for your change.
3. Install dependencies with `bun install`.
4. Run `bun run lint` and `bun run check-types`.
5. Submit a PR describing the component or example you’ve added.

## License

MIT © Nuxie UI
