<script lang="ts">
    import { onMount } from "svelte";
    import type { SimpleKey } from "../types/api";
    import { GET, CATEGORY, EDITORIAL, PUT, ADMIN_BOOK } from "../API/API.json";

    export let cokies: string;

    let title: string;
    let author: string;
    let editorial: number;
    let category: number;

    let categories: SimpleKey[] | undefined;
    let editorials: SimpleKey[] | undefined;

    async function fetchOptions() {
        const categories_p = await GET(CATEGORY);
        categories = await categories_p.json();

        const editorials_p = await GET(EDITORIAL);
        editorials = await editorials_p.json();
    }

    onMount(() => {
        fetchOptions();
    });

    async function handleSubmit() {
        console.log(title, author, editorial, category);
        const promise = await PUT(
            {
                title: title,
                author: author,
                editorial: editorial,
                category: category,
            },
            ADMIN_BOOK,
            cokies,
        );
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div id="hs"><h1>Registrar Libro</h1></div>

    <div id="title-section">
        <label for="title">Título</label>
        <input
            type="text"
            id="title"
            name="title"
            bind:value={title}
            required
        />
    </div>
    <div id="author-section">
        <label for="author">Autor</label>
        <input
            type="text"
            id="author"
            name="author"
            bind:value={author}
            required
        />
    </div>
    <div id="editorial-section">
        <label for="editorial">Editorial</label>
        <select id="editorial" bind:value={editorial} required>
            <option value="0" disabled selected>-- Select an Option --</option>
            {#if editorials != undefined}
                {#each editorials as editorial}
                    <option value={editorial.id}>{editorial.name}</option>
                {/each}
            {/if}
        </select>
    </div>
    <div id="category-section">
        <label for="category">Categoria</label>
        <select id="category" bind:value={category} required>
            <option value="0" disabled selected>-- Select an Option --</option>
            {#if categories != undefined}
                {#each categories as category}
                    <option value={category.id}>{category.name}</option>
                {/each}
            {/if}
        </select>
    </div>

    <div id="btns">
        <button type="submit" id="mod">Registrar</button>
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

    #title-section {
        grid-area: title;
    }

    #editorial-section {
        grid-area: editorial;
    }

    #category-section {
        grid-area: category;
    }

    #hs {
        grid-area: hs;
    }
    form {
        position: absolute;
        top: 15%;
        left: 30%;
        width: 40%;
        height: 50%;
        padding: 4rem 1rem;
        border-radius: 1rem;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "hs hs hs"
            "title title autor" "editorial editorial category"
            "place place ID";
        gap: 1rem;
        font-family: "Bitter", sans-serif;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-family: "Bitter", sans-serif;
    }
    input {
        width: 100%;
    }
    h1 {
        text-align: center;
    }
    #mod {
        background-color: #8c618c;
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
        position: relative;
        left: 11.5rem;
        margin-top: 2rem;
        border: none;
    }
    button {
        border: none;
    }
    button:hover {
        background-color: #443659;
    }
    select {
        width: 100%;
        border-radius: 1rem;
    }
</style>
