<script lang="ts">
    import { PUT, ADMIN_STUDENT_LOAN } from "../API/API.json";
    export let cookies: string;
    let id_book: number;
    let register: number;
    async function handleSubmit() {
        const request = await PUT(
            {
                id_book: id_book,
                register: register,
            },
            ADMIN_STUDENT_LOAN,
            cookies,
        );
        if (!request.ok) {
            alert("Hubo un problema con el prestamo");
        } else {
            console.log("Prestamo existosamente registrado");
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Registrar Préstamo</h1>
    <label for="register">Matricula</label>
    <input name="register" id="register" bind:value={register} required />
    <label for="id_book">Libro ID</label>
    <input name="id_book" bind:value={id_book} required />

    <div id="btns">
        <button type="submit" id="submit">Registrar</button>
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-around;
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
        display: flex;
    }

    #submit {
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
