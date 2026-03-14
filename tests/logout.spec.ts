import { expect, Page } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { LoginPage } from '../src/pages/loginPage';
import { staticUsers } from '../src/utils/testData';
import { test } from './baseTest'; 

let home: HomePage;
let login: LoginPage;

test.describe('Logout Tests', () => {
    test('Successful logout for logged in user', async ({ page }) => {
        home = new HomePage(page);
        login = new LoginPage(page);
        const user = staticUsers.validUser;
        await home.clickLogin();
        await login.login(user.email, user.password);
        await login.verifyLoginSuccess();
        await login.logout();
        await login.verifyLogout();
    });
});
