<script lang="ts">
    import { current_id_loan } from "../stores/store";
    import BookI from "../components/BookInterative.svelte";
    import type { StudentLoans } from "../types/api";
    export let s_loans: StudentLoans | undefined;
</script>

{#if s_loans != undefined}
    {#each s_loans.loans as loan}
        <BookI
            title={loan.book.title}
            author={loan.book.author}
            editorial={loan.book.editorial.name}
            category={loan.book.category.name}
            renew_tries={loan.renew_tries}
            id_loan={loan.id}
            devolution_date={loan.devolution_date.toString()}
        />
    {/each}
{/if}
