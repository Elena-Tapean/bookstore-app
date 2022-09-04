<template>
    <main class="book-page main-grid">
        <h1>Book #{{ this.$router.currentRoute.params.id }}</h1>
    </main>
</template>

<script>
    export default {
        name: 'book',
        created () {
            console.log(`go to server and get the book with id ${this.$router.currentRoute.params.id}`)
        },
        data () {
            [
                {
                    id: '1',
                    img: '../assets/books/kara_and_the_sun.jpg',
                    title: 'Kara and The Sun',
                    description: 'A novel by Kazuo Ishiguro. The second transrealist novel that has a nonhuman protagonist.',
                    price: 52,
                    quantity: 1
                },
                {
                    id: '2',
                    img: '../assets/books/machines_like_me.jpg',
                    title: 'Machines Like Me',
                    description: 'A novel by Ian McEwan. The first transrealist novel to have a nonhuman protagonist.',
                    price: 55,
                    quantity: 1
                },
                {
                    id: '3',
                    img: '../assets/books/atlas_obscura.jpg',
                    title: 'Atlas Obscura',
                    description: 'An atlas written by a group of explorers whose mission was to discover and map every unworldly place on Earth',
                    price: 99,
                    quantity: 1
                },
                {
                    id: '4',
                    img: '../assets/books/tarot_cards.jpg',
                    title: 'Tarot Cards',
                    description: 'A deck of tarot cards for daily readings. Some say it is the one used in The Quarry game.',
                    price: 68,
                    quantity: 1
                },
                {
                    id: '5',
                    img: '../assets/books/the_yellow_wallpaper',
                    title: 'The Yellow Wallpaper',
                    description: 'A feministic hauntingly novel written by Charlotte Gilman. One day, the protagonist finds herself locked in her room by her husband. Why? Purely out of medical reasons. Soon, she realizes that she\'s not alone in the room.',
                    price: 24,
                    quantity: 1
                },
                {
                    id: '6',
                    img: '../assets/books/house_of_leaves',
                    title: 'House of Leaves',
                    description: 'A novel \"written\" by Mark Danielweski. The report of an old man found dead in his own aparment, the damnable narration of a tattoo artist who found that report and the story of the house which changes dimensions... from the inside.',
                    price: 89,
                    quantity: 1
                }
            ]
        }
    }
</script>

<style lang="scss">
.book-page {
    @media only screen and (min-width: 0) {
        height: 100%;
    }
}
</style>