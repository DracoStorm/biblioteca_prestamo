<script lang="ts">
    import { POST, ADMIN_STUDENT_LOAN } from "../API/API.json";
    import SearchBox from "./SearchBox.svelte";
    import LoanItem from "./LoanItem.svelte";
    import type { Loan, StudentLoans } from "../types/api";

    export let cookies: string;
    let register: number;
    let loans: Loan[] | undefined = undefined;

    async function handleSubmit() {
        const request = await POST(
            { register: register },
            ADMIN_STUDENT_LOAN,
            cookies,
        );
        if (!request.ok && request.status != 404) {
            alert("Error");
            loans = undefined;
        } else if (!request.ok) {
            loans = undefined;
        } else {
            const json = await request.json();
            const sl = (await json) as StudentLoans;
            loans = sl.loans;
        }
    }
</script>

<SearchBox>
    <form on:submit|preventDefault={handleSubmit}>
        <h1>Buscar Préstamo</h1>
        <label for="id">ID</label>
        <input type="text" name="id" bind:value={register} required />
        <div id="btns">
            <button type="submit" id="consultar">Consultar</button>
        </div>
    </form>
    {#if loans != undefined}
        {#each loans as loan}
            <LoanItem
                id_loan={loan.id}
                title={loan.book.title}
                author={loan.book.author}
                editorial={loan.book.editorial.name}
                category={loan.book.category.name}
                renew_tries={loan.renew_tries}
                devolution_date={loan.devolution_date.toString()}
                id
            />
        {/each}
    {/if}
</SearchBox>

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
        margin: auto;
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
