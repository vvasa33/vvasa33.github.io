# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> navigation links are present
- Location: tests\e2e\home.spec.ts:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('homepage loads', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page).toHaveTitle(/vvasa/i);
  6  | });
  7  | 
  8  | test('navigation links are present', async ({ page }) => {
> 9  |   await page.goto('/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  10 |   await expect(page.locator('nav')).toBeVisible();
  11 | });
  12 | 
```