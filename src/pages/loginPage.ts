import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) { }

  emailAdress = "input[data-qa='login-email']";
  password = "input[data-qa='login-password']";
  loginBtn = "button[data-qa='login-button']";
  logoutLink = 'a[href="/logout"]';

  async login(email: string, password: string) {
    await this.page.fill(this.emailAdress, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.logoutLink)).toBeVisible();
  }

  async verifyLoginFailure(description: string) {
    await this.page.getByText('Your email or password is incorrect!').isVisible();
  }
  async logout() {
    await this.page.click(this.logoutLink);
  }

  async verifyLogout() {
    await expect(this.page.locator(this.loginBtn)).toBeVisible();
  }
}