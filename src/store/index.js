import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genres: [
      {
        id: 1,
        title: 'Crime',
        collections: [
          {
            id: 1,
            title: 'Agatha Christie',
            products: [
              {
                id: 1,
                title: '4.50 from Paddington',
                description: 'Two trains running parralel. In one, a murder takes place. In the second, a witness sees it all, but no one believes her. The eyewitness turns to Miss Marple to solve the case.',
                price: 35,
                quantity: 1
              },
              {
                id: 2,
                title: 'Cards on the Table',
                description: 'Invited to a party, every guest stays in room playing bridge. The host is in the living room all alone. No one sees anything, nobody hears anything, yet the host is dead. How did it happen?',
                price: 35,
                quantity: 1
              }
            ]
          },
          {
            id: 2,
            title: 'Raymond Chandler',
            products: [
              {
                id: 1,
                title: 'Farewell, My Lovely',
                description: 'Detective Marlow is on the case again. This time the gangsters have a traitor whom they try desperately to find. A seductive lady appears out of nowhere. Neither Marlowe, nor anybody else can understand what her real motif is.',
                price: 38,
                quantity: 1
              },
              {
                id: 2,
                title: 'The Long Goodbye',
                description: 'One of Raymond Chandler\'s famous novels. A wealthy man seeks Detective Marlowe to find out what has happened to his wife. Later on, as the investigation goes, the man commit suicide and the secrets are no longer secrets.',
                price: 30,
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Horror',
        collections: [
          {
            id: 1,
            title: 'Stephen King',
            products: [
              {
                id: 1,
                title: 'Pet Sematary',
                description: 'There\'s an old cemetery in the ancient Native grounds. It is said it has supernatural powers to bring back the dead. But is it worth it? Is the soul of my beloved still inside their own body? Or an entity barely waiting to get possession over it? A family-friendly Until Dawn. Read with the lights off.',
                price: 55,
                quantity: 1
              },
              {
                id: 2,
                title: 'IT',
                description: 'One of Stephen King\'s famous novels. IT has terrified more children than any book in the history of mankind. Safe for Anthony Hopkin\'s Hannibal Lector.',
                price: 58,
                quantity: 1
              }
            ]
          },
          {
            id: 2,
            title: 'Charlotte Perkins Gilman',
            products: [
              {
                id: 1,
                title: 'The Yellow Wallpaper',
                description: 'A Victorian feminist novel about a wealthy man and his wife. Because of some peculiar medical advice, the man seals his wife in her room. Soon after, she realizes that she\'s not alone in the room.',
                price: 28,
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Poetry',
        collections: [
          {
            id: 1,
            title: 'William Butler Yeats',
            products: [
              {
                id: 1,
                title: 'Easter Rising 1916',
                description: 'Easter of 1916 was not a time for celebration. The Irish wished for freedom, yet on such a hopeful day they were slain by the British.',
                price: 25,
                quantity: 1
              },
              {
                id: 2,
                title: 'The Second Coming',
                description: 'The poem famous for its visionary outlook on the modern world and the coming of the Antichrist.',
                price: 29,
                quantity: 1 
              },
              {
                id: 3,
                title: 'The Winding Stairs',
                description: 'An early example of W.B. Yeats\'s late-Romantic poetry with inspiration taken from one of the poet\'s most belove locations, Thoor Ballylee.',
                price: 18,
                quantity: 1
              },
              {
                id: 4,
                title: 'A Vision',
                description: 'Written in 1925, the book contains famous poems alongside astrological charts with the poet\'s authentic illustrations. Now readers can calculate and craft their own chart and see in what Destiny were they born into.',
                price: 55,
                quantity: 1
              }
            ]
          },
          {
            id: 2,
            title: 'Ezra Pound',
            products: [
              {
                id: 1,
                title: 'The Cantos',
                description: 'A life-long composition, the Father of English Modernism expresses everything and nothing at the same time. A complete work with adnotations from his biographers, this book can help students and professors alike in their literary pursuit.',
                price: 55,
                quantity: 1
              }
            ]
          }
        ]
      }
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
    BORROW_BOOK (state, product) {
      
    },
    BUY_BOOK (state, product) {

    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout(() => {
          const data = [
                      {
                        id: 1,
                        title: '4.50 from Paddington',
                        description: 'Two trains running parralel. In one, a murder takes place. In the second, a witness sees it all, but no one believes her. The eyewitness turns to Miss Marple to solve the case.',
                        price: 35,
                        quantity: 1
                      },
                      {
                        id: 2,
                        title: 'Cards on the Table',
                        description: 'Invited to a party, every guest stays in room playing bridge. The host is in the living room all alone. No one sees anything, nobody hears anything, yet the host is dead. How did it happen?',
                        price: 35,
                        quantity: 1
                      },
                      {
                        id: 1,
                        title: 'Farewell, My Lovely',
                        description: 'Detective Marlow is on the case again. This time the gangsters have a traitor whom they try desperately to find. A seductive lady appears out of nowhere. Neither Marlowe, nor anybody else can understand what her real motif is.',
                        price: 38,
                        quantity: 1
                      },
                      {
                        id: 2,
                        title: 'The Long Goodbye',
                        description: 'One of Raymond Chandler\'s famous novels. A wealthy man seeks Detective Marlowe to find out what has happened to his wife. Later on, as the investigation goes, the man commit suicide and the secrets are no longer secrets.',
                        price: 30,
                        quantity: 1
                      },
                      {
                        id: 1,
                        title: 'Pet Sematary',
                        description: 'There\'s an old cemetery in the ancient Native grounds. It is said it has supernatural powers to bring back the dead. But is it worth it? Is the soul of my beloved still inside their own body? Or an entity barely waiting to get possession over it? A family-friendly Until Dawn. Read with the lights off.',
                        price: 55,
                        quantity: 1
                      },
                      {
                        id: 2,
                        title: 'IT',
                        description: 'One of Stephen King\'s famous novels. IT has terrified more children than any book in the history of mankind. Safe for Anthony Hopkin\'s Hannibal Lector.',
                        price: 58,
                        quantity: 1
                      },
                      {
                        id: 1,
                        title: 'The Yellow Wallpaper',
                        description: 'A Victorian feminist novel about a wealthy man and his wife. Because of some peculiar medical advice, the man seals his wife in her room. Soon after, she realizes that she\'s not alone in the room.',
                        price: 28,
                        quantity: 1
                      },
                      {
                        id: 1,
                        title: 'Easter Rising 1916',
                        description: 'Easter of 1916 was not a time for celebration. The Irish wished for freedom, yet on such a hopeful day they were slain by the British.',
                        price: 25,
                        quantity: 1
                      },
                      {
                        id: 2,
                        title: 'The Second Coming',
                        description: 'The poem famous for its visionary outlook on the modern world and the coming of the Antichrist.',
                        price: 29,
                        quantity: 1  
                      },
                      {
                        id: 3,
                        title: 'The Winding Stairs',
                        description: 'An early example of W.B. Yeats\'s late-Romantic poetry with inspiration taken from one of the poet\'s most belove locations, Thoor Ballylee.',
                        price: 18,
                        quantity: 1
                      },
                      {
                        id: 4,
                        title: 'A Vision',
                        description: 'Written in 1925, the book contains famous poems alongside astrological charts with the poet\'s authentic illustrations. Now readers can calculate and craft their own chart and see in what Destiny were they born into.',
                        price: 55,
                        quantity: 1
                      }, 
                      {
                        id: 1,
                        title: 'The Cantos',
                        description: 'A life-long composition, the Father of English Modernism expresses everything and nothing at the same time. A complete work with adnotations from his biographers, this book can help students and professors alike in their literary pursuit.',
                        price: 55,
                        quantity: 1
                      }
                    ]
          commit('SET_PRODUCTS', data)
        }, 1000)
      } catch (err) {
      }
    },
    async login ({commit}, user) {
      try {
        setTimeout(() => {
          commit('SET_USER', {
            name: 'Elena',
            role: 'member'
          })
          router.push('/')
        }, 1000)
      } catch (err) {
        console.log(err)
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
