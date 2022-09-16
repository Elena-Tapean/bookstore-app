<template>
    <main class="login-page main-grid">
        <h1>Login</h1>
        <ValidationObserver v-slot="{invalid}">
            <form @submit.prevent="handleSubmit">
                <ValidationProvider name="Name" rules="required|alpha" v-slot="{errors}">
                    <span>Name:</span>
                    <br/>
                    <input v-model="name" type="text" />
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <ValidationProvider name="Email" rules="required" v-slot="{errors}">
                    <span>Email:</span>
                    <br/>
                    <input v-model="email" type="email" />
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <ValidationProvider name="Password" rules="required" v-slot="{errors}">
                    <span>Password:</span>
                    <br/>
                    <input v-model="password" type="password" />
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <button type="submit" :disabled="invalid">SUBMIT</button>
            </form>
        </ValidationObserver>
    </main>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                name: '',
                email: '',
                password: '',
                invalid: true
            }
        },
        methods: {
            handleSubmit () {
                console.log(`submitted`)
            }
        }
    }
</script>

<style lang="scss">
.login-page {
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
            padding: 5px;
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
            padding: 10px;
            font-size: 18px;
        }
    }
} 
</style>