<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id: number;

    const dispatch = createEventDispatcher();

    function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        dispatch("submit", formData);
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Buscar Préstamo</h1>
    <label for="id">ID</label>
    <input type="text" name="id" bind:value={id} required />
    <div id="btns">
        <button type="submit" id="consultar">Consultar</button>
    </div>
</form>

<style>
    @media (width <= 1000px) {
        form {
            width: 80%;
        }
    }

    @media (width > 1000px) {
        form {
            width: 30%;
        }
    }
    form {
        position: absolute;
        top: 25%;
        left: 30%;
        width: 40%;
        height: 40%;
        padding: 4rem 1rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        text-align: center;
    }
    #btns {
        margin-top: 1rem;
        box-shadow: 0.5rem 0.5rem 2rem #0004;
    }
    #consultar {
        width: 9rem;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
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

    h1 {
        text-align: center;
    }
    button {
        margin-top: 1rem;
        /* background-color: #8c618c; */
    }
    button:hover {
        background-color: var(--accent-1);
    }
</style>
