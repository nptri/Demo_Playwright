import {test, expect} from '@playwright/test'
    test('Get request page 2', async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users?page=2")
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody).toHaveProperty("page");
        expect(responseBody).toHaveProperty("per_page");
        expect(responseBody).toHaveProperty("total");
        expect(responseBody).toHaveProperty("total_pages");
        expect(responseBody).toHaveProperty("support");
        expect(response.status()).toBe(200);
    });
    test('Get request page 3', async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users?page=3")
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody).toHaveProperty("page");
        expect(responseBody).toHaveProperty("per_page");
        expect(responseBody).toHaveProperty("total");
        expect(responseBody).toHaveProperty("total_pages");
        expect(responseBody).toHaveProperty("support");
        expect(response.status()).toBe(200);
    });

// test('Get 404 request', async ({ request }) => {
//     const response = await request.get("https://reqres.in/api/unknown/23")
//     console.log(await response.json());
//     expect(response.ok()).toBeFalsy();
//     expect(response.status()).toBe(404);
// });

// test('Create User request', async ({ request }) => {
//     const body = {
//         data: {
//             "name": "morpheus",
//             "job": "leader"  
//         }
//     }
//     const response = await request.post("https://reqres.in/api/users", body);
//     console.log(await response.json());
//     const responseBody = await response.json()
//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(201);
//     expect(responseBody).toHaveProperty("name", "morpheus");
//     expect(responseBody).toHaveProperty("job", "leader");
//     expect(responseBody).toHaveProperty("id");
//     expect(responseBody).toHaveProperty("createdAt");
// });

// test('Patch User request', async ({ request }) => {
//     const body = {
//         data: {
//             "name": "morpheus",
//             "job": "zion resident"   
//     }};
//     const response = await request.patch("https://reqres.in/api/users/2", body);
//     console.log(await response.json());
//     const responseBody = await response.json();
//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(200);
//     expect(responseBody).toHaveProperty("name", "morpheus");
//     expect(responseBody).toHaveProperty("job", "zion resident");
//     expect(responseBody).toHaveProperty("updatedAt");
// });