<template>
    <main class="profile-page main-grid">
        <h1>Profile</h1>
        <h3>Welcome back, user!</h3>
        <h4>My Books:</h4>
        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.25C1 3.25 2.35 1 5.5 1C8.65 1 10 3.25 10 3.25V19C10 19 8.65 17.875 5.5 17.875C2.35 17.875 1 19 1 19V3.25ZM10 3.25C10 3.25 11.35 1 14.5 1C17.65 1 19 3.25 19 3.25V19C19 19 17.65 17.875 14.5 17.875C11.35 17.875 10 19 10 19V3.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            <div>
                <div class="images-box">
                    <img src="../assets/books/klara_and_the_sun.jpg" alt="klara and the sun" />
                    <img src="../assets/books/machines_like_me.jpg" alt="machines like me" />
                </div>
            </div>
        <h4>My Favorites:</h4>
        <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1456 1.44C13.6136 1.43956 14.0769 1.54377 14.5085 1.74654C14.94 1.9493 15.3311 2.24653 15.6587 2.6208C16.3339 3.3886 16.7123 4.42307 16.7123 5.5008C16.7123 6.57853 16.3339 7.61301 15.6587 8.3808L9 15.9336L2.34129 8.3808C1.66615 7.61301 1.28771 6.57853 1.28771 5.5008C1.28771 4.42307 1.66615 3.3886 2.34129 2.6208C2.66914 2.2468 3.06023 1.94972 3.49172 1.74693C3.92321 1.54414 4.38645 1.43969 4.85437 1.43969C5.3223 1.43969 5.78553 1.54414 6.21702 1.74693C6.64851 1.94972 7.03961 2.2468 7.36746 2.6208L9 4.4928L10.6261 2.6352C10.9528 2.25647 11.3443 1.95542 11.7772 1.75006C12.2101 1.5447 12.6755 1.43925 13.1456 1.44ZM13.1456 1.93165e-06C12.5065 -0.000604827 11.8737 0.141738 11.2843 0.418683C10.695 0.695629 10.1609 1.1016 9.71343 1.6128L9 2.4192L8.28657 1.6128C7.83855 1.10253 7.30434 0.697256 6.71508 0.420619C6.12581 0.143982 5.49329 0.00151015 4.85437 0.00151015C4.21546 0.00151015 3.58293 0.143982 2.99367 0.420619C2.40441 0.697256 1.8702 1.10253 1.42218 1.6128C0.510705 2.65221 0 4.05098 0 5.508C0 6.96502 0.510705 8.36379 1.42218 9.4032L9 18L16.5778 9.4032C17.4893 8.36379 18 6.96502 18 5.508C18 4.05098 17.4893 2.65221 16.5778 1.6128C16.1299 1.10225 15.5958 0.696705 15.0065 0.419806C14.4172 0.142907 13.7846 0.000198791 13.1456 1.93165e-06Z" fill="black"/>
</svg></span>
            <div>
                <div class="images-box">
                    <img src="../assets/books/atlas_obscura.jpg" alt="atlas obscura" />
                    <img src="../assets/books/the_yellow_wallpaper.jpg" alt="the yellow wallpaper" />
                </div>
            </div>
        <h4>My Wishlist:</h4>
        <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.125 10.8V8.1H13.5V6.3H10.125V3.6H7.875V6.3H4.5V8.1H7.875V10.8H10.125Z" fill="black"/>
<path d="M18 18V1.8C18 0.8073 16.9909 0 15.75 0H2.25C1.00912 0 0 0.8073 0 1.8V18L9 13.8852L18 18ZM2.25 1.8H15.75V14.8977L9 11.8125L2.25 14.8977V1.8Z" fill="black"/>
</svg></span>
            <div>
                <div class="images-box">
                    <img src="../assets/books/tarot_cards.jpg" alt="tarot cards" />
                    <img src="../assets/books/house_of_leaves.jpg" alt="house of leaves" />
                </div>
            </div>
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
        .images-box {
            width: 310px;
            height: 110px;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 30px;
            border: 1px solid cadetblue;
            background-color: lightblue;
            border-radius: 5px;
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
        .images-box {
            width: 330px;
            height: 130px;
        }
        img {
            width: 100px;
            height: 120px;
        }
    }
}   
</style>