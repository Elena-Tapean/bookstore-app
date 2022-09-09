<template>
    <main class="create-account main-grid">
        <h1>Create account</h1>
        <form>
            <label>Your first name:</label>
            <br/>
            <input type="text" id="firstName" placeholder="first name..." />
            <br/>
            <label>Your family name:</label>
            <br/>
            <input type="text" id="familyName" placeholder="family name..." />
            <br/>
            <label>Your email:</label>
            <br/>
            <input type="email" id="email" placeholder="name@mail.com..." />
            <br/>
            <label>Your password:</label>
            <br/>
            <input type="password" id="password" placeholder="password..." />
            <br/>
            <button @click={handleCreateAccount}>Create account</button>
        </form>
</main>
</template>

<script>
    export default {
        name: 'create-account'
    }

    function handleCreateAccount (ev) {
        ev.preventDefault
    }
</script>

<style lang="scss">
.create-account {
    @media only screen and (min-width: 0) {
        height: 100%;

        form {
            margin-top: 30px;
            margin-bottom: 10px;
        }
        label {
            font-size: 17px;
        }
        input {
            margin-bottom: 20px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid grey;
        }
        button {
            padding: 10px;
            margin-bottom: 30px;
            background-color: #3CB371;
            color: white;
            font-size: 15px;
            border: none;
            border-radius: 5px;
        }
    }

    @media only screen and (min-width: 1024px) {
        form {
            margin-top: 50px;
            margin-bottom: 20px;
        }
        label {
            font-size: 21px;
        }
        input {
            padding: 10px;
            font-size: 17px;
        }
        button {
            padding: 15px;
            font-size: 18px;
        }
    }
}
</style>