import { expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { LoginPage } from '../src/pages/loginPage';
import { staticUsers } from '../src/utils/testData';
import { test } from './baseTest';
let home: HomePage;
let login: LoginPage;

test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    login = new LoginPage(page);
});

test.describe('Login Tests', () => {
    test('Successful login for exist user', async () => {
        const user = staticUsers.validUser;
        await home.clickLogin();
        await login.login(user.email, user.password);
        await login.verifyLoginSuccess();
        await login.logout();
    });

    for (const invalid of staticUsers.invalidUsers) {
        test(`UnSuccessful login for invalid users- ${invalid.description}`, async () => {
            await home.clickLogin();
            await login.login(invalid.email, invalid.password);
            await login.verifyLoginFailure(invalid.description);
        });
    }
});

