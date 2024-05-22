<script lang="ts">
    import { DELETE, ADMIN_BOOK } from "../API/API.json";

    export let cokies: string;

    let id: string;

    async function handleSubmit() {
        console.log(`Eliminando libro con ID: ${id}`);
        try {
            const promise = await DELETE({ id: id }, ADMIN_BOOK, cokies);
            if (promise.ok) {
                console.log("Libro eliminado exitosamente");
            } else {
                const errorData = await promise.json();
                console.error("Error al eliminar el libro", errorData);
            }
        } catch (error) {
            console.error("Error en la solicitud de eliminación", error);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Eliminar registro de libro</h1>
    <label for="id">ID del libro</label>
    <input type="text" id="id" name="id" bind:value={id} required />
    <div id="btns">
        <button type="submit" id="delete">Eliminar</button>
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
    #delete {
        background-color: #ff2234;
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
    #btns {
        margin-top: 1rem;
    }
    #btns button:hover {
        background-color: #ca0313;
    }
</style>
