<template>
    <main class="book-page main-grid">
        <h1>Book #{{ this.$router.currentRoute.params.id }}</h1>
        <div class="images-box">
            <!--<ImageCards />-->
        </div>
        <span><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2578 1.84C18.9078 1.83944 19.5513 1.9726 20.1506 2.23169C20.75 2.49077 21.2931 2.87057 21.7482 3.3488C22.6859 4.32987 23.2115 5.65171 23.2115 7.0288C23.2115 8.4059 22.6859 9.72773 21.7482 10.7088L12.5 20.3596L3.25179 10.7088C2.3141 9.72773 1.78849 8.4059 1.78849 7.0288C1.78849 5.65171 2.3141 4.32987 3.25179 3.3488C3.70714 2.87091 4.25032 2.49132 4.84961 2.23219C5.4489 1.97307 6.09229 1.83961 6.74218 1.83961C7.39208 1.83961 8.03546 1.97307 8.63475 2.23219C9.23405 2.49132 9.77723 2.87091 10.2326 3.3488L12.5 5.7408L14.7585 3.3672C15.2122 2.88327 15.7559 2.49859 16.3572 2.23619C16.9584 1.97378 17.6049 1.83904 18.2578 1.84ZM18.2578 2.46822e-06C17.3702 -0.000772835 16.4913 0.181109 15.6727 0.534984C14.8541 0.888859 14.1124 1.4076 13.4909 2.0608L12.5 3.0912L11.5091 2.0608C10.8869 1.40878 10.1449 0.890939 9.3265 0.537458C8.50808 0.183976 7.62957 0.00192963 6.74218 0.00192963C5.8548 0.00192963 4.97629 0.183976 4.15787 0.537458C3.33945 0.890939 2.59749 1.40878 1.97525 2.0608C0.709312 3.38894 0 5.17625 0 7.038C0 8.89975 0.709312 10.6871 1.97525 12.0152L12.5 23L23.0248 12.0152C24.2907 10.6871 25 8.89975 25 7.038C25 5.17625 24.2907 3.38894 23.0248 2.0608C22.4027 1.40843 21.6608 0.890234 20.8423 0.536419C20.0239 0.182604 19.1453 0.00025401 18.2578 2.46822e-06Z" fill="black"/>
</svg></span>
        <span><svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.125 13.8V10.35H13.5V8.05H10.125V4.6H7.875V8.05H4.5V10.35H7.875V13.8H10.125Z" fill="black"/>
<path d="M18 23V2.3C18 1.03155 16.9909 0 15.75 0H2.25C1.00912 0 0 1.03155 0 2.3V23L9 17.7422L18 23ZM2.25 2.3H15.75V19.0359L9 15.0938L2.25 19.0359V2.3Z" fill="black"/>
</svg></span>
        <h3>Title</h3>
        <h4>Author</h4>
        <p>Description</p>
        <p>Price</p>
        <p>Quantity</p>
        <button class="borrow-button" @click={handleClick}>BORROW</button>
        <button class="buy-button" @click={handleClick}>BUY</button>
    </main>
</template>

<script>
    import ImageCards from '@/components/ImageCards.vue';
    export default {
    name: "book",
    created() {
        console.log(`go to server and get the book with id ${this.$router.currentRoute.params.id}`);
    },
    data() {
        [
            {
                id: "1",
                img: "../assets/books/klara_and_the_sun.jpg",
                title: "Klara and The Sun",
                description: "A novel by Kazuo Ishiguro. The second transrealist novel that has a nonhuman protagonist.",
                price: 52,
                quantity: 1
            },
            {
                id: "2",
                img: "../assets/books/machines_like_me.jpg",
                title: "Machines Like Me",
                description: "A novel by Ian McEwan. The first transrealist novel to have a nonhuman protagonist.",
                price: 55,
                quantity: 1
            },
            {
                id: "3",
                img: "../assets/books/atlas_obscura.jpg",
                title: "Atlas Obscura",
                description: "An atlas written by a group of explorers whose mission was to discover and map every unworldly place on Earth",
                price: 99,
                quantity: 1
            },
            {
                id: "4",
                img: "../assets/books/tarot_cards.jpg",
                title: "Tarot Cards",
                description: "A deck of tarot cards for daily readings. Some say it is the one used in The Quarry game.",
                price: 68,
                quantity: 1
            },
            {
                id: "5",
                img: "../assets/books/the_yellow_wallpaper",
                title: "The Yellow Wallpaper",
                description: "A feministic hauntingly novel written by Charlotte Gilman. One day, the protagonist finds herself locked in her room by her husband. Why? Purely out of medical reasons. Soon, she realizes that she's not alone in the room.",
                price: 24,
                quantity: 1
            },
            {
                id: "6",
                img: "../assets/books/house_of_leaves",
                title: "House of Leaves",
                description: "A novel \"written\" by Mark Danielweski. The report of an old man found dead in his own aparment, the damnable narration of a tattoo artist who found that report and the story of the house which changes dimensions... from the inside.",
                price: 89,
                quantity: 1
            }
        ];
    },
    components: { ImageCards },
}
</script>

<style lang="scss">
.book-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        span {
            display: inline;
            margin: 50px;
        }
        .images-box {
            margin: 15px;
            margin-bottom: 50px;
            border: 1px solid cadetblue;
            background-color: lightblue;
            border-radius: 5px;
        }
        img {
            width: 120px;
            height: 100px;
            margin: 5px;
            align-items: left;
        }
        .borrow-button {
            display: block;
            margin: 0 auto;
            padding: 5px;
            border-radius: 5px;
            background-color: #6A5ACD;
            color: white;
            border: none;
            font-size: 16px;
        }
        .buy-button {
            margin: 10px 30px;
            padding: 5px;
            border-radius: 5px;
            background-color: #3CB371;
            color: white;
            border: none;
            font-size: 16px;
        }
    }
}
</style>