# Rea Contributing Guide

Hi! We're Really excited that you are interested in contributing to Rea. Before submitting your contribution, please make sure to take a moment and Read through the following guidelines:

- [Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct/)

## Pull Request Guidelines

### Commit Message Header

Messages must be matched by the following regex:

```txt
/^(revert: )?(feat|fix|blog|style|refactor|perf|test|workflow|build|ci|chore|types)(\(.+\))?: .{1,50}/
```

## Development Setup

You will need [pnpm](https://pnpm.io)

```bash
npm install -g pnpm
```

After cloning the repo, run:

```bash
pnpm install
```

### Setup Dev Environment

The easiest way to start testing out Rea is to tweak the Rea blog. You may run `pnpm dev` to boot up Rea blog site locally, with live reloading of the source code.

```bash
pnpm dev
```

After executing the above command, visit http://localhost:5173 and try modifying the source code. You'll get live update.

Note that `/feed.xml` and `/sitemap.xml` are only visible after the build is complete, please confirm at http://localhost:8080 after using the following commands.

```bash
pnpm build && pnpm preview
```
