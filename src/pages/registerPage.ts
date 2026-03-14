import { Page, expect } from '@playwright/test';

export class RegisterPage {

  constructor(private page: Page) { }

  signUpNameLocator = "input[data-qa='signup-name']";
  signUpEmailLocator = "input[data-qa='signup-email']";
  signUpButtonLocator = "button[data-qa='signup-button']";
  accountInformationLocator = 'Enter Account Information';
  passwordLocator = "#password";
  firstNameLocator = "#first_name";
  lastNameLocator = "#last_name";
  addressLocator = "#address1";
  countryLocator = "#country";
  stateLocator = "#state";
  cityLocator = "#city";
  zipCodeLocator = "#zipcode";
  mobileNumberLocator = "#mobile_number";
  createAccountBtn = "button[data-qa='create-account']";
  successMessage = "h2[data-qa='account-created']";
  continueBtnLocator = "a[data-qa='continue-button']";

  async validateSignUpPage() {
    await this.page.getByText('Enter Account Information').isVisible();
  }

  async registerUser(name: string, email: string, password: string, firstName: string, lastName: string, address: string, country: string, state: string, city: string, zipCode: string, mobileNumber: string) {
    await this.page.fill(this.signUpNameLocator, name);
    await this.page.fill(this.signUpEmailLocator, email);
    await this.page.click(this.signUpButtonLocator);
    await this.validateSignUpPage();
    await this.page.fill(this.passwordLocator, password);
    await this.page.fill(this.firstNameLocator, firstName);
    await this.page.fill(this.lastNameLocator, lastName);
    await this.page.fill(this.addressLocator, address);
    await this.page.selectOption(this.countryLocator, country);
    await this.page.fill(this.stateLocator, state);
    await this.page.fill(this.cityLocator, city);
    await this.page.fill(this.zipCodeLocator, zipCode);
    await this.page.fill(this.mobileNumberLocator, mobileNumber);
    await this.page.click(this.createAccountBtn);
  }

  async verifySuccessfulRegistration() {
    await expect(this.page.locator(this.successMessage))
      .toHaveText('Account Created!');
    await this.page.click(this.continueBtnLocator);
  }
}