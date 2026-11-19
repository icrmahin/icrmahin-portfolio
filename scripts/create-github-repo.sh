#!/usr/bin/env bash
set -euo pipefail

repository="${GITHUB_REPOSITORY:-icrmahin/icrmahin-portfolio}"
description="Portfolio of A. Mahin — independent product builder and product engineer."

if ! command -v gh >/dev/null 2>&1; then
  printf 'GitHub CLI (gh) is required. Install it from https://cli.github.com/\n' >&2
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  printf 'Authenticate first with: gh auth login\n' >&2
  exit 1
fi

if gh repo view "$repository" >/dev/null 2>&1; then
  printf 'Repository already exists: https://github.com/%s\n' "$repository" >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init --initial-branch=main
fi

if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git config user.name "$(git config user.name || printf 'A. Mahin')"
  git config user.email "$(git config user.email || printf 'icrmahin@gmail.com')"
  git add .
  git commit -m "feat: build initial portfolio"
fi

gh repo create "$repository" \
  --public \
  --source . \
  --remote origin \
  --push \
  --description "$description"
