<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { POST, ADMIN_STUDENT } from '../API/API.json';
    import { NotFoundError, UnexpectedError } from '../API/Error';
    import type { Student } from '../types/api';

    let register = '';
    let first_name = '';
    let last_name = '';
    let e_mail = '';
    let error = '';

    const dispatch = createEventDispatcher();

    async function handleSubmit(event: Event) {
        event.preventDefault();

        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                error = 'Error de autenticación';
                return;
            }

            const studentData = { register, first_name, last_name, e_mail };
            const response = await POST(studentData, ADMIN_STUDENT, token);
            const data = await response.json();

            if (response.ok && data.success) {
                dispatch('studentCreated', { student: data.student });
                resetForm();
            } else {
                error = data.message || 'Error al crear estudiante';
            }
        } catch (err) {
            if (err instanceof NotFoundError) {
                error = 'Estudiante no encontrado';
            } else if (err instanceof UnexpectedError) {
                error = 'Error inesperado';
            } else {
                console.error(err);
                error = 'Error de conexión';
            }
        }
    }

    function resetForm() {
        register = '';
        first_name = '';
        last_name = '';
        e_mail = '';
        error = '';
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Registrar Estudiante</h1>
    
    <label for="first_name">Nombre:</label>
    <input type="text" id="first_name" bind:value={first_name} required />
    
    <label for="last_name">Apellido:</label>
    <input type="text" id="last_name" bind:value={last_name} required />
    
    <label for="register">Matrícula:</label>
    <input type="text" id="register" bind:value={register} required />
    
    <label for="e_mail">Correo:</label>
    <input type="email" id="e_mail" bind:value={e_mail} required />
    
    <div id="btns">
        <button type="submit" id="register-btn">Registrar</button>
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
    #register-btn {
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
