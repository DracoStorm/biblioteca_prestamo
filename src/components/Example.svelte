<script lang="ts">
    const catsPromise = async () => {
        const res = await fetch("http://192.168.100.61:8000/API/u/category/");
        const data = (await res.json()) as [import("../types/api").Category];
        return data;
    };
    const catsp = catsPromise();
</script>

<div>
    <h1>Categorias:</h1>
    <div class="cats">
        <span class="item"
            ><span class="id"> Id </span>
            <span class="name"> Name </span>
        </span>
        {#await catsp then data}
            {#each data.slice(20, 40) as c}
                <span class="item"
                    ><span class="id"> {c.id} </span>
                    <span class="name"> {c.name} </span>
                </span>
            {/each}
        {/await}
    </div>
</div>

<style>
    h1 {
        color: var(--secondary);
        text-align: center;
        font-size: 3rem;
        border: 0.5rem var(--accent-1) double;
        max-width: 50vw;
        margin: 3rem auto;
    }

    .cats {
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        background-color: var(--primary);
        border: 1rem solid var(--secondary);
        border-radius: 1rem;
    }
    .item {
        display: flex;
        font-size: 1.2rem;
    }
    .id {
        background-color: var(--secondary);
        flex-grow: 1;
        max-width: 3rem;
        margin-inline-start: 1rem;
        text-align: center;
    }
    .name {
        flex-grow: 8;
        margin-inline-start: 1rem;
    }
</style>
