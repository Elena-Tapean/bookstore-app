import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
          id: 1,
          name: '4.50 from Paddington',
          img: require('../assets/books/paddington-train.jpg'),
          collectionId: 'Crime',
          collectionName: 'C1',
          description: 'Two trains running parallel. A crime is committed in the first. In the second a witness saw the killer, but no one believes her. It\'s time for Miss Marple.',
          price: 35,
          quantity: 5
      },
      {
          id: 2,
          name: 'Cards on the Table',
          img: require('../assets/books/cards-table.jpg'),
          collectionId: 'Crime',
          collectionName: 'C1',
          description: 'Every guest plays bridge in separate rooms while the host relaxes in the living room. How was it possible for the host to be murdered when every guest had their eyes focused on the game?',
          price: 35,
          quantity: 5
      },
      {
          id: 3,
          name: 'Farewell, My Lovely',
          img: require('../assets/books/farewell.jpg'),
          collectionId: 'Crime',
          collectionName: 'C2',
          description: 'What seems as a usual case of gangsters and crime turns out to be more of a twist. Detective Marlowe is forced to strike a deal with the toughest of the gangsters to solve the case and find his molly.',
          price: 30,
          quantity: 5
      },
      {
          id: 4,
          name: 'The Long Goodbye',
          img: require('../assets/books/goodbye.jpg'),
          collectionId: 'Crime',
          collectionName: 'C2',
          description: 'A wealthy man is desperate to find his missing wife. Detective Marlowe takes up the case. During his investigation, the man commits suicide and Marlowe is left with secrets never heard of before.',
          price: 28,
          quantity: 5
      },
      {
          id: 5,
          name: 'Pet Sematary',
          img: require('../assets/books/pet-sematary.jpg'),
          collectionId: 'Horror',
          collectionName: 'H1',
          description: 'A family moves to rural Maine for a quiet life away from the city. After a while the Creeds hear of strange stories of animals and people brought back to life with the aid of an ancient cemetery in the Native lands. When the family\'s baby boy dies, the father is left to choose: to accept death as a natural way of life or bring the beloved child back in his life?',
          price: 55,
          quantity: 5
      },
      {
          id: 6,
          name: 'IT',
          img: require('../assets/books/it.jpg'),
          collectionId: 'Horror',
          collectionName: 'H1',
          description: 'No one would think that a clown might inspire fear and horror. But here it is. IT, the famous book by Stephen King, is now re-published with illustrations coming from creative artists that have read the book and felt inspired. Read, look and feel fear.',
          price: 60,
          quantity: 5
      },
      {
          id: 7,
          name: 'The Yellow Wallpaper',
          img: require('../assets/books/wallpaper.jpg'),
          collectionId: 'Horror',
          collectionName: 'H2',
          description: 'A Victorian husband heeds the advice of the doctor and isolates his wife in her bedroom. The woman feministically contemplates on how quickly men think of their women as being hysterical when they are but a bit ill. Soon enough she finds out that she\'s not the only one in her room.',
          price: 18,
          quantity: 3
      },
      {
          id: 8,
          name: 'The Second Coming',
          img: require('../assets/books/second-coming.jpg'),
          collectionId: 'Poetry',
          collectionName: 'P1',
          description: 'A visionary poem about the coming of the Antichrist and the destruction of the Modern world through the reverse of order. Students and professors alike may find the volume at hand a primary source for their thesis papers.',
          price: 50,
          quantity: 5
      },
      {
          id: 9,
          name: 'A Vision',
          img: require('../assets/books/vision.jpg'),
          collectionId: 'Poetry',
          collectionName: 'P1',
          description: 'A magical volume comprised of some of Yeats\' greatest later poems and his illustrative philosophy of the 28 personalities based on the phases of the moon.',
          price: 80,
          quantity: 5
      },
      {
          id: 10,
          name: 'The Cantos',
          img: require('../assets/books/cantos.jpg'),
          collectionId: 'Poetry',
          collectionName: 'P2',
          description: 'A life-long poem written between 1915 and 1962. It contains collections of memories, episodes of life and fragments of thought illustrated in a Imagist, Vorticist and Modern manner. Students that study Ezra Pound\'s work can find the book at hand useful for their thesis papers.',
          price: 80,
          quantity: 5
      }
    ],
    collections: {
      crime: ['C1', 'C2'],
      horror: ['H1', 'H2'],
      poetry: ['P1', 'P2']
    },
    genres: [
      {
        id: 1,
        name: 'General Fiction',
        img: require('../assets/genres/general_fiction.jpg'),
        description: 'General Fiction (also known as Commercial fiction, Mainstream fiction, and Popular fiction) is one of the two main categories of fiction. In general, it is more plot-driven than character-driven, with narratives that tend to be distinct and easily understandable. <br/> One of its most important characteristics is that its stories can be classified into a specific literary genre. As such, they use themes, tropes, techniques, styles, and tones that set them apart from stories in other genres. <br/> Examples of popular general fiction genres include thriller, fantasy, science fiction, crime, horror, and romance. Because of this, general fiction reaches a broad range of audiences that primarily read it for entertainment. Not only is this fiction easy to get into, but readers can quickly immerse themselves into a story through familiar genre elements.'
      },
      {
        id: 2,
        name: 'Literary Fiction',
        img: require('../assets/genres/literary_fiction.jpg'),
        description: 'In contrast to general fiction, literary fiction is any work of fiction that\'s considered to have literary merit—the quality of a story to be considered art. <br/> It\'s considered by some people to be more intelligent than its counterpart. There\'s more focus on the style and characterization, with its audience reading for its artistry and depth rather than just for entertainment. <br/> Literary fiction often takes on grand or complicated subjects such as philosophical musings, social issues, and political arguments. <br/> This, combined with its writing styles and frequent experimentation of literary forms, can make it somewhat difficult to digest and classify into any genre.'
      },
      {
        id: 3,
        name: 'Thriller',
        img: require('../assets/genres/thriller.jpg'),
        description: 'Thriller is a genre of literature. Thrillers are dark, engrossing, and suspenseful plot-driven stories. They very seldom include comedic elements. Any novel can generate excitement, suspense, interest, and exhilaration, but because these are the primary goals of the thriller genre, thriller writers have laser-focused expertise in keeping a reader interested.'
      },
      {
        id: 4,
        name: 'Crime',
        img: require('../assets/genres/crime.jpg'),
        description: 'The crime fiction genre deals with crimes. Beyond that simple definition, it deals with detection of crimes, criminals, and their motives. <br/> A crime fiction story has a crime (usually a murder), an investigation of the crime, and ends with the outcome of the investigation. Most often the outcome ends with the criminal\'s arrest or death.'
      },
      {
        id: 5,
        name: 'Science Fiction',
        img: require('../assets/genres/science-fiction.jpg'),
        description: 'Science fiction (sometimes shortened to Sci-Fi or SF) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, extraterrestrial life, sentient artificial intelligence, cybernetics, certain forms of immortality (like mind uploading), and the singularity. <br/> Science fiction, in literature, film, television, and other media, has become popular and influential over much of the world, it has been called the \"literature of ideas\", and often explores the potential consequences of scientific, social, and technological innovations. It is also often said to inspire a \"sense of wonder\". Besides providing entertainment, it can also criticize present-day society and explore alternatives.'
      },
      {
        id: 6,
        name: 'Horror',
        img: require('../assets/genres/horror.jpg'),
        description: 'Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction. <br/> Horror intends to create an eerie and frightening atmosphere for the reader. Often the central menace of a work of horror fiction can be interpreted as a metaphor for larger fears of a society. <br/> Prevalent elements of the genre include ghosts, demons, vampires, werewolves, ghouls, the Devil, witches, monsters, extraterrestrials, dystopian and post-apocalyptic worlds, serial killers, cannibalism, psychopaths, cults, dark magic, satanism, the macabre, gore and torture.'
      },
      {
        id: 7,
        name: 'Romance',
        img: require('../assets/genres/romance.jpg'),
        description: 'In the strictest academic terms, a romance is a narrative genre in literature that involves a mysterious, adventurous, or spiritual story line where the focus is on a quest that involves bravery and strong values, not always a love interest. <br/> However, modern definitions of romance also include stories that have a relationship issue as the main focus.'
      },
      {
        id: 8,
        name: 'Fantasy',
        img: require('../assets/genres/fantasy.jpg'),
        description: 'Fantasy is a genre of literature that features magical and supernatural elements that do not exist in the real world. Although some writers juxtapose a real-world setting with fantastical elements, many create entirely imaginary universes with their own physical laws and logic and populations of imaginary races and creatures. Speculative in nature, fantasy is not tied to reality or scientific fact.'
      },
      {
        id: 9,
        name: 'Young Adult',
        img: require('../assets/genres/young-adult.jpg'),
        description: 'Young adult fiction is a category of fiction written for readers from 12 to 18 years of age. While the genre is targeted at adolescents, approximately half of Young Adult readers are adults. <br/> The subject matter and genres of Young Adult correlate with the age and experience of the protagonist. The genres available in Young Adult are expansive and include most of those found in adult fiction. <br/> Common themes related to Young Adult include friendship, first love, relationships, and identity. Stories that focus on the specific challenges of youth are sometimes referred to as problem novels or coming-of-age novels. Young Adult fiction was developed to soften the transition between children\'s novels and adult literature.'
      },
      {
        id: 10,
        name: 'Comic Books',
        img: require('../assets/genres/comic-books.jpg'),
        description: 'A comic book, also called comicbook, comic magazine or simply comic, is a publication that consists of comics art in the form of sequential juxtaposed panels that represent individual scenes. Panels are often accompanied by descriptive prose and written narrative, usually, dialogue contained in word balloons emblematic of the comics art form. <br/> The term \"comic book\" derives from a compilation of comic strips of a humorous tone; however, this practice was replaced by featuring stories of all genres, usually not humorous in tone.'
      },
      {
        id: 11,
        name: 'Travel',
        img: require('../assets/genres/travel.jpg'),
        description: 'The term \"travel\" originates from the Old French word travail. Travel writing is a genre that has, as its focus, accounts of real or imaginary places. The genre encompasses a number of styles that may range from the documentary to the evocative, from literary to journalistic, and from the humorous to the serious. <br/> Travel writing is often associated with tourism, and includes works of an ephemeral nature such as guide books and reviews, with the intent being to educate the reader about the destination, provide helpful advice for those visiting the destination, and inspire readers to travel to the destination. <br/> Travel writing has also been produced by other types of travelers, such as military officers, missionaries, explorers, scientists, pilgrims, and migrants.'
      },
      {
        id: 12,
        name: 'Nature',
        img: require('../assets/genres/nature.jpg'),
        description: 'This genre is applied to titles that explore the different aspects of nature and the environment. Subjects include natural environments (rainforest, desert, mountains, etc.), animals, environmental science (pollution, recycling, conservation, etc.), and weather. This genre is used when an overview or general look at a particular aspect of nature is presented. <br/> More detailed scientific explanations of similiar subjects would generally use the science genre.'
      }
    ],
    authors: [
      {
        id: 'Agatha Christie',
        name: 'Agatha Christie'
      },
      {
        id: 'Raymond Chandler',
        name: 'Raymond Chandler'
      },
      {
        id: 'Stephen King',
        name: 'Stephen King'
      },
      {
        id: 'Chalotte Perkins Gilman',
        name: 'Charlotte Perkins Gilman'
      },
      {
        id: 'William Butler Yeats',
        name: 'William Butler Yeats'
      },
      {
        id: 'Ezra Pound',
        name: 'Ezra Pound'
      }
    ],
    isModal: false,
    products: [],
    productsCopy: [],
    user: {},
    basket: []
  },
  getters: {
    collections: state => {
      const data = state.products.reduce((acc, product) => {
        if (!acc[product.collectionId]) {
          acc[product.collectionId] = []
        }
        if (!acc[product.collectionId].includes(product.collectionName)) {
          acc[product.collectionId].push(product.collectionName)
        }
        return acc
      }, {})
      return data
    }
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
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              name: '4.50 from Paddington',
              collectionId: 'Crime',
              collectionName: 'C1',
              description: 'Two trains running parallel. A crime is committed in the first. In the second a witness saw the killer, but no one believes her. It\'s time for Miss Marple.',
              price: 35,
              quantity: 5
          },
          {
              id: 2,
              name: 'Cards on the Table',
              collectionId: 'Crime',
              collectionName: 'C1',
              description: 'Every guest plays bridge in separate rooms while the host relaxes in the living room. How was it possible for the host to be murdered when every guest had their eyes focused on the game?',
              price: 35,
              quantity: 5
          },
          {
              id: 3,
              name: 'Farewell, My Lovely',
              collectionId: 'Crime',
              collectionName: 'C2',
              description: 'What seems as a usual case of gangsters and crime turns out to be more of a twist. Detective Marlowe is forced to strike a deal with the toughest of the gangsters to solve the case and find his molly.',
              price: 30,
              quantity: 5
          },
          {
              id: 4,
              name: 'The Long Goodbye',
              collectionId: 'Crime',
              collectionName: 'C2',
              description: 'A wealthy man is desperate to find his missing wife. Detective Marlowe takes up the case. During his investigation, the man commits suicide and Marlowe is left with secrets never heard of before.',
              price: 28,
              quantity: 5
          },
          {
              id: 5,
              name: 'Pet Sematary',
              collectionId: 'Horror',
              collectionName: 'H1',
              description: 'A family moves to rural Maine for a quiet life away from the city. After a while the Creeds hear of strange stories of animals and people brought back to life with the aid of an ancient cemetery in the Native lands. When the family\'s baby boy dies, the father is left to choose: to accept death as a natural way of life or bring the beloved child back in his life?',
              price: 55,
              quantity: 5
          },
          {
              id: 6,
              name: 'IT',
              collectionId: 'Horror',
              collectionName: 'H1',
              description: 'No one would think that a clown might inspire fear and horror. But here it is. IT, the famous book by Stephen King, is now re-published with illustrations coming from creative artists that have read the book and felt inspired. Read, look and feel fear.',
              price: 60,
              quantity: 5
          },
          {
              id: 7,
              name: 'The Yellow Wallpaper',
              collectionId: 'Horror',
              collectionName: 'H2',
              description: 'A Victorian husband heeds the advice of the doctor and isolates his wife in her bedroom. The woman feministically contemplates on how quickly men think of their women as being hysterical when they are but a bit ill. Soon enough she finds out that she\'s not the only one in her room.',
              price: 18,
              quantity: 3
          },
          {
              id: 8,
              name: 'The Second Coming',
              collectionId: 'Poetry',
              collectionName: 'P1',
              description: 'A visionary poem about the coming of the Antichrist and the destruction of the Modern world through the reverse of order. Students and professors alike may find the volume at hand a primary source for their thesis papers.',
              price: 50,
              quantity: 5
          },
          {
              id: 9,
              name: 'A Vision',
              collectionId: 'Poetry',
              collectionName: 'P1',
              description: 'A magical volume comprised of some of Yeats\' greatest later poems and his illustrative philosophy of the 28 personalities based on the phases of the moon.',
              price: 80,
              quantity: 5
          },
          {
              id: 10,
              name: 'The Cantos',
              collectionId: 'Poetry',
              collectionName: 'P2',
              description: 'A life-long poem written between 1915 and 1962. It contains collections of memories, episodes of life and fragments of thought illustrated in a Imagist, Vorticist and Modern manner. Students that study Ezra Pound\'s work can find the book at hand useful for their thesis papers.',
              price: 80,
              quantity: 5
          }
        ]
          commit('SET_PRODUCTS', data)
        }, 1000)
      } catch (err) {
        console.log(err)
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
  },
  modules: {
  }
})
