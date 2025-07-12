import {test, expect} from '@playwright/test';

test('upload a file', async ({page}) => {
    await page.goto('/upload');
    
    const filePath = 'upload-files/demo.txt';
    await page.setInputFiles('input[type="file"]', filePath);
    
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('demo.txt');
});
