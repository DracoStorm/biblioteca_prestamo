import { SESION } from "./API.json"

export async function validateSesion(register: string, first_name: string, last_name: string) {
    // Configuration for the fetch request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Id: register,
            "First-name": first_name,
            "Last-name": last_name,
        },
    }
    return fetch(SESION, requestOptions)


}