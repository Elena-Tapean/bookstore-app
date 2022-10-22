<template>
    <main class="about-page main-grid">
        <h2>What is Blaze?</h2>
        <p>Blaze is a small-business bookstore that contains pretty much everything. From familiar titles to curious things. We encourage our readers to read, experience and inspire.</p>
        <img class="img-logo" src="../assets/logo3.png" alt="logo" />
        <h2>General Information</h2>
        <h3>Delivery</h3>
        <p>Readers can choose one of two options: either postal delivery (which will add a 10 Lei fee) or courier (which will add a 15 Lei fee). The courier is the fastest way to obtain the desired book. It takes just 2 days of waiting. Note: Orders that have been registered after 2:30 PM on Friday will be delivered by the courier on Monday. If readers choose the postal delivery, they will wait up to 3 to 5 days for their package to arrive.</p>
        <h3>Payment</h3>
        <p>
            Readers can pay their orders by credit card (Visa/Visa Electron, Mastercard/Maestro) or by bank transfer via this address:
        </p>
            <ul>
                <li>Blaze Ltd.</li>
                <li>CUI AM0240624</li>
                <li>Nr.Reg.Com. GG/37/33/03</li>
                <li>Headquarters: <a href="#">https://www.blaze_bookstore.com</a></li>
                <li>Bank of America</li>
            </ul>
        <h3>Product Guarantee</h3>
        <p>If the product presents dysfunctionalities (torn apart, written, damaged in any way), Blaze recommends readers to get in touch with the bookstore as soon as possible. There are two ways to deal with damaged books: either replacing the ordered book with a new one or money payback. Readers are given their money back when the damaged book cannot be replaced, i.e. doesn't have a copy at the moment.</p>
        <h3>Terms and Conditions</h3>
        <p>Blaze offers readers limited access to its contents and products. The bookstore and all of its contents are protected under the Copyright Law. Utilizing its images, graphics, brand and parts or integral articles is punishable by Law.</p>
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
        background-image: url('../assets/home.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .img-logo {
            width: 30px;
            height: 45px;
        }
            
        h2 {
            font-size: 24px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: normal;
            text-align: center;
        }
        h3 {
            font-size: 21px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: normal;
            text-align: center;
        }
        p {
            margin: 0 30px 24px;
            font-size: 17px;
            color: black; 
            font-family: Arial, Helvetica, sans-serif; 
            text-align: justify; 
            line-height: 1.8;
        }
        ul, li {
            list-style-type: none;
            font-size: 17px;
        }
        li {
            margin: 3px;
        }
        a {
            color: rgb(134, 4, 47);
        }
    }

    @media only screen and (min-width: 1024px) {
        .img-logo {
            width: 30px;
            height: 45px;
        }
            
        h2 {
            font-size: 26px;
        }
        h3 {
            font-size: 23px;
        }
        p {
            margin: 5px 50px 24px;
            padding: 0 270px;
            font-size: 18px;
        }
        ul, li {
            font-size: 18px;
        }
        li {
            margin: 5px;
        }
    }
}
</style>