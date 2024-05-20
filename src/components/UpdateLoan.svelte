<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let id: number;
    export let devolution_date: Date;
    export let renew_tries: number;
    

    const dispatch = createEventDispatcher();

    function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        dispatch('submit', formData);
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Extender Préstamo</h1>
    <label for="id">ID</label>
    <input type="number" name="id" bind:value={id} required />
    <label for="devolution_date">Nueva fecha de devolución</label>
    <input type="date" name="devolution_date" bind:value={devolution_date} required />
    <label for="renew_tries">Número de renovaciones</label>
    <input type="number" name="renew_tries" bind:value={renew_tries} required />

    <div id="btns">
        <button type="submit" id="actualizar">Actualizar</button>
    </div>
</form>

<style>
    form {
        position: absolute;
        top: 15%;
        left: 30%;
        width: 40%;
        height: 55%;
        padding: 4rem 1rem;
        border-radius: 1rem;
        background-color: #44365997;
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        gap: 1rem;
        color: #fefefe;
        align-items: center;
    }

    label, input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 70%;
        margin-left: 80px;
        margin-top: 10px;
        height:20px;
    }
    
    h1 {
        margin-top: .5px;
        text-align: center;
    }
    
    #btns {
        margin: 2rem;
        align-items: center;
        margin-left: 200px;
        
    }

        #actualizar {
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

    button{
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        border: none;
    }

     #btns button:hover {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        background-color: #443659;
    }
</style>