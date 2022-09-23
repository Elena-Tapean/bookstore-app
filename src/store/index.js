import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { 
        id: 1,
        title: 'Books',
        collections: [
          {
            id: 1,
            title: 'First Book Collection',
            products: [
              {
                id: 1,
                title: 'C1 Book 1'
              }
            ]
          },
          {
            id: 2,
            title: 'Second Book Collection',
            products: [
              {
                id: 1,
                title: 'C2 Book 1'
              }
            ]
          }
        ] 
      },
      { 
        id: 2,
        title: 'Music',
        collections: [
          {
            id: 1,
            title: 'First Music Collection',
            products: [
              {
                id: 1,
                title:'C1 CD 1'
              }
            ]
          },
          {
            id: 2,
            title: 'Second Music Collection',
            products: [
              {
                id: 1,
                title: 'C2 CD 2'
              }
            ]
          }
        ] 
      },
    ],
    products: [],
    productsCopy: [],
    user: {},
    basket: []
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data
      state.productsCopy = [...data]
    },
    SEARCH_PRODUCTS (state, searchString) {
      state.products = state.productsCopy.filter(obj => obj.title.toLowerCase().includes(searchString.toLowerCase()))
    },
    SET_USER (state, user) {
      state.user = user;
    },
    INCREMENT_PRODUCT_COUNT (state, {id}) {
      const index = state.products.findIndex(product => product.id === id)
      const count = state.products[index].count 
      ? state.products[index].count += 1
      : 1
      const productUpdated = {...state.products[index], count}
      Vue.set(state.products, index, productUpdated)
    },
    DECREMENT_PRODUCT_COUNT (state, {id}) {
      const index = state.products.findIndex(product => product.id === id)
      const count = state.products[index].count > 0
      ? state.products[index].count -= 1
      : 0
      const productUpdated = {...state.products[index], count}
      Vue.set(state.products, index, productUpdated)
    },
    ADD_TO_BASKET (state, product) {
      state.basket.push(product)
    },
    SHOW_PRODUCT (state, {id}) {
      const index = state.products.findIndex(product => product.id === id)
      const productDetails = {...state.products[index], img, title, description, price, quantity}
      Vue.set(state.products, index, productDetails)
    },
    BORROW_BOOK (state, product) {
      
    },
    BUY_BOOK (state, product) {

    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        //simulare request catre server
        /* 
        make a network request to server
        return the books array
        create a mutation to update the state
        serve the state data to component
        */
        setTimeout(() => {
          const data = [
              {
                  id: 1,
                  img: "../assets/books/klara_and_the_sun.jpg",
                  title: "Klara and The Sun",
                  description: "A novel by Kazuo Ishiguro. The second transrealist novel that has a nonhuman protagonist.",
                  price: 52,
                  quantity: 7
              },
              {
                  id: 2,
                  img: "../assets/books/machines_like_me.jpg",
                  title: "Machines Like Me",
                  description: "A novel by Ian McEwan. The first transrealist novel to have a nonhuman protagonist.",
                  price: 55,
                  quantity: 5
              },
              {
                  id: 3,
                  img: "../assets/books/atlas_obscura.jpg",
                  title: "Atlas Obscura",
                  description: "An atlas written by a group of explorers whose mission was to discover and map every unworldly place on Earth",
                  price: 99,
                  quantity: 5
              },
              {
                  id: 4,
                  img: "../assets/books/tarot_cards.jpg",
                  title: "Tarot Cards",
                  description: "A deck of tarot cards for daily readings. Some say it is the one used in The Quarry game.",
                  price: 68,
                  quantity: 10
              },
              {
                  id: 5,
                  img: "../assets/books/the_yellow_wallpaper",
                  title: "The Yellow Wallpaper",
                  description: "A feministic hauntingly novel written by Charlotte Gilman. One day, the protagonist finds herself locked in her room by her husband. Why? Purely out of medical reasons. Soon, she realizes that she's not alone in the room.",
                  price: 24,
                  quantity: 5
              },
              {
                  id: 6,
                  img: "../assets/books/house_of_leaves",
                  title: "House of Leaves",
                  description: "A novel \"written\" by Mark Danielweski. The report of an old man found dead in his own aparment, the damnable narration of a tattoo artist who found that report and the story of the house which changes dimensions... from the inside.",
                  price: 89,
                  quantity: 2
              }
          ]
          commit('SET_PRODUCTS', data)
        }, 1000)
      } catch (err) {
      }
    },
    async login ({commit}, user) {
      try {
        //cum se face de pe server
        //const {data} = await axios.post('/api/login', user)
        //commit('SET_USER', data)
        //await router.push('/')
        
        //aici jos mock
        setTimeout(() => {
          commit('SET_USER', {
            name: 'Elena',
            role: 'member'
          })
          router.push('/')
        }, 1000)
      } catch (err) {
        console.log(err)
        //daca da eroare datele de pe server, scriem pe UI
        //username incorrect
      }
    },
    async logout ({commit}) {
      commit('SET_USER', {})
    },
    async borrow ({commit}) { 
      setTimeout(() => {
        commit('BORROW_BOOK', {})
      })
    },
    async buy ({commit}) { 
      setTimeout(() => {
        commit('BUY_BOOK', {})
      })
    }
  },
  modules: {
  }
})
