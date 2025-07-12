import {test, expect} from '@playwright/test';

test('verify nested frames content', async ({page}) => {   
    await page.goto('/nested_frames'); //origin content

    const topFrame = page.frameLocator("[name='frame-top']"); // swtich to top frame

    const leftFrameBody = topFrame?.frameLocator("[name='frame-left']")?.locator('body');
    await expect(leftFrameBody).toHaveText('LEFT');

    const middleFrameBody = topFrame?.frameLocator("[name='frame-middle']")?.locator('body');
    await expect(middleFrameBody).toHaveText('MIDDLE');

    const rightFrameBody = topFrame?.frameLocator("[name='frame-right']")?.locator('body');
    await expect(rightFrameBody).toHaveText('RIGHT');

    const bottomFrameBody = page.frameLocator("[name='frame-bottom']")?.locator('body');
    await expect(bottomFrameBody).toHaveText('BOTTOM');
})