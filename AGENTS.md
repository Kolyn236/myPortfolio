# Agent Rules for This Repository

These rules apply to all automated agents and coding assistants working in this repository.

## Keep changes small and focused

- Make the smallest change that fully satisfies the request.
- Do not rewrite, regenerate, or reformat the whole project for a minor task.
- Avoid touching unrelated files, code, styles, comments, or configuration.
- Preserve the existing project structure and conventions unless a change is explicitly requested.

## Protect the current stack

- Keep the existing Vite, React, and TypeScript setup.
- Do not replace the framework, build system, package manager, or project architecture without explicit approval.
- Do not add, remove, or upgrade dependencies unless they are required for the requested change.

## Work safely

- Read the relevant files before editing them.
- Prefer targeted edits over broad refactors.
- Preserve existing behavior unless the task requires changing it.
- Do not delete working code merely because an alternative implementation exists.
- Never commit generated folders such as `node_modules` or `dist`.

## Validate changes

- Run the most relevant checks available for the change.
- At minimum, verify that the project builds successfully with:

  ```bash
  npm run build
  ```

- If a check cannot be run, clearly state that in the pull request description.

## Pull request expectations

- Keep each pull request limited to one clear purpose.
- Summarize what changed and why.
- Mention any files or behavior that were intentionally left unchanged.
- Call out risks, assumptions, and checks performed.
