import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxesPage } from '../pages/checkbox.page';

type HerokuFixtures = {
    loginPage: LoginPage;
    checkboxesPage: CheckboxesPage;
}

export const test = base.extend<HerokuFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
});

export { expect } from '@playwright/test';