<template>
    <main class="profile-page main-grid">
        <h1>Profile</h1>
        <h3>Welcome!</h3>
    </main>
</template>

<script>
    export default {
        name: 'Profile',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
.profile-page {
    @media only screen and (min-width: 0) {
        height: 100%;
 
        h3 {
            display: inline;
            margin: 30px;
            text-align: left;
        }
    }

    @media only screen and (min-width: 1024px) {
        
    }
}   
</style>