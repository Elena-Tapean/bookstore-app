<template>
    <main class="about-page main-grid">
    <h1>About</h1>
    <div class="min-zero">
        <img src="../assets/bookstore.jpg" alt="about page" />
        <h3>Welcome to Es Bookstore!</h3>
        <p>
            Say, have you ever read a book in a library and fell in love with it? So much that you wanted to keep it? Here, at Es Bookstore you can keep your borrowed books by paying its price. Regulars get discounts.
            Also, if you have books that do not interest you anymore, you can come to Es Bookstore and receive money or another book.
        </p>
    </div>
    <div class="flex-div">
        <div>
            <h3>Welcome to Es Bookstore!</h3>
            <p>
            Say, have you ever read a book in a library and fell in love with it? So much that you wanted to keep it? Here, at Es Bookstore you can keep your borrowed books by paying its price. Regulars get discounts.
            Also, if you have books that do not interest you anymore, you can come to Es Bookstore and receive money or another book.
            </p>
        </div>
        <div>
            <img src="../assets/bookstore.jpg" alt="bookstore about page" />
        </div>
    </div>
    </main>
</template>

<script>
    export default {
        name: 'About',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
.about-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        .min-zero {
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
        
        .flex-div {
            display: none;
        }
    }

    @media only screen and (min-width: 1024px) {

        .min-zero {
            display: none;
        }

        .flex-div {
            display: flex;
            margin-top: 30px;
        
            img {
                width: 620px;
                height: 500px;
            }
            h3 {
                font-size: 25px;
            }
            p {
                margin: 15px 30px;
                font-size: 20px;
                text-align: justify;
                text-indent: 30px;
                line-height: 2;
            }
        }
    }
}
</style>