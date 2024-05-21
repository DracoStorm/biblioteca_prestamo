<script lang="ts">
    import { GET, PATCH, ADMIN_STUDENT } from "../API/API.json";
    
    export let cokies: string;
    let register: number;
    let first_name: string;
    let last_name: string;
    let e_mail: string;

    async function fetchStudentDetails() {
        if (register) {
            try {
                const response = await GET(`${ADMIN_STUDENT}${register}/`, cokies);
                if (response.ok) {
                    const student = await response.json();
                    first_name = student.first_name;
                    last_name = student.last_name;
                    e_mail = student.e_mail;
                } else {
                    console.error("Error fetching student details:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching student details:", error);
            }
        }
    }

    async function handleSubmit() {
        try {
            const response = await PATCH(
                {
                    register,
                    first_name,
                    last_name,
                    e_mail,
                },
                `${ADMIN_STUDENT}${register}/`,
                cokies,
            );
            if (response.ok) {
                console.log("Estudiante actualizado exitosamente");
            } else {
                const errorData = await response.json();
                console.error("Error al actualizar el estudiante:", errorData);
            }
        } catch (error) {
            console.error("Error en la solicitud de actualización", error);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Actualizar Estudiante</h1>
    <label for="register">Matrícula</label>
    <input type="text" id="register" name="register" bind:value={register} on:blur={fetchStudentDetails} required />
    <label for="first_name">Nombre</label>
    <input type="text" id="first_name" name="first_name" bind:value={first_name} required />
    <label for="last_name">Apellido</label>
    <input type="text" id="last_name" name="last_name" bind:value={last_name} required />
    <label for="e_mail">Correo</label>
    <input type="email" id="e_mail" name="e_mail" bind:value={e_mail} required />
    <div id="btns">
        <button type="submit" id="mod">Actualizar</button>
    </div>
</form>

<style>
    form {
        position: absolute;
        top: 20%;
        left: 30%;
        width: 40%;
        height: 50%;
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
    #mod {
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
    button {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        border: none;
    }
    #btns button:hover {
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        background-color: #443659;
    }
</style>
