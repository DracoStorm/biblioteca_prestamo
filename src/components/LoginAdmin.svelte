<script>
    import { onMount } from 'svelte';
    import { POST } from '../../API/API.json';

    let email = '';
    let password = '';
    let error = '';

    async function login() {
        try {
            const response = await POST('/login/admin', { email, password });
            if (response.token) {
                document.cookie = `token=${response.token}; path=/`;
                window.location.href = '/admin/dashboard';
            } else {
                error = 'Login failed';
            }
        } catch (e) {
            error = 'Login error';
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
    {#if error}
        <p style="color: red;">{error}</p>
    {/if}
</form>
