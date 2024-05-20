<script lang="ts">
    export let message: string;
    export let type: "success" | "error" = "success";
</script>

<dialog>
    <span class={`message ${type}`}>
        {message}
    </span>
</dialog>

<style>
    dialog {
        background-color: var(--primary);
        border-radius: 0.5rem;
        font-size: 2rem;
        text-align: center;
        color: #fefefe;
    }

    span {
        flex-grow: 1;
        font-family: "Lora", sans-serif;
    }
    /*svg {
        width: -webkit-fill-available;
        color: #fefefe;
        font-size: 3.5rem;
    }*/
</style>
