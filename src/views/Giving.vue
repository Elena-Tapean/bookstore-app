<template>
    <main class="giving-book main-grid">
        <h1>Give Book</h1>
        <label>Your first name:</label>
        <br/>
        <input type="text" id="firstName" placeholder="first name..." />
        <br/>
        <label>Your family name:</label>
        <br/>
        <input type="text" id="familyName" placeholder="family name..." />
        <br/>
        <label>Author:</label>
        <br/>
        <input type="text" id="author" placeholder="author of the book..." />
        <br/>
        <label>Title:</label>
        <br/>
        <input type="text" id="title" placeholder="title of the book..." />
        <br/>
        <label>Publisher:</label>
        <br/>
        <input type="text" id="publisher" placeholder="publishing house..." />
        <br/>
        <label>Year:</label>
        <br/>
        <input type="number" id="year" placeholder="year of apparition..." />
        <br/>
        <button @click={handleGiveBook}>Give Book</button>
    </main>
</template>

<script>
    export default {
        name: 'giving'
    }
    function handleGiveBook (ev) {
        ev.preventDefault
    }
</script>

<style lang="scss">
.giving-book {
    @media only screen and (min-width: 0) {
        height: 100%;

        input {
            margin-bottom: 20px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid grey;
        }
        button {
            padding: 10px;
            margin-bottom: 30px;
            background-color: #DC143C;
            color: white;
            font-size: 15px;
            border: none;
            border-radius: 5px;
        }
    }
}
</style>