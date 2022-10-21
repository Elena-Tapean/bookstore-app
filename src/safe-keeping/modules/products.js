export const state = function () {
    return {
        products: [
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
        ],
        collections: {
            crime: ['C1', 'C2'],
            horror: ['H1', 'H2'],
            poetry: ['P1', 'P2']
        }
    }
}

export const getters = {
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
}