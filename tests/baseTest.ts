import { test as base } from '@playwright/test';
import { BasePage } from '../src/pages/basePage';

export const test = base;

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.navigateToHome();
});