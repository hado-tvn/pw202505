import { test as setup, expect } from '@playwright/test';
// arrage test data 
type BookingFixture = {
    token: string | null;
    bookingId?: number;
};

export const test = setup.extend<BookingFixture>({
    token: async ({ request }, use) => {
        const response = await request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                username: 'admin',
                password: 'password123'
            }
        });

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.token).toBeDefined();

        await use(responseBody.token);
    },
    bookingId: async ({ request }, use) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        // Assuming we take the first booking id for testing
        const bookingId = responseBody[0]?.bookingid;
        expect(bookingId).toBeDefined();

        await use(bookingId);
    }
});

export { expect } from '@playwright/test';