# Claude Code prompt: Migrate `rcac-bioinformatics.github.io` into `RCAC-Docs`

## Role and scope

You are executing a documentation migration across two local git repositories on my Debian 13 workstation. You have two authoritative spec files attached to this conversation:

1. **`integration-plan.md`** — the five-phase execution plan. **This is the contract. Follow it exactly.**
2. **`details-about-docs.md`** — reference material describing both repos' structure, syntax, and conventions. Use this as a lookup when converting.

If the two files conflict, `integration-plan.md` wins. If either is unclear, stop and ask me rather than improvise.

## Repos and paths

- Target repo: `/home/arnstrm/svn/RCAC-Docs` (MkDocs/Material; feature branch `feature/life-sciences`).
- Source repo: `/home/arnstrm/svn/rcac-bioinformatics.github.io` (Astro/Starlight; feature branch `feature/redirect-shim`, archive branch `archive/starlight`).

Both are already on `main` with clean trees (I verified). `gh` CLI is authed to both `PurdueRCAC/RCAC-Docs` and `rcac-bioinformatics/rcac-bioinformatics.github.io`.

## What to do

Execute Phases 0 through 5 of `integration-plan.md` in order, without skipping phases or steps. At the end of each phase, print a short summary (files touched, commits added, any issues) before starting the next phase. Do not wait for my confirmation between phases unless a step fails or you hit an ambiguity listed below.

## Operational rules (hard)

1. **No `gh pr create`.** Stop at "pushed branch, PR body drafted in a file." I open the PRs.
2. **No force pushes.** Ever. If you need to undo a commit, amend before push or add a new commit.
3. **No interactive prompts.** Every git/gh command is non-interactive. Every commit has an explicit `-m`.
4. **No edits outside scope.** Do not regenerate the software catalog, touch `modulefiles/`, `tools/`, or `docs/software/apps_md/*.md`. The only permitted edits outside the new `docs/lifesciences/` and `docs/workshops/genomics_exchange/` trees are: `mkdocs.yml` (per §9), the four "See also" cross-link additions in §8, and `docs/software/bioinformatics_catalog.md` (new file).
5. **No `dev` branch.** Never check out, merge to, or push to the `dev` branch on RCAC-Docs.
6. **Commit dates preserved.** Per-page migration commits in Phase 2 set both `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` to the original `lastUpdated` value from the MDX frontmatter (values listed in the plan's §4 table). Scaffolding commits use the current time. Example:

   ```bash
   GIT_AUTHOR_DATE="2026-03-10T12:00:00 -0500" \
   GIT_COMMITTER_DATE="2026-03-10T12:00:00 -0500" \
   git commit -m "feat(lifesciences): migrate publication-quality-plots from Starlight"
   ```

7. **Commit style.** Conventional Commits: `feat(lifesciences):`, `feat(workshops):`, `refactor:`, `fix:`, `docs:`. One logical unit per commit.
8. **Tags vocabulary.** Only the values in §6b of the plan. No improvised tags.
9. **Redirect shim coverage is exact.** Every URL in the plan's §2c table must have a corresponding `public/<old-path>/index.html` file. Don't invent additional redirects; don't skip any.
10. **Encoding and line endings.** UTF-8, LF. No trailing whitespace.

## When to stop and ask

Stop and ask me before proceeding if any of the following occur:

- Pre-flight (Phase 0) fails: dirty tree, missing `gh` auth, missing required Python packages that can't be installed.
- An image or asset file referenced in source MDX does not exist on disk.
- An MDX file contains a Starlight component not covered by the §6 translation rules.
- `mkdocs build --strict` fails after your first round of fixes; do not attempt a second round without asking.
- The redirect shim URL map is incomplete vs. what you find under `src/content/docs/` (e.g., a page exists in source that isn't in §2c).
- Git state diverges from expected at any point (e.g., `feature/life-sciences` already exists remotely with commits).

Do NOT stop to ask for confirmation on routine conversions. Trust the plan.

## Validation

Phase 4 of the plan lists the full check suite. Run all of it. If a check fails, fix the underlying issue, then re-run the full suite from the top. Record the final log.

## Deliverables at the end

After Phase 5, print:

1. Commits-per-phase table.
2. Files changed in RCAC-Docs (count + a few representative paths).
3. Files changed in the Astro repo (count + a few representative paths).
4. Validation results (one line per check from Phase 4).
5. Outstanding TODOs: exactly two `TODO(arun)` markers for sessions 1 and 2 metadata, plus any follow-up issue drafts.
6. The exact `gh pr create` commands I should run when ready to open the PRs. Include `--base main --head feature/life-sciences` / `--head feature/redirect-shim` and point `--body-file` at the drafted PR bodies under `/home/claude/work/`.

## Begin

Start with Phase 0, step 0.1. Print the pre-flight summary before touching any file.
