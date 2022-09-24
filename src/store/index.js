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
                title: '4.50 from Paddington'
              },
              {
                id: 2,
                title: 'Cards on the Table'
              }
            ]
          },
          {
            id: 2,
            title: 'Raymond Chandler',
            products: [
              {
                id: 1,
                title: 'Farewell, My Lovely'
              },
              {
                id: 2,
                title: 'The Long Goodbye'
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
                title: 'Pet Sematary'
              },
              {
                id: 2,
                title: 'IT'
              },
              {
                id: 3,
                title: 'Carrey'
              }
            ]
          },
          {
            id: 2,
            title: 'Charlotte Perkins Gilman',
            products: [
              {
                id: 1,
                title: 'The Yellow Wallpaper'
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
                title: 'Easter Rising 1916'
              },
              {
                id: 2,
                title: 'The Second Coming' 
              },
              {
                id: 3,
                title: 'The Winding Stairs'
              },
              {
                id: 4,
                title: 'A Vision'
              }
            ]
          },
          {
            id: 2,
            title: 'Ezra Pound',
            products: [
              {
                id: 1,
                title: 'The Cantos'
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
    SHOW_PRODUCT (state, {id}) {
      const index = state.products.findIndex(product => product.id === id)
      const productDetails = {...state.products[index], img, title, description, price, quantity}
      Vue.set(state.products, index, productDetails)
    },
    BORROW_BOOK (state, product) {
      
    },
    BUY_BOOK (state, product) {

    },
    GO_BACK () {
      history.back()
    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout(() => {
          const data = [
                      {
                        id: 1,
                        title: '4.50 from Paddington'
                      },
                      {
                        id: 2,
                        title: 'Cards on the Table'
                      },
                      {
                        id: 1,
                        title: 'Farewell, My Lovely'
                      },
                      {
                        id: 2,
                        title: 'The Long Goodbye'
                      },
                      {
                        id: 1,
                        title: 'Pet Sematary'
                      },
                      {
                        id: 2,
                        title: 'IT'
                      },
                      {
                        id: 3,
                        title: 'Carrey'
                      },
                      {
                        id: 1,
                        title: 'The Yellow Wallpaper'
                      },
                      {
                        id: 1,
                        title: 'Easter Rising 1916'
                      },
                      {
                        id: 2,
                        title: 'The Second Coming' 
                      },
                      {
                        id: 3,
                        title: 'The Winding Stairs'
                      },
                      {
                        id: 4,
                        title: 'A Vision'
                      }, 
                      {
                        id: 1,
                        title: 'The Cantos'
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
    },
    async go_back({commit}) {
      setTimeout(() => {
        commit('GO_BACK', {})
      })
    }
  },
  modules: {
  }
})
