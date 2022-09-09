<template>
    <main class="giving-book main-grid">
        <h1>Give Book</h1>
        <form>
            <fieldset>
                <legend>Personal information</legend>
                <label>Your first name:</label>
                <br/>
                <input type="text" id="firstName" placeholder="first name..." />
                <br/>
                <label>Your family name:</label>
                <br/>
                <input type="text" id="familyName" placeholder="family name..." />
            </fieldset>
            <br/>
           <fieldset>
                <legend>Personal address and credit card</legend>
                <label>Address:</label>
                <br/>
                <input type="text" id="address" placeholder="street, flat, city, country..." />
                <br/>
                <label>Credit card:</label>
                <br/>
                <input type="text" id="credit" placeholder="IBAN number" />
           </fieldset>
           <br/>
           <fieldset>
                <legend>Book information</legend>
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
           </fieldset>
            <br/>
            <button @click={handleGiveBook}>Give Book</button>
        </form>
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
        background-color: #C5E0E3;

        form {
            margin-top: 10px;
        }
        legend {
            margin-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
            display: block;
            font-size: 17px;
            border: none;
            text-align: left;
        }
        fieldset {
            border: 1px solid cadetblue;
            margin: 0 50px 0 50px;
        }
        label {
            font-size: 16px;
        }
        input {
            margin-bottom: 10px;
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
        button:hover {
            background-color: #ea4b6b;
            color: black;
        }
    }

    @media only screen and (min-width: 1024px) {
        form {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        fieldset {
            margin: 0 300px 0 300px;
        }
        label {
            font-size: 18px;
        }
        input {
            padding: 10px;
            font-size: 17px;
        }
        button {
            padding: 15px;
            font-size: 17px;
        }
        button:hover {
            background-color: #ea4b6b;
            color: black;
            cursor: pointer;
        }
    }
}
</style>