import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/vvasa|Viswanath|Security/i);
  });

  test('inline nav links are present', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Site sections' });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Work' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Writing' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'SenseGuard' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Contact' })).toHaveCount(0);
    await expect(nav.getByRole('link', { name: 'vvasa33' })).toBeVisible();
  });

  test('section eyebrows are removed', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Section [A-C]/)).toHaveCount(0);
    await expect(page.getByText('Featured Edition')).toHaveCount(0);
    await expect(page.getByText('VOL. 2 - NO. 3')).toHaveCount(0);
  });

  test('sub-routes load', async ({ page }) => {
    await page.goto('/work');
    await expect(page.getByRole('heading', { name: /THE FOUNDER TIMES/i })).toBeVisible();
    await expect(page.getByText('Experience')).toBeVisible();

    await page.goto('/writing');
    await expect(page.getByText('Latest Papers')).toBeVisible();

    await page.goto('/senseguard');
    await expect(page.getByText('SenseGuard, Inc.', { exact: true })).toBeVisible();
    await expect(page.getByText('Stack', { exact: true })).toBeVisible();
    await expect(page.getByText('Related writing')).toBeVisible();
  });

  test('SenseGuard promo band on homepage without stats', async ({ page }) => {
    await page.goto('/');
    const promo = page.getByRole('region', { name: 'SenseGuard' });
    await expect(promo).toBeVisible();
    await expect(promo.getByRole('link', { name: /Full story/i })).toBeVisible();
    await expect(promo.getByRole('link', { name: /Visit/i })).toBeVisible();
    await expect(page.getByText('1,000+')).toHaveCount(0);
    await expect(page.getByText('99.9%')).toHaveCount(0);
  });

  test('featured article shows title not slug metadata', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /How to Vibe Code Production Code/i })).toBeVisible();
    await expect(page.getByText(/^slug:/i)).toHaveCount(0);
    await expect(page.getByText('how-to-vibe-code-production-code')).toHaveCount(0);
    await expect(page.getByText('A Guide to Development in the World of AI!')).toHaveCount(0);
    await expect(page.getByText(/A couple of weeks ago/i)).toBeVisible();
  });
});

test.describe('Mobile homepage', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('nav fits without horizontal overflow', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
    await expect(page.getByRole('navigation', { name: 'Site sections' })).toBeVisible();
  });

  test('shows static latest post on mobile instead of ticker', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/^Latest:/)).toBeVisible();
  });
});
