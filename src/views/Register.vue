<template>
    <main class="register-page main-grid">
        <div class="shader-bg">
        <h1>Register</h1>
        <ValidationObserver v-slot="{invalid}">
        <form @submit.prevent="handleRegister">
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{errors}">
                <span>Name:</span>
                <br/>
                <input v-model="user.name" type="text" />
                <br/>
                <span>{{errors[0]}}</span>
            </ValidationProvider>
            <br/>
            <ValidationProvider name="Surname" rules="required|alpha" v-slot="{errors}">
                <span>Surname:</span>
                <br/>
                <input v-model="user.surname" type="text" />
                <br/>
                <span>{{errors[0]}}</span>
            </ValidationProvider>
            <br/>
            <ValidationProvider name="Email" rules="required" v-slot="{errors}">
                <span>Email:</span>
                <br/>
                <input v-model="user.email" type="email" />
                <br/>
                <span>{{errors[0]}}</span>
            </ValidationProvider>
            <br/>
            <ValidationProvider name="Password" rules="required" v-slot="{errors}">
                <span>Password:</span>
                <br/>
                <input v-model="user.password" type="password" />
                <br/>
                <span>{{errors[0]}}</span>
            </ValidationProvider>
            <br/>
            <ValidationProvider name="Confirm Password" rules="required" v-slot="{errors}">
                <span>Confirm Password:</span>
                <br/>
                <input v-model="user.confirm" type="password" />
                <br/>
                <span>{{errors[0]}}</span>
            </ValidationProvider>
                <br/>
                <input class="checkbox-info" type="checkbox" />
                <span>I have read and agreed with the Terms and Conditions.</span>
                <br/>
                <br/>
                <button type="submit" :disabled="invalid">REGISTER</button>
            </form>
        </ValidationObserver>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            user: {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    confirm: '',
                    invalid: true,
                }
        }
    },
    methods: {
        handleRegister () {
            this.$store.dispatch('register', this.user)
        }
    }
}
</script>

<style lang="scss">
.register-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/register.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .shader-bg {
            margin: 20px 100px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
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
        .checkbox-info {
            width: 10%;
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
            margin: 30px 480px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
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
        .checkbox-info {
            width: 5%;
        }
        button {
            font-size: 18px;
        }
    }
} 
</style>