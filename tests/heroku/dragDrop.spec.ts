import {test, expect} from '@playwright/test';
test('drag and drop', async ({page}) => {
    await page.goto("/drag_and_drop");

    const source = page.locator('#column-a');
    const target = page.locator('#column-b');
    
    // Verify the text by default
    await expect(source).toHaveText('A');
    await expect(target).toHaveText('B');
    
    // Drag and drop using the mouse
    await source.dragTo(target);

    // Verify the text has changed
    await expect(source).toHaveText('B');
    await expect(target).toHaveText('A');
});