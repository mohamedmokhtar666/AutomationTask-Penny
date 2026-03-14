import { Page } from '@playwright/test';
import { BASE_URL } from "../config/env";

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto(BASE_URL);
  }


}