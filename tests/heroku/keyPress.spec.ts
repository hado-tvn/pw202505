import {test,expect} from '@playwright/test';

test('key press', async ({page}) => {
    await page.goto('/key_presses');

    // Press the 'A' key
    await page.keyboard.press('Tab');
    
    // Verify the text has changed
    await expect(page.locator('#result')).toHaveText('You entered: TAB');
    
    // Press the 'B' key
    await page.keyboard.press('B');
    
    // Verify the text has changed
    await expect(page.locator('#result')).toHaveText('You entered: B');
});