<script lang="ts">
    export let filter: string;
    import { current_filter } from "../stores/store";
    let active = false;

    $: active_filter = active ? "selected" : "non_selected";

    function handleFilter() {
        if ($current_filter != filter && !active) {
            current_filter.set(filter);
            active = true;
            console.log($current_filter);
        } else if ($current_filter != filter && active) {
            active = false;
        }
    }
</script>

<input
    class={active_filter}
    id="filter"
    type="button"
    value={filter}
    on:click={handleFilter}
/>

<style>
    @font-face {
        font-family: "Outfit";
        src: url("/fonts/Outfit/Outfit-VariableFont_wght.ttf")
            format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    input {
        font-family: "Bitter", sans-serif;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        box-shadow: 0.2rem 0.2rem 1rem #0005;
        border: #0000 solid 0.2rem;
    }
    .non_selected {
        color: #fefefe;
        background-color: #8c618c;
    }

    .selected {
        background-color: #0000;
        color: var(--primary);
        border: var(--primary) solid 0.2rem;
    }
</style>
