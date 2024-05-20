<script>
    import { createEventDispatcher } from 'svelte';
    import { POST, SESION } from '../../../API/API.js';

    let username = '';
    let password = '';
    let error = '';

    const dispatch = createEventDispatcher();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await POST({ username, password }, SESION);
            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem('adminToken', data.token);
                dispatch('loginSuccess');
            } else {
                error = data.message || 'Error de autenticación';
            }
        } catch (err) {
            console.error(err);
            error = 'Error de conexión';
        }
    }
</script>

<form on:submit={handleSubmit}>
    <label for="username">Usuario:</label>
    <input type="text" id="username" bind:value={username} required />
    
    <label for="password">Contraseña:</label>
    <input type="password" id="password" bind:value={password} required />
    
    <button type="submit">Iniciar Sesión</button>
    {#if error}
        <p style="color: red;">{error}</p>
    {/if}
</form>
