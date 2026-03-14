import { expect } from '@playwright/test';
import { generateUser } from "../src/utils/fakerData.mjs";
import { HomePage } from '../src/pages/homePage';
import { RegisterPage } from '../src/pages/registerPage';
import { LoginPage } from '../src/pages/loginPage';
import { BASE_URL } from 'src/config/env';
import { test } from './baseTest';
export let homePage: HomePage;
export let registerPage: RegisterPage;

test.describe('Register', () => {
  test('Successful registration for new user', async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);
    const user = generateUser();
    await home.clickRegister();
    await register.registerUser(user.name,user.email,user.password,user.firstName, user.lastName,user.address,user.country,user.state,user.city,user.zipCode,user.mobileNumber);
    await register.verifySuccessfulRegistration();

    // Save user email/password for login tests
    test.info().annotations.push({ type: 'user', description: `${user.email}|${user.password}` });

  });
});