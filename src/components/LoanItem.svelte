<script lang="ts">
    import { current_id_loan } from "../stores/store";

    export let title: string;
    export let author: string;
    export let category: string;
    export let editorial: string;
    export let devolution_date: string;
    export let renew_tries: number;
    export let id_loan: number;

    function renew_handler() {
        if (renew_tries < 2) {
            current_id_loan.set(id_loan);
            const formData = new FormData() as FormData;
            formData.append("id_loan", $current_id_loan.toString());
            try {
                fetch("http://localhost:4321/student/loan/", {
                    method: "POST",
                    body: formData,
                });
                // recarga la página (necesario para observar los cambios, es lo que funciona)
                location.reload();
            } catch (e) {
                console.error(e);
            }
        }
    }
</script>

<div id="dev_date">{devolution_date}</div>
<div id="main">
    <div id="title" class="text">{title}</div>
    <div id="autor" class="text">{author}</div>
    <div id="category" class="text">{category}</div>
    <div id="editorial" class="text">{editorial}</div>
    <div id="icon">
        <button on:click={renew_handler}>
            {#if renew_tries < 2}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-reload"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"
                    /><path d="M20 4v5h-5" /></svg
                >
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-circle-off"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"
                    /><path d="M3 3l18 18" /></svg
                >
            {/if}
        </button>
    </div>
</div>

<style>
    svg {
        color: var(--accent-2);
        height: 3rem;
        width: 3rem;
    }
    button {
        background: none;
        border: none;
    }
    button:hover {
        transform: scale(1.2);
    }
    #icon {
        display: flex;
        justify-content: center;
        grid-area: icon;
    }
    #dev_date {
        background-color: var(--accent-1);
        width: 7rem;
        font-size: 0.8rem;
        text-align: center;
        font-style: oblique;
        border-radius: 0.3rem;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
        place-self: end;
    }
    #title {
        grid-area: title;
        background-color: var(--secondary);
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }
    #autor {
        grid-area: autor;
    }
    #category {
        background-color: var(--secondary);
        grid-area: category;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }
    #editorial {
        grid-area: editorial;
    }
    .text {
        display: flex;
        padding: 0.4rem;
        padding-inline-start: 1rem;
    }
    #main {
        display: grid;
        align-items: center;
        background-color: #32253f;
        grid-template-columns: 6rem 1fr 2fr 2fr;
        grid-template-rows: 3rem 4rem;
        grid-template-areas: "icon title title category" "icon autor autor editorial";
        font-family: "Arvo", sans-serif;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
        color: var(--accent-2);
        padding: 0.5rem;
    }
    @media screen and (min-width: 1000) {
        #main {
            grid-template-areas: "icon icon" "autor autor" "category editorial" "place place";
        }
    }
</style>
