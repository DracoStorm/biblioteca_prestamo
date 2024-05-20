const API = "http://127.0.0.1:8000/API/";

export const SESION = API + "u/sesion/";
export const CATEGORY = API + "u/category/";
export const EDITORIAL = API + "u/editorial/";
export const STUDENT_LOAN = API + "e/loan/";
export const STUDENT_BOOK = API + "e/book/";
export const ADMIN_BOOK = API + "a/book/";
export const ADMIN_STUDENT = API + "a/student/";
export const ADMIN_STUDENT_LOAN = API + "a/student/loan/";

export async function GET(request: string, cookies?: string | null) {
    if (!cookies) return fetch(request);
    const r = await fetch(request, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": cookies,
        },
    });
    return r.json();
}

export async function POST(params: object, request: string, cookies: string) {
    const response = await fetch(request, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": cookies,
        },
        body: JSON.stringify(params),
    });
    return response;
}

export async function PUT(params: object, request: string, cookies: string) {
    return fetch(request, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": cookies,
        },
        body: JSON.stringify(params),
    });
}

export async function PATCH(params: object, request: string, cookies: string) {
    return fetch(request, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "token": cookies,
        },
        body: JSON.stringify(params),
    });
}

export async function DELETE(params: object, request: string, cookies: string) {
    return fetch(request, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "token": cookies,
        },
        body: JSON.stringify(params),
    });
}
