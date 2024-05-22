<script lang="ts">
    let id: number;

    function handleSubmit(event: Event) {
        event.preventDefault();
    }
</script>

<form on:submit={handleSubmit}>
    <h1>Registrar Préstamo</h1>
    <label for="id">Book ID</label>
    <input type="number" name="id" bind:value={id} required />

    <div id="btns">
        <button type="submit" id="register">Registrar</button>
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

        gap: 1rem;
        align-items: center;
    }

    label,
    input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 70%;
        margin-left: 80px;
        margin-top: 10px;
        height: 20px;
    }

    h1 {
        margin-top: 0.5px;
        text-align: center;
    }

    #btns {
        margin: 2rem;
        align-items: center;
        margin-left: 200px;
    }

    #register {
        background-color: #8c618c;
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

    button {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        border: none;
    }

    #btns button:hover {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        background-color: #443659;
    }
</style>
