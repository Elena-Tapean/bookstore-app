<template>
    <main class="image-cards main-grid">
        <ul>
            <li v-for="item in 6">
                <img src="" alt="" />
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        name: 'image-cards'
    }
</script>

<style lang="scss">
.image-cards {
    @media only screen and (min-width: 0) {
        height: 100%;

      ul {
        width: 88%;
        max-width: 420px;
        margin: 0 auto;
      }
      li {
        height: 240px;
        margin-bottom: 24px;
        border-radius: 4px;
        font-size: 20px;
        border: 1px solid cadetblue;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
            width: 120px;
            height: 100px;
            margin: 5px;
            align-items: center;
        }
    }
}
</style>