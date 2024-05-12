<script>
    const catsPromise = async () => {
        const res = await fetch("http://192.168.100.61:8000/API/u/category/");
        const data = await res.json();
        return data;
    };
    const catsp = catsPromise();
</script>

<h1>Categorias:</h1>
{#await catsp}
    <p>cargando...</p>
{:then data}
    {#each data.slice(5, 10) as c}
        <p>{c.name}</p>
    {/each}
{/await}

<p>shit</p>

<style>
    p,
    h1 {
        color: black;
    }
</style>
