<template>
    <main class="contact-info main-grid">
      <h1>Contact</h1>
      <div class="min-zero">
        <img src="../assets/home.jpg" alt="bookstore contact page" />
        <p>
          We have a solely online presence. 
          Borrow, read and buy books at the comfort of your home. Once bought, you obtain the full ebook version of the book.
          If you wish to receive updates or news about what we do, please enter your email below:
        </p>
        <h3>Newsletter</h3>
        <input type="email" id="email" placeholder="name@mail.com" />
        <button @Click={handleSubmit}>Submit</button>
      </div>
      <div class="flex-div">
        <p>
          We have a solely online presence.
          Borrow, read and buy books at the comfort of your home. Once bought, you obtain the full ebook version of the book.
          If you wish to receive updates or news about what we do, please enter your email below:
        <br/>
        <label>Newsletter</label>
        <br/> 
        <input type="email" id="email" placeholder="name@mail.com" />
        <button @Click={handleSubmit}>Submit</button>
        </p>
        <img src="../assets/home.jpg" alt="bookstore contact page" />
      </div>
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

    .min-zero {
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
      button:hover {
        background-color: #6ad299;
        color: black;
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
      label {
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
      }
      input {
        padding: 7px;
        margin-left: 5px;
        width: 250px;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid grey;
      }
      button {
        padding: 5px;
        margin-left: 15px;
        background-color: #3CB371;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 5px;
      }
      button:hover {
        background-color: #6ad299;
        color: black;
        cursor: pointer;
      }
    }
  }
}
</style>