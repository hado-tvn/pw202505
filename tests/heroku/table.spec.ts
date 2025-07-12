import { test, expect } from '@playwright/test';
type Person = {
    lastName: string;
    firstName: string;
    due: number|string;
}

const persons: Person[] = [];

test.beforeEach(async ({page})=>{
 await page.goto("/tables");
    const table1 = page.locator("table#table1");
    const rows = table1.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const cells = row.locator("td");
        const lastName = await cells.nth(0).textContent() ?? '';
        const firstName = await cells.nth(1).textContent() ?? '';
        const dueRaw = await cells.nth(3).textContent() ?? '';
        persons.push({
            lastName,
            firstName,
            due: dueRaw
        });
    }
    
    persons.forEach(person => {
        if (typeof person.due === 'string') {
            person.due = parseFloat(person.due.replace('$', ''));
        }
    });
})

test("verify max due person is Jason Doe", () => {
    const maxDueValue = Math.max(...persons.map(person => Number(person.due)));
    const maxDueListPerson = persons
        .filter(person => Number(person.due) === maxDueValue)
        .map(person => `${person.firstName} ${person.lastName}`);

    expect(maxDueListPerson).toEqual(["Jason Doe"]); 
});

test("verify min due person are John Smith and Tim Conway", () => {
    const minDueValue = Math.min(...persons.map(person => Number(person.due)));
    const minDueListPerson = persons
    .filter(person => Number(person.due) === minDueValue)
    .map(person => `${person.firstName} ${person.lastName}`);
   
    expect(minDueListPerson).toEqual(["John Smith", "Tim Conway"]); 
})