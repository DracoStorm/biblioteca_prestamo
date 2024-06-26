<script lang="ts">
    import { onMount } from "svelte";
    import type { SimpleKey } from "../types/api";
    import {
        GET,
        CATEGORY,
        EDITORIAL,
        PATCH,
        ADMIN_BOOK,
    } from "../API/API.json";

    export let cookies: string;
    let id: string;
    let title: string;
    let author: string;
    let editorial: number;
    let category: number;

    let categories: SimpleKey[] | undefined;
    let editorials: SimpleKey[] | undefined;

    async function fetchOptions() {
        if (id) {
            try {
                const book_p = await GET(`${ADMIN_BOOK}${id}/`, cookies);
                const book = await book_p.json();
                title = title;
                author = author;
                editorial = editorial;
                category = category;
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        }

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
        try {
            const promise = await PATCH(
                {
                    id: id,
                    title: title,
                    author: author,
                    editorial: editorial,
                    category: category,
                },
                ADMIN_BOOK,
                cookies,
            );
            if (promise.ok) {
                console.log("Libro actualizado exitosamente");
            } else {
                const errorData = await promise.json();
                console.error("Error al actualizar el libro:", errorData);
            }
        } catch (error) {
            console.error("Error en la solicitud de actualización", error);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div id="hs"><h1>Actualizar Libro</h1></div>
    <div id="id-section">
        <label for="id">ID del Libro</label>
        <input type="text" id="id" name="id" bind:value={id} required />
    </div>
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
            <option value="0" disabled selected>--Select an Option--</option>
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
            <option value="0" disabled selected>--Select an Option--</option>
            {#if categories != undefined}
                {#each categories as category}
                    <option value={category.id}>{category.name}</option>
                {/each}
            {/if}
        </select>
    </div>
    <div id="btns">
        <button type="submit" id="mod">Actualizar</button>
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
        top: 15%;
        left: 30%;
        width: 40%;
        height: inherit;
        padding: 2rem 1rem;
        border-radius: 1rem;
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "hs hs"
            "id title" "autor category" "editorial editorial" "btn btn";
        gap: 1rem;
        font-family: "Bitter", sans-serif;
    }
    div {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-family: "Bitter", sans-serif;
    }
    #id-section {
        margin-right: 5rem;
        margin-left: 2rem;
        grid-area: id;
    }
    #title-section {
        grid-area: title;
        margin-right: 3rem;
        margin-left: 2rem;
    }
    #author-section {
        grid-area: autor;
        margin-right: 3rem;
        margin-left: 2rem;
    }
    #editorial-section {
        grid-area: editorial;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    #category-section {
        grid-area: category;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    input {
        width: 100%;
    }
    #hs {
        grid-area: hs;
    }
    h1 {
        text-align: center;
    }

    button {
        background-color: var(--accent-1);
        width: 9rem;
        color: var(--accent-2);
        border: none;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        box-shadow: 0.2rem 0.2rem 1rem #0004;
        margin: auto;
        border-radius: 0.8rem;
        text-align: center;
        text-decoration: none;
    }
    #btns {
        display: flex;
        grid-area: btn;
    }
    button:hover {
        background-color: #443659;
    }
    select {
        width: 100%;
        border-radius: 1rem;
        font-family: "Bitter";
    }
</style>
