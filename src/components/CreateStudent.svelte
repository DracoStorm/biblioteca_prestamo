<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { POST, ADMIN_STUDENT } from '../API/API.json';

    export let register: number;
    export let first_name: string;
    export let last_name: string;
    export let e_mail: string;

    const dispatch = createEventDispatcher();
    let error: string | null = null;

    interface ApiResponse {
        success: boolean;
        student?: {
            register: number;
            first_name: string;
            last_name: string;
            e_mail: string;
        };
    }

    async function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const studentData = {
            register: formData.get('register')?.toString(),
            first_name: formData.get('first_name')?.toString(),
            last_name: formData.get('last_name')?.toString(),
            e_mail: formData.get('e_mail')?.toString()
        };

        console.log('Student Data:', studentData);

        if (!studentData.register || !studentData.first_name || !studentData.last_name || !studentData.e_mail) {
            error = 'Todos los campos son obligatorios';
            return;
        }

        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
            if (!token) {
                error = 'Token no encontrado';
                return;
            }

            console.log('Token:', token);

            const response = await POST(studentData, ADMIN_STUDENT, token);
            const result: ApiResponse = await response.json();

            console.log('Response:', result);

            if (result.success) {
                dispatch('studentCreated', { student: result.student });
                error = null;
                register = 0;
                first_name = '';
                last_name = '';
                e_mail = '';
            } else {
                error = 'No se pudo crear el estudiante';
            }
        } catch (e) {
            console.error('Error:', e);
            error = 'Error al crear el estudiante';
        }
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Registrar Estudiante</h1>
    <label for="first_name">Nombre</label>
    <input type="text" name="first_name" bind:value={first_name} required />
    <label for="last_name">Apellido</label>
    <input type="text" name="last_name" bind:value={last_name} required />
    <label for="register">Matrícula</label>
    <input type="text" name="register" bind:value={register} required />
    <label for="e_mail">Correo</label>
    <input type="email" name="e_mail" bind:value={e_mail} required />
    <div id="btns">
        <button type="submit" id="register">Registrar</button>
    </div>
    {#if error}
        <p style="color: red;">{error}</p>
    {/if}
</form>

<style>
    form {
        position: absolute;
        top: 25%;
        left: 30%;
        width: 40%;
        height: 40%;
        padding: 4rem 1rem;
        border-radius: 1rem;
        display: flex;
        background-color: #44365997;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        color: #fefefe;
    }

    h1 {
        text-align: center;
    }
    #btns {
        margin-top: 1rem;
        box-shadow: 0.5rem 0.5rem 2rem #0004;
    }
    #register {
        background-color: #8C618C;
        width: 9rem;
        color: #fefefe;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        box-shadow: 0.2rem 0.2rem 1rem #0004;
        margin: auto;
        border-radius: 0.8rem;
        text-align: center;
        text-decoration: none;
    }

    label {
        margin-top: 10px;
    }
    button {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        border: none;
    }
    #btns button:hover {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        background-color: #443659;
    }
</style>
