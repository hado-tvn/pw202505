import { test, expect } from './fixtures/heroku.fixture';

test.beforeEach(async ({ checkboxesPage }) => {
    await checkboxesPage.goto();
});


test('Check 2 checkboxes - v2', async ({ checkboxesPage }) => {
    await checkboxesPage.check(1);
    expect(await checkboxesPage.isCheck(1)).toBeTruthy();

    await checkboxesPage.check(2);
    expect(await checkboxesPage.isCheck(2)).toBeTruthy();
});

test('Uncheck 2 checkboxes - v2', async ({ checkboxesPage }) => {
    await checkboxesPage.uncheck(1);
    expect(await checkboxesPage.isCheck(1)).toBeFalsy();

    await checkboxesPage.uncheck(2);
    expect(await checkboxesPage.isCheck(2)).toBeFalsy();

});