import { Page, expect } from '@playwright/test';

export class HomePage {

      constructor(private page: Page) { }

      registerLink = 'a[href="/login"]';
      loginLink = 'a[href="/login"]';
      logoutLink = 'a[href="/logout"]';

      async clickRegister() {
            await this.page.click(this.registerLink);
      }

      async clickLogin() {
            await this.page.click(this.loginLink);
      }

      async clickLogout() {
            await this.page.click(this.logoutLink);
      }

      async verifyHomePage() {
            await expect(this.page).toHaveURL('https://automationexercise.com/');
      }

}