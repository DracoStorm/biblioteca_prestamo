<script lang="ts">
    import { PUT, ADMIN_STUDENT } from "../API/API.json";

    export let cookies: string;

    /*console.log("h");*/
    let register: number;
    let first_name: string;
    let last_name: string;
    let e_mail: string;

    async function handleSubmit() {
        console.log(register, first_name, last_name, e_mail);
        /*console.log("hola");*/
        const promise = await PUT(
            {
                register: register,
                first_name: first_name,
                last_name: last_name,
                e_mail: e_mail,
            },

            ADMIN_STUDENT,
            cookies,
        );
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Registrar Estudiante</h1>

    <label for="first_name">Nombre:</label>
    <input
        type="text"
        id="first_name"
        name="first_name"
        bind:value={first_name}
        required
    />

    <label for="last_name">Apellido:</label>
    <input
        type="text"
        id="last_name"
        name="last_name"
        bind:value={last_name}
        required
    />

    <label for="register">Matrícula:</label>
    <input
        type="text"
        id="register"
        name="register"
        bind:value={register}
        required
    />

    <label for="e_mail">Correo:</label>
    <input
        type="email"
        id="e_mail"
        name="e_mail"
        bind:value={e_mail}
        required
    />

    <div id="btns">
        <button type="submit" id="register-btn">Registrar</button>
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

    #register-btn {
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
