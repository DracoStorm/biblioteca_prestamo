<script lang="ts">
    function isValidFullName(user: string): boolean {
        return /([A-Z-a-z-áéíóúÁÉÍÓÚñÑ])+(\ {1,})+([A-Z-a-z-áéíóúÁÉÍÓÚñÑ]+)/g.test(
            user,
        );
    }

    function isValidRegister(register: string): boolean {
        return /^(\d{9})$/g.test(register);
    }
    let login = {
        register: "",
        full_name: "",
    };
    function cus() {
        if (
            !isValidRegister(login.register) &&
            !isValidFullName(login.full_name)
        ) {
            alert("Enter a valid value");
        }
    }
</script>

<form on:submit={cus} method="post">
    <div>
        <h1>Bibliotecas BUAP</h1>
        <h2>Iniciar Sesión</h2>
    </div>

    <label for="register">Matrícula</label>
    <input
        type="text"
        bind:value={login.register}
        name="register"
        id="register"
    />
    <label for="full_name">Nombre</label>
    <input
        type="text"
        bind:value={login.full_name}
        name="full-name"
        id="full_name"
    />
    <input id="login" type="submit" value="Iniciar Sesión" />
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
        top: 15%;
        left: 30%;
        width: 40%;
        height: 50%;
        padding: 4rem 1rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }

    h1,
    h2 {
        text-align: center;
    }

    #login {
        background-color: #593954;
        width: 9rem;
        color: #ffffff; /*Botón*/
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
        margin-top: 1rem;
    }

    #register,
    #full_name {
        padding: 0.2rem;
    }

    label {
        font-size: 18px;
    }
    input {
        background-color: #dfd3d38e;
    }
    #login:hover {
        background-color: #443659;
    }
</style>
