<script lang="ts">
    import DeleteBook from "./DeleteBook.svelte";
    import Message from "./Message.svelte";
    import { onMount } from "svelte";

    let message: string | undefined;
    let messageType: "success" | "error" = "success";
    let eliminar: number = 0;

    function handleBookDeleted(event: CustomEvent) {
        message = event.detail.message;
        messageType = event.detail.type;
    }
</script>

{#if message}
    <Message {message} type={messageType} />
{/if}
<DeleteBook {eliminar} on:bookDeleted={handleBookDeleted} />
