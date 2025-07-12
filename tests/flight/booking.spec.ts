import {test, expect} from '@playwright/test';
test.skip('verify able select depart date',{tag: "@firefoxOnly"}, async ({page}) => {
    //get cunrenent month and year
    const currentDate = new Date();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentYear = currentDate.getFullYear();
    
    //handle advertisement popup
    await page.addLocatorHandler(
        page
        .locator('#responsive-image-16401899939790')
        .getByRole('link'),
        async () => {
            await page.locator('#close-button-1454703513202')
            .getByText('×').click();
        }
    );

    await page.goto('/vn/vi/home');
    await page.getByRole('button', { name: 'Đồng ý' }).click();
    await page.getByRole('textbox', { name: 'Ngày đi' }).click();
    await page.getByRole('link', { name: 'Một chiều' }).click();
    await page.getByRole('textbox', { name: 'Ngày đi' }).click();
    

    await page.getByRole('table').first().getByRole('link', { name: '23' }).click();
 
    await page.getByRole('button', { name: 'Đóng' }).waitFor({ state: 'hidden' });
        
    await expect(page.getByRole('textbox', { name: 'Ngày đi' })).toHaveValue(`23/${currentMonth}/${currentYear}`); 
});