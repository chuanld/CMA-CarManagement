# CLAUDE.md

# Project Goal

This project is built with production-quality standards.

Every implementation should prioritize:

- Maintainability
- Scalability
- Readability
- Security
- Performance
- Testability

Treat every feature as if it will be deployed to real users.

Avoid shortcuts unless they are explicitly marked as temporary.

---

# Language

- Always answer in Vietnamese unless I explicitly request English.
- All code, comments, commit messages, documentation and technical writing must be written in English.

---

# Communication

- Be concise and direct.
- Focus on engineering reasoning.
- Do not repeat obvious information.
- If information is insufficient, ask before implementing.
- Clearly state assumptions when necessary.

---

# Engineering Mindset

Recommend solutions that would be acceptable in a professional software team.

When multiple solutions exist:

- Compare trade-offs.
- Recommend the production-ready solution.
- Explain why it is preferred.

Do not optimize only for implementation speed.

Challenge my assumptions when a better engineering solution exists.

---

# Problem Solving

Before writing code:

1. Understand the requirement.
2. Understand the existing architecture.
3. Explain the design.
4. Identify possible approaches.
5. Compare trade-offs.
6. Recommend the best solution.
7. Implement only after the approach is clear.

Never jump directly into coding.

---

# Architecture

Respect Separation of Concerns.

Keep:

- UI
- Business Logic
- Data Access
- Infrastructure

properly separated.

Before implementing:

- Explain where the code belongs.
- Explain why it belongs there.
- Reuse existing patterns whenever possible.
- Avoid unnecessary abstractions.

If introducing a new pattern or folder structure, explain why.

---

# Code Quality

Write code that another engineer can understand six months later.

Prefer:

- TypeScript
- Strong typing
- Functional programming
- Small functions
- Reusable components
- Clear naming
- Single Responsibility Principle

Avoid:

- any
- duplicated logic
- magic values
- dead code
- large components
- deeply nested conditions
- premature optimization

Prioritize readability over clever code.

---

# React & Next.js

Follow modern React and Next.js best practices.

Prefer:

- Server Components when appropriate
- Client Components only when necessary
- Server Actions when appropriate
- React Hooks correctly
- Composition over prop drilling

Check:

- Hook dependencies
- stale closures
- unnecessary re-renders
- component responsibilities

Only use useMemo/useCallback when there is measurable value.

---

# Database

Design schemas for long-term scalability.

Prefer:

- normalized data
- meaningful relationships
- proper indexes
- clear naming

Avoid schema designs that are difficult to extend.

---

# API Design

Design APIs as if they will be consumed by external clients.

Prefer:

- RESTful conventions
- predictable responses
- proper HTTP status codes
- input validation
- consistent error handling

---

# Security

Always consider:

- Authentication
- Authorization
- Input validation
- XSS
- CSRF
- SQL Injection
- Sensitive data exposure

Highlight potential security risks whenever relevant.

---

# Performance

Avoid premature optimization.

However, identify obvious performance bottlenecks.

When suggesting optimizations:

- Explain why.
- Estimate the benefit.
- Mention trade-offs.

---

# Code Review

Whenever reviewing code, evaluate:

- Correctness
- Readability
- Maintainability
- Scalability
- Architecture consistency
- Performance
- Security
- Edge cases
- Regression risks

Explain why, not only what.

---

# Refactoring

Refactor only when there is a clear benefit.

Before refactoring:

- Explain the problem.
- Explain the benefit.
- Preserve existing behavior.
- Keep diffs as small as possible.

---

# Debugging

Never patch symptoms.

Find the real root cause.

When debugging:

- Trace the execution flow.
- Explain why the issue occurs.
- Explain where the incorrect state is introduced.
- Mention regression risks.
- Mention edge cases.

Distinguish between:

- Symptom
- Trigger
- Root Cause
- Contributing Factors

Never stop at the first plausible explanation.

---

# Testing

Whenever implementing business logic, suggest:

- Unit tests
- Integration tests
- Happy paths
- Edge cases
- Invalid inputs
- Regression cases

Explain why each test matters.

---

# Documentation

Whenever introducing:

- a reusable utility
- a custom hook
- a design pattern
- a shared component
- a new architecture

Briefly explain:

- why it exists
- when it should be used

---

# Technology Choices

Prefer existing framework capabilities before introducing third-party libraries.

Only recommend a new dependency when it provides clear long-term value.

Explain why it is necessary.

---

# Git

Whenever code changes are made, generate:

- Conventional Commit
- PR Description
- Change Summary

Generate RCA only for bug fixes.

---

# Learning

Whenever introducing:

- a new framework feature
- a design pattern
- a library
- an architecture decision

Explain:

- Why it exists
- When to use it
- When not to use it
- Better or simpler alternatives if they exist

Help me understand the engineering decision instead of only providing the implementation.

---

# Working Style

Read before modifying.

Understand the complete data flow before making changes.

If multiple files are involved:

- Explain how they interact.
- Identify the source of truth.
- Avoid isolated assumptions.

Always optimize for long-term maintainability rather than short-term convenience.

Treat every pull request as if it will be reviewed by senior engineers.