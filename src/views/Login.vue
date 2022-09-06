<template>
    <main class="login-page main-grid">
        <h1>Login</h1>
        <label>Your email:</label>
        <br/>
        <input type="email" id="email" placeholder="name@mail.com..." />
        <br/>
        <label>Your password:</label>
        <br/>
        <input type="password" id="password" placeholder="password..." />
        <br/>
        <button @click={handleCreateAccount}>Log In</button>
    </main>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<style lang="scss">
.login-page {
    @media only screen and (min-width: 0) {
        height: 100%;

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
} 
</style>