<template>
    <main class="about-page main-grid">
    <h1>About</h1>
    <img src="../assets/about.jpg" alt="bookstore about page" />
    <h3>Welcome to Es Bookstore!</h3>
    <p>
        Say, have you ever read a book in a library and fell in love with it? So much that you wanted to keep it? Here, at Es Bookstore you can keep your borrowed books by paying its price. Regulars get discounts.
    </p>
    <p>
        Also, if you have books that do not interest you anymore, you can come to Es Bookstore and receive money or another book.
    </p>
    </main>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style lang="scss">
.about-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        img {
            width: 100%;
            height: 300px;
        }
        h3 {
            font-size: 16px;
            font-style: italic;
        }
        p {
            margin: 15px;
            font-size: 16px;
            text-align: justify;
            text-indent: 30px;
            line-height: 2;
        }
    }
}
</style>