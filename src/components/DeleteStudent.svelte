<script lang="ts">
    import { DELETE, ADMIN_STUDENT } from "../API/API.json";
    export let cookies: string;
    let register: string;

    async function handleSubmit() {
        console.log(`Eliminando estudiante con matrícula: ${register}`);
        try {
            const promise = await DELETE(
                { register: register },
                ADMIN_STUDENT,
                cookies,
            );
            if (promise.ok) {
                console.log("Estudiante eliminado exitosamente");
            } else {
                const errorData = await promise.json();
                console.error("Error al eliminar el estudiante", errorData);
            }
        } catch (error) {
            console.error("Error en la solicitud de eliminación", error);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Eliminar registro del Estudiante</h1>
    <label for="register_p">Matrícula</label>
    <input
        type="text"
        name="register"
        id="register_p"
        bind:value={register}
        required
    />
    <div id="btns">
        <button type="submit" id="register">Eliminar</button>
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
    #register {
        background-color: #ae232f;
        width: 9rem;
        color: #fefefe;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        box-shadow: 0.2rem 0.2rem 1rem #464444;
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
    #btns {
        margin-top: 1rem;
    }
    #btns button:hover {
        background-color: #d71324;
    }
</style>
