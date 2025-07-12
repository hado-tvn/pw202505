import {test, expect} from '@playwright/test';

test('hover', async ({page}) => {

    await page.goto("/hovers");
    await page.locator('.figure')
    .nth(0)
    .hover();

    await expect(page.locator('.figcaption').nth(0).locator('h5'))
    .toBeVisible();
    
    await expect(page.getByText('name: user1')).toBeVisible();
});