<template>
    <main class="profile-page main-grid">
        <h1>Profile</h1>
        <h3>Welcome!</h3>
        <h4>My Books:</h4>

        <h4>My Favorites:</h4>
        
        <h4>My Wishlist:</h4>

    </main>
</template>

<script>
    export default {
        name: 'ProfilePage'
    }
</script>

<style lang="scss">
.profile-page {
    @media only screen and (min-width: 0) {
        height: 100%;
 
        h4, span {
            display: inline;
            margin: 30px;
            text-align: left;
        }
        img {
            width: 80px;
            height: 100px;
            margin: 5px;
        }
    }

    @media only screen and (min-width: 1024px) {
        h3 {
            font-size: 25px;
        }
        h4 {
            font-size: 20px;
        }
        img {
            width: 100px;
            height: 120px;
        }
    }
}   
</style>