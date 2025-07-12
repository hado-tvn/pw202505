import {test, expect} from '@playwright/test';

// import {test, expect} from '@playwright/test';

test('handle random advertisement popup', async ({page}) => {
    await page.goto('/entry_ad');
    
    // Wait for the modal to appear and verify it's visible
    await page.waitForSelector('.modal-title', { state: 'visible' });
    await expect(page.getByRole('heading', { name: 'THIS IS A MODAL WINDOW' })).toBeVisible();
    
    // Close the modal manually
    await page.getByText('Close', { exact: true }).click();
    
    // Verify the "click here" link is visible after closing modal
    await expect(page.getByRole('link', { name: 'click here' })).toBeVisible();
});
// test("Verify close modal", async ({ page }) => {
//         // Navigate to the entry ad page
//         await page.goto('/entry_ad');
//         // Wait for the entry ad to be visible
//         await page.waitForSelector('#modal', { state: 'visible' });
//         await expect(page.getByText('It\'s commonly used to')).toBeVisible();
//         // Click on close button to dismiss the ad
//         await page.getByText('Close', { exact: true }).click();
//         await expect(page.locator('#modal')).not.toBeVisible();
//         await expect(page.getByText('It\'s commonly used to')).not.toBeVisible();
//     });
