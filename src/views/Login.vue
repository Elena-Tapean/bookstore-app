<template>
    <main class="login-page main-grid">
        <div class="shader-bg">
            <h1>Log In</h1>
            <br/>
            <ValidationObserver v-slot="{invalid}">
                <form @submit.prevent="handleLogin">
                <ValidationProvider name="Name" rules="required|alpha" v-slot="{errors}">
                    <span>Name:</span>
                    <br/>
                    <input v-model="user.name" type="text" />
                    <br/>
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <br/>
                <ValidationProvider name="Email" rules="required" v-slot="{errors}">
                    <span>Email:</span>
                    <br/>
                    <input v-model="user.email" type="email" />
                    <br/>
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <br/>
                <ValidationProvider name="Password" rules="required" v-slot="{errors}">
                    <span>Password:</span>
                    <br/>
                    <input v-model="user.password" type="password" />
                    <br/>
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <br/>
                <br/>
                <button type="submit" :disabled="invalid">LOG IN</button>
                </form>
            </ValidationObserver>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    invalid: true,
                }
            }
        },
        methods: {
            handleLogin () {
                this.$store.dispatch('login', this.user)
            }
        }
    }
</script>

<style lang="scss">
.login-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/login.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .shader-bg {
            margin: 50px 120px;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 5px;
        }
        h1 {
            color: white;
            font-size: 24px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        form {
            margin: 0 auto;
        }
        span {
            color: white;
            font-size: 17px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        input {
            margin: 5px;
            padding: 5px;
            width: 170px;
            border-radius: 5px;
            border: 1px solid white;
        }
        button {
            padding: 7px 10px;
            background: linear-gradient(mediumseagreen, green);
            color: white;
            font-size: 17px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background: linear-gradient(green, mediumseagreen);
        }
    }
    @media only screen and (min-width: 1024px) {
        .shader-bg {
            margin: 50px 550px;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 5px;
        }
        h1 {
            font-size: 28px;
        }
        span {
            font-size: 18px;
        }
        input {
            margin: 10px;
            padding: 10px;
            width: 200px;
        }
        button {
            font-size: 18px;
        }
    }
} 
</style>