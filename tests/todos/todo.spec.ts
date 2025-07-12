import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  //create new
  await page.getByTestId('text-input').fill('task 1');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await expect(page.getByTestId('todo-item-label')).toContainText('task 1');

  //edit 
  await page.getByTestId('todo-item-label').dblclick();
  await page.getByTestId('todo-item').getByTestId('text-input').fill('task 1 edited');
  await page.getByTestId('todo-item').getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-item-label')).toContainText('task 1 edited');
});