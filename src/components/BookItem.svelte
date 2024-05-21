<script lang="ts">
    export let id: number | undefined;
    export let title: string;
    export let autor: string;
    export let category: string;
    export let editorial: string;
</script>

<div id="main">
    <div id="title">{title}</div>
    <div id="autor">{autor}</div>
    <div id="category">{category}</div>
    <div id="editorial">{editorial}</div>
    <div id="icon-container">
        <div class="icon">
            {#if id}
                <div>{id}</div>
            {/if}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-book-2"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fefefe"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"
                ></path>
                <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                <path d="M9 8h6"></path>
            </svg>
        </div>
    </div>
</div>

<style>
    #icon-container {
        display: flex;
        padding: inherit;
        justify-content: center;
        grid-area: icon;
    }
    #title {
        grid-area: title;
        border-top-left-radius: 0.5rem;
        font-family: "Arvo", sans-serif;
        border-bottom: var(--primary) dotted 0.2rem;
    }
    #autor {
        grid-area: autor;
        font-family: "Arvo", sans-serif;
    }
    #category {
        grid-area: category;
        font-family: "Arvo", sans-serif;
        border-bottom: var(--secondary) dotted 0.2rem;
    }
    #editorial {
        grid-area: editorial;
        font-family: "Arvo", sans-serif;
    }
    div > div {
        display: flex;
        align-items: center;
        padding: 0.4rem;
    }
    #title,
    #autor {
        background-color: var(--secondary);
    }

    #main {
        display: grid;
        background-color: var(--primary);
        grid-template-columns: 6rem 1fr 2fr 2fr;
        grid-template-rows: 3rem 4rem;
        grid-template-areas: "icon title title category" "icon autor autor editorial";
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
        color: #fefefe;
    }
    @media screen and (width <= 1000) {
        #main {
            grid-template-areas: "icon title" "autor autor" "category editorial" "place place";
        }
    }
</style>
