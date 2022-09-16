<template>
    <main class="not-found main-grid">
        <h1>Room 404</h1>
        <p>That's not a typo. That room is now the legendary error code 404.</p>
        <p>The history behind this error code is pretty amazing, so why don't you access this link to learn more about it.</p>
        <p>Link: <a href="https://www.news.com.au/technology/online/social/the-404-not-found-error-page-has-origins-dating-back-to-the-1980s/news-story/c30a3488e240067204fbcc0155dcbabe" target="_blank">The Origins of the 404 Error Code</a>.</p>
        <p>Next time you meet it, simply smile.</p>
    </main>
</template>

<script>
    export default {
        name: 'PageNotFound'
    }
</script>

<style lang="scss">
.not-found {
    @media only screen and (min-width: 0) {
        height: 100%;

        h1 {
            font-size: 22px;
            font-style: normal;
            text-align: center;
        } 
        p {
            margin: 15px;
            font-size: 16px;
            text-align: justify;
            text-indent: 30px;
            line-height: 2;
        }
        a {
            color: #DC143C;
            text-decoration: none;
            a:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
</style>