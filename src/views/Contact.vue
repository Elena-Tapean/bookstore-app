<template>
    <main class="contact-info main-grid">
      <h1>Contact</h1>
      <img src="../assets/contact.jpg" alt="bookstore contact page" />
      <p>We have a solely online presence.</p>
      <p>Borrow, read and buy books at the comfort of your home. Once bought, you obtain the full ebook version of the book.</p>
      <p>If you wish to receive updates or news about what we do, please enter your email below:</p>
      <h3>Your email:</h3>
      <input type="email" id="email" placeholder="name@mail.com" />
      <button @Click={handleSubmit}>Submit</button>
    </main>
</template>

<script>
  export default {
      name: 'Contact'
  }

  function handleSubmit (ev) {
    ev.preventDefault
  }
</script>

<style lang="scss">
.contact-info {
  @media only screen and (min-width: 0) {
    height: 100%;

    img {
      width: 100%;
      height: 300px;
    }
    h3 {
      font-size: 16px;
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
    input {
      margin-bottom: 30px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    button {
      padding: 5px;
      margin-left: 15px;
      background-color: #3CB371;
      color: white;
      font-size: 15px;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>