<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let register: number;
    export let first_name: string;
    export let last_name: string;
    export let e_mail: string;

    const dispatch = createEventDispatcher();

    function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        dispatch('submit', formData);
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Actualizar Estudiante</h1>
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
    button{
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        border: none;
    }
    #btns button:hover {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        background-color: #443659;
    }
</style>
