import { Page } from '@playwright/test';

export class CheckboxesPage {
    readonly page: Page;
  
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/checkboxes');
    }
    
    async check(checkboxNumber: number) {
        await this.page.locator('input[type="checkbox"]').nth(checkboxNumber-1).check();
    }
  
    async uncheck(checkboxNumber: number   ) {
        await this.page.locator('input[type="checkbox"]').nth(checkboxNumber-1).uncheck();
    }

    async isCheck(checkboxNumber: number): Promise<boolean> {
        return await this.page.locator('input[type="checkbox"]').nth(checkboxNumber-1).isChecked();
    }
}