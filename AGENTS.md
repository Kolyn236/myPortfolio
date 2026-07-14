# Agent rules for this repository

This repository contains a personal portfolio website built with Vite, React, and TypeScript. The main purpose of these rules is to prevent broad project rewrites when a request only requires a small change.

## Core rules

- Make minimal, targeted changes that directly satisfy the request.
- Do not rewrite or regenerate the whole project to implement a minor adjustment.
- Do not change the technology stack, build tools, package manager, architecture, or dependencies without an explicit request.
- Do not modify deployment configuration, hosting settings, GitHub Actions, or other CI/CD files without an explicit request.
- Do not perform broad refactoring, file moves, renaming, or cleanup unless it is necessary for the requested change.
- Do not reformat unrelated code or files.
- Preserve existing behavior and project conventions unless the request explicitly requires changing them.

## Planning before changes

Before making a non-trivial change, first describe:

- the goal of the change;
- the files planned for modification;
- the files, systems, and behavior that will not be touched;
- the checks that will be used to verify the result.

If the requested change is small, the implementation should also remain small and focused.

## Quality gates

- Read the relevant files and consider the likely consequences before editing.
- When practical, verify that the project still builds successfully with `npm run build`.
- Run other focused checks that are relevant to the changed area when available.
- Do not make changes blindly without checking their effect on existing behavior, configuration, and build output.
- If a relevant check cannot be run, clearly state that limitation and the reason.
