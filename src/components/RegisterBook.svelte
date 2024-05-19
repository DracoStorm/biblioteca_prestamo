<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import type { SimpleKey } from "../types/api";
    import { writable } from "svelte/store";

    export let id: number;
    export let title: string;
    export let author: string;

    const dispatch = createEventDispatcher();
    const categories = writable<SimpleKey[]>([]);
    const editorials = writable<SimpleKey[]>([]);

    let selectedCategory = "";
    let selectedEditorial = "";

    function isValidSimpleKeyArray(data: any): data is SimpleKey[] {
        return (
            Array.isArray(data) &&
            data.every(
                (item) =>
                    item &&
                    typeof item.id === "number" &&
                    typeof item.name === "string",
            )
        );
    }

    async function fetchData() {
        try {
            const [categoryResponse, editorialResponse] = await Promise.all([
                fetch("http://localhost:8000/API/u/category/"),
                fetch("http://localhost:8000/API/u/editorial/"),
            ]);

            if (!categoryResponse.ok || !editorialResponse.ok) {
                throw new Error("Error al obtener las opciones");
            }

            const categoryData = await categoryResponse.json();
            const editorialData = await editorialResponse.json();

            if (
                !isValidSimpleKeyArray(categoryData) ||
                !isValidSimpleKeyArray(editorialData)
            ) {
                throw new Error("Formato de respuesta inesperado");
            }

            categories.set(categoryData);
            editorials.set(editorialData);
        } catch (error) {
            console.error("Error al obtener las opciones", error);
        }
    }

    onMount(() => {
        fetchData();
    });

    function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        dispatch("submit", formData);
    }
</script>

<form on:submit={handleSubmit}>
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
        <select id="editorial" bind:value={selectedEditorial} required>
            {#each $editorials as editorial}
                <option value={editorial.id}>{editorial.name}</option>
            {/each}
        </select>
    </div>
    <div id="category-section">
        <label for="category">Categoria</label>
        <select id="category" bind:value={selectedCategory} required>
            {#each $categories as category}
                <option value={category.id}>{category.name}</option>
            {/each}
        </select>
    </div>
    <div id="book-id-section">
        <label for="bookId">ID</label>
        <input type="text" id="bookId" name="id" bind:value={id} required />
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
        background-color: #44365997;
        box-shadow: 0.5rem 0.5rem 2rem #0004;
        color: #fefefe;
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
    }
    button:hover {
        background-color: #443659;
    }
    select {
        width: 100%;
        border-radius: 1rem;
    }
</style>
