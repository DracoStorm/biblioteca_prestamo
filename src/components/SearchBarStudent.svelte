<script lang="ts">
    import { current_filter } from "../stores/store";
    import { POST, STUDENT_BOOK } from "../API/API.json";
    import { NotFoundError, UnexpectedError } from "../API/Error";
    import type { Book } from "../types/api";
    import Filter from "./FilterItem.svelte";
    import SearchBox from "./SearchBox.svelte";
    import BookItem from "./BookItem.svelte";

    export let cokies: string;
    let books: Book[] | undefined = undefined;
    let itemSearch: string;
    current_filter.set("Título");

    async function send(filter: string) {
        const resp = await POST(
            {
                [filter]: itemSearch,
            },
            STUDENT_BOOK,
            cokies,
        );
        if (!resp.ok) {
            if (resp.status == 404) {
                throw new NotFoundError("Not Found Err");
            }
            throw new UnexpectedError("Unexpected Err");
        }
        return (await resp.json()) as Book[];
    }

    async function handleInput() {
        try {
            const books_p = send($current_filter);
            books = await books_p;
            // recarga la página (necesario para observar los cambios, es lo que funciona)
        } catch (error) {
            if (error instanceof NotFoundError) {
                books = undefined;
            } else if (error instanceof UnexpectedError) {
                alert("Error inesperado");
                books = undefined;
            } else {
                console.log(error);
            }
        }
    }
</script>

<form id="search" on:submit|preventDefault={handleInput}>
    <div id="search-container">
        <label for="search-box"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fefefe"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
            </svg></label
        >
        <input
            id="search-box"
            type="text"
            name="search"
            bind:value={itemSearch}
        />
    </div>
    <div id="search-filter">
        <Filter filter="Título" />
        <Filter filter="Autor" />
        <Filter filter="Categoría" />
        <Filter filter="Editorial" />
    </div>
</form>

<SearchBox>
    {#if books != undefined}
        {#each books as book}
            <BookItem
                id={undefined}
                title={book.title}
                autor={book.author}
                editorial={book.editorial.name}
                category={book.category.name}
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
            width: 40%;
        }
    }

    form {
        position: relative;
        margin: calc(100vh / 2 - 12rem) auto;
    }

    #search-container {
        display: flex;
        justify-content: space-between;
        background-color: var(--primary);
        border-radius: 2rem;
        padding: 0.2rem 0.2rem 0.2rem 1rem;
        gap: 1rem;
        height: 2rem;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
    }

    label {
        font-size: 1.5rem;
    }

    #search-container label {
        line-height: 1.4;
    }

    #search-container input {
        flex-grow: 1;
    }

    #search-filter {
        margin: 1rem 0.4rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        row-gap: 0.4rem;
        gap: 0.4rem;
    }
    input {
        background-color: #fefefe;
    }
</style>
