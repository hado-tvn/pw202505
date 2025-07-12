import {test,expect} from '@playwright/test';

test("verify snapshot", async ({page}) => {
    await page.goto("https://todomvc.com/examples/react/dist/")
    await expect(page.getByTestId('header')).toMatchAriaSnapshot(
    `
    - heading \"todos\" [level=1]
    - textbox \"New Todo Input\"
    - text: New Todo Input
    `);
})