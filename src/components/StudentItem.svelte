<script>
    export let register;
    export let name;
    export let email;
</script>

<div>
    <a href="/admin/student/loan" id="matricula"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-books"
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
            <path
                d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
            ></path>
            <path
                d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
            ></path>
            <path d="M5 8h4"></path>
            <path d="M9 16h4"></path>
            <path
                d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
            ></path>
            <path d="M14 9l4 -1"></path>
            <path d="M16 16l3.923 -.98"></path>
        </svg></a
    >
    <span id="name">{name}</span>
    <span id="matricula">{register}</span>
    <span id="email">{email}</span>
</div>

<style>
    div {
        display: flex;
        text-align: center;
        border-radius: 0.5rem;
        overflow: hidden;
        height: 3rem;
        line-height: 2.4;
        font-size: 1.2rem;
        font-family: "Arvo", sans-serif;
        color: #fefefe;
    }
    span {
        flex-grow: 1;
    }
    #matricula {
        background-color: var(--secondary);
    }

    #name,
    #email {
        background-color: var(--primary);
    }
    #email {
        color: #fefefe;
    }

    a {
        border-radius: 0;
        font-size: 2rem;
        font-weight: bold;
        padding: 0.2rem 1rem;
        text-decoration: none;
        line-height: 1.2;
    }
</style>
