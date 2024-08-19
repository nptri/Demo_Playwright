import {test, expect} from '@playwright/test'
test('Get request', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
    // {
    //     data: {
    //         "firstname": "Jim",
    //         "lastname": "Brown",
    //         "totalprice": 111,
    //         "depositpaid": true,
    //         "bookingdates": {
    //             "checkin": "2023-06-01",
    //             "checkout": "2023-06-15"
    //         },
    //         "additionalneeds": "Breakfast"
    //     }
    // });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("page");
    expect(responseBody).toHaveProperty("per_page");
    expect(responseBody).toHaveProperty("total");
    expect(responseBody).toHaveProperty("total_pages");
});

test('Get 404 request', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/unknown/23")
    console.log(await response.json());
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(404);
});

test('Create User request', async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users",
    {
        data: {
                "name": "morpheus",
                "job": "leader"   
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("name", "morpheus");
    expect(responseBody).toHaveProperty("job", "leader");
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("createdAt");
});

test('Patch User request', async ({ request }) => {
    const response = await request.patch("https://reqres.in/api/users/2",
    {
        data: {
                "name": "morpheus",
                "job": "zion resident"   
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("name", "morpheus");
    expect(responseBody).toHaveProperty("job", "zion resident");
    expect(responseBody).toHaveProperty("updatedAt");
});