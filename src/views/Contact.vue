<template>
    <main class="contact-info main-grid">
      <h2>Let's get in touch</h2>
      <p>Send the message below and our operator will get in touch with you very soon.</p>
      <form>
        <label>Name:</label>
        <br/>
        <input type="text" name="name" />
        <br/>
        <label>Email:</label>
        <br/>
        <input type="email" name="email" />
        <br/>
        <label>Telephone:</label>
        <br/>
        <input type="telephone" name="telephone" />
        <br/>
        <label>Message:</label>
        <br/>
        <textarea name="textarea" />
        <br/>
        <button @click={handleSubmit}>SEND</button>
      </form>
    </main>
</template>

<script>
  export default {
      name: 'Contact',
      data () {
        return {
        }
      },
      methods: {
        handleSubmit (ev) {
          ev.preventDefault
        }
      }
  }
</script>

<style lang="scss">
.contact-info {
  @media only screen and (min-width: 0) {
    height: 100%;
    background-image: url('../assets/home.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2 {
      font-size: 25px;
      color: black;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    p {
      margin: 0 30px 24px;
      font-size: 17px;
      color: black; 
      font-family: Arial, Helvetica, sans-serif; 
      text-align: justify; 
      line-height: 1.8;
    }
    form {
      margin: 0 auto;
      margin-bottom: 24px;
    }
    label {
      font-size: 17px;
      color: black;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    input {
      margin: 10px;
      padding: 5px;
      width: 170px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    textarea {
      margin: 10px;
      margin-bottom: 10px;
      width: 250px;
      height: 150px;
      border: 1px solid grey;
      border-radius: 5px;
    }
    button {
        padding: 7px 10px;
        background: linear-gradient(mediumseagreen, green);
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 5px;
    }
    button:hover {
        background: linear-gradient(green, mediumseagreen);
    }
  }

  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: 25px;
    }
    p {
      text-align: center;
      font-size: 18px;
    }
    form {
      margin: 0 auto;
      margin-bottom: 24px;
    }
    label {
      font-size: 18px;
    }
    input {
      margin: 10px;
      padding: 5px;
      width: 170px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    button {
      padding: 10px;
      font-size: 17px;
    }
  }
}
</style>