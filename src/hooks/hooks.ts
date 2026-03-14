import { Before, After, Given } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { CustomWorld } from "../../support/world";
import { BASE_URL } from "../config/env";
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";

let browser: Browser;
export let page: Page;

Before(async () => {

  browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  page = await context.newPage();

});

After(async () => {
  await page.close();
  await browser.close();
});



