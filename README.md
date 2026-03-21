# Helo

An [OpenCode](https://opencode.ai) plugin that enhances OpenCode CLI sessions with additional capabilities.

## Prerequisites

- [Bun](https://bun.sh) (runtime and package manager)
- [Lefthook](https://github.com/evilmartians/lefthook) (`brew install lefthook`)

## Setup

```bash
bun install
lefthook install
```

## Verify

```bash
bun run typecheck    # TypeScript strict mode check
bun run lint         # Biome linter
bun test             # Run all tests
```

## Development

```bash
bun test --watch              # Watch mode for TDD
bun test --coverage           # Coverage report
bun test --filter "pattern"   # Run matching tests
bun run check                 # Lint + format with auto-fix
```

## Adding a Feature

1. Create `src/features/<name>/index.ts`
2. Export a `register*` function that takes `PluginCtx` and returns `FeatureHooks`
3. Add it to the `features` array in `src/index.ts`
4. Add tests mirroring the `src/` structure under `tests/`

## License

MIT
