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
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Two trains running parallel. A crime is committed in the first. In the second a witness saw it all, but no one believes her. It\'s time for Miss Marple to solve the case.</p>',
        price: 35,
        quantity: 5
    },
    {
        id: 2,
        name: 'Cards on the Table',
        img: require('../assets/books/cards-table.jpg'),
        collectionId: 'Crime',
        collectionName: 'C1',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Every guest plays bridge in separate rooms while the host relaxes in the living room. How was it possible for the host to be murdered when every guest had their eyes focused on the game?</p>',
        price: 35,
        quantity: 5
    },
    {
        id: 3,
        name: 'Farewell, My Lovely',
        img: require('../assets/books/farewell.jpg'),
        collectionId: 'Crime',
        collectionName: 'C2',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> What seems as a usual case of gangsters and crime turns out to be more of a twist. Detective Marlowe is forced to strike a deal with the toughest of the gangsters to solve the case and find his missing molly.</p>',
        price: 30,
        quantity: 5
    },
    {
        id: 4,
        name: 'The Long Goodbye',
        img: require('../assets/books/goodbye.jpg'),
        collectionId: 'Crime',
        collectionName: 'C2',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A wealthy man is desperate to find his missing wife. Detective Marlowe takes up the case. During his investigation, the man commits suicide and Marlowe is left with secrets never heard of before.</p>',
        price: 28,
        quantity: 5
    },
    {
        id: 5,
        name: 'Pet Sematary',
        img: require('../assets/books/pet-sematary.jpg'),
        collectionId: 'Horror',
        collectionName: 'H1',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A family moves to rural Maine for a quiet life away from the city. After a while the Creeds hear of strange stories of animals and people brought back to life with the aid of an ancient cemetery in the Native lands. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> When the family\'s baby boy dies, the father is feels that he needs to make a decision: to accept death as a natural way of life or to bring the beloved child back to his life?</p>',
        price: 55,
        quantity: 5
    },
    {
        id: 6,
        name: 'IT',
        img: require('../assets/books/it.jpg'),
        collectionId: 'Horror',
        collectionName: 'H1',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> No one would think that a clown might inspire fear and horror. But here it is. IT, the famous book by Stephen King, is now re-published with illustrations coming from creative artists that have read the book and felt inspired. Read, look and feel fear. </p>',
        price: 60,
        quantity: 5
    },
    {
        id: 7,
        name: 'The Yellow Wallpaper',
        img: require('../assets/books/wallpaper.jpg'),
        collectionId: 'Horror',
        collectionName: 'H2',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A Victorian husband heeds the advice of the doctor and isolates his wife in her bedroom. The woman feministically contemplates on how quickly men think of their women as being hysterical when they are but a bit ill. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Soon enough she finds out that she\'s not alone in her room.</p>',
        price: 18,
        quantity: 3
    },
    {
        id: 8,
        name: 'The Second Coming',
        img: require('../assets/books/second-coming.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P1',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A visionary poem about the coming of the Antichrist and the destruction of the Modern world through the reverse of order. Students and professors alike may find the volume at hand a primary source for their thesis papers.</p>',
        price: 50,
        quantity: 5
    },
    {
        id: 9,
        name: 'A Vision',
        img: require('../assets/books/vision.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P1',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A magical volume comprised of some of Yeats\' greatest later poems and his illustrative philosophy of the 28 personalities based on the phases of the moon.</p>',
        price: 80,
        quantity: 5
    },
    {
        id: 10,
        name: 'The Cantos',
        img: require('../assets/books/cantos.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P2',
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A life-long poem written between 1915 and 1962. It contains collections of memories, episodes of life and fragments of thought illustrated in a Imagist, Vorticist and Modern manner. Students that study Ezra Pound\'s work can find the book at hand useful for their thesis papers.</p>',
        price: 80,
        quantity: 5
    },
    {
      id: 11,
      name: 'Van Richten\'s Guide to Vampires',
      img: require('../assets/books/vampires.jpg'),
      collectionId: 'Young Adult',
      collectionName: 'YA1',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A guide to vampires written by the illustruous vampire hunter Rudolph Van Richten of the Dungeons and Dragons\'s franchise.</p>',
      price: 55,
      quantity: 5
    },
    {
      id: 12,
      name: 'Atlas Obscura',
      img: require('../assets/books/atlas_obscura.jpg'),
      collectionId: 'Travel',
      collectionName: 'TRA1',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A travelogue to exotic and mysterious places around the world. A group of young people embark on a journey to discover, catalogue and admire the awe-inspiring places of our planet.</p>',
      price: 100,
      quantity: 5
    },
    {
      id: 13,
      name: 'Tarot Cards',
      img: require('../assets/books/tarot_cards.jpg'),
      collectionId: 'General Fiction',
      collectionName: 'GF1',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Due to the release of The Quarry, a complex decision-making horror game, the tarot cards are once more the center of interest in what seems to be the endless quest to understanding destiny.</p>',
      price: 80,
      quantity: 5
    },
    {
      id: 14,
      name: 'Klara and the Sun',
      img: require('../assets/books/klara_and_the_sun.jpg'),
      collectionId: 'Literary Fiction',
      collectionName: 'LF1',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> In the near future, robots would take the role of mannechins. They will be put on shop displays to delight passerbys. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> On a particular sunny day, Klara (one of the robots) awakes and contemplates the view before her. The Sun is her best friend for it is the celestial star that gives her power to move, to feel, to interact.</p>',
      price: 54,
      quantity: 5
    },
    {
      id: 15,
      name: 'Machines Like Me',
      img: require('../assets/books/machines_like_me.jpg'),
      collectionId: 'Literary Fiction',
      collectionName: 'LF2',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The first trans-realist novel of the post-postmodern world, the novel centers around the idea that robots would be the next human beings.</p>',
      price: 54,
      quantity: 5
    },
    {
      id: 16,
      name: 'House of Leaves',
      img: require('../assets/books/house_of_leaves.jpg'),
      collectionId: 'Horror',
      collectionName: 'H3',
      description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A complex book about a tattoo artist obsessed with the death of his neighbour, a mysterious report that no one seems to know, a photographer exploring a rural house, a family that lives in that house, the so-called truth that the tattoo artist figures out while reading that report, the last days of the photographer inside that house and how the house seems to get bigger from the inside than the outside. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> This book explores the possibility that reality is not what it seems and that space is just another unknown concept as much as time. The book is crazier than James Joyce\'s Ulysses, but it is appreciated among the gamers that know about The Backrooms. </p>',
      price: 74,
      quantity: 2
    }
    ],
    collections: {
      crime: ['C1', 'C2'],
      horror: ['H1', 'H2', 'H3'],
      poetry: ['P1', 'P2'],
      young: ['YA1'],
      travel: ['TRA1'],
      general: ['GF1'],
      literary: ['LF1', 'LF2'],
    },
    genres: [
      {
        id: 1,
        name: 'General Fiction',
        img: require('../assets/genres/general_fiction.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> General Fiction (also known as Commercial fiction, Mainstream fiction, and Popular fiction) is one of the two main categories of fiction. In general, it is more plot-driven than character-driven, with narratives that tend to be distinct and easily understandable. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> One of its most important characteristics is that its stories can be classified into a specific literary genre. As such, they use themes, tropes, techniques, styles, and tones that set them apart from stories in other genres. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Examples of popular general fiction genres include thriller, fantasy, science fiction, crime, horror, and romance. Because of this, general fiction reaches a broad range of audiences that primarily read it for entertainment. Not only is this fiction easy to get into, but readers can quickly immerse themselves into a story through familiar genre elements.</p>'
      },
      {
        id: 2,
        name: 'Literary Fiction',
        img: require('../assets/genres/literary_fiction.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> In contrast to general fiction, literary fiction is any work of fiction that\'s considered to have literary merit—the quality of a story to be considered art. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> It\'s considered by some people to be more intelligent than its counterpart. There\'s more focus on the style and characterization, with its audience reading for its artistry and depth rather than just for entertainment. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Literary fiction often takes on grand or complicated subjects such as philosophical musings, social issues, and political arguments. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> This, combined with its writing styles and frequent experimentation of literary forms, can make it somewhat difficult to digest and classify into any genre.</p>'
      },
      {
        id: 3,
        name: 'Thriller',
        img: require('../assets/genres/thriller.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Thriller is a genre of literature. Thrillers are dark, engrossing, and suspenseful plot-driven stories. They very seldom include comedic elements. Any novel can generate excitement, suspense, interest, and exhilaration, but because these are the primary goals of the thriller genre, thriller writers have laser-focused expertise in keeping a reader interested.</p>'
      },
      {
        id: 4,
        name: 'Crime',
        img: require('../assets/genres/crime.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The crime fiction genre deals with crimes. Beyond that simple definition, it deals with detection of crimes, criminals, and their motives. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A crime fiction story has a crime (usually a murder), an investigation of the crime, and ends with the outcome of the investigation. Most often the outcome ends with the criminal\'s arrest or death.</p>'
      },
      {
        id: 5,
        name: 'Science Fiction',
        img: require('../assets/genres/science-fiction.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Science fiction (sometimes shortened to Sci-Fi or SF) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, extraterrestrial life, sentient artificial intelligence, cybernetics, certain forms of immortality (like mind uploading), and the singularity. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Science fiction, in literature, film, television, and other media, has become popular and influential over much of the world, it has been called the \"literature of ideas\", and often explores the potential consequences of scientific, social, and technological innovations. It is also often said to inspire a \"sense of wonder\". Besides providing entertainment, it can also criticize present-day society and explore alternatives.</p>'
      },
      {
        id: 6,
        name: 'Horror',
        img: require('../assets/genres/horror.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Horror intends to create an eerie and frightening atmosphere for the reader. Often the central menace of a work of horror fiction can be interpreted as a metaphor for larger fears of a society. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Prevalent elements of the genre include ghosts, demons, vampires, werewolves, ghouls, the Devil, witches, monsters, extraterrestrials, dystopian and post-apocalyptic worlds, serial killers, cannibalism, psychopaths, cults, dark magic, satanism, the macabre, gore and torture.</p>'
      },
      {
        id: 7,
        name: 'Romance',
        img: require('../assets/genres/romance.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> In the strictest academic terms, a romance is a narrative genre in literature that involves a mysterious, adventurous, or spiritual story line where the focus is on a quest that involves bravery and strong values, not always a love interest. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> However, modern definitions of romance also include stories that have a relationship issue as the main focus.</p>'
      },
      {
        id: 8,
        name: 'Fantasy',
        img: require('../assets/genres/fantasy.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Fantasy is a genre of literature that features magical and supernatural elements that do not exist in the real world. Although some writers juxtapose a real-world setting with fantastical elements, many create entirely imaginary universes with their own physical laws and logic and populations of imaginary races and creatures. Speculative in nature, fantasy is not tied to reality or scientific fact.</p>'
      },
      {
        id: 9,
        name: 'Young Adult',
        img: require('../assets/genres/young-adult.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Young adult fiction is a category of fiction written for readers from 12 to 18 years of age. While the genre is targeted at adolescents, approximately half of Young Adult readers are adults. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The subject matter and genres of Young Adult correlate with the age and experience of the protagonist. The genres available in Young Adult are expansive and include most of those found in adult fiction. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Common themes related to Young Adult include friendship, first love, relationships, and identity. Stories that focus on the specific challenges of youth are sometimes referred to as problem novels or coming-of-age novels. Young Adult fiction was developed to soften the transition between children\'s novels and adult literature.</p>'
      },
      {
        id: 10,
        name: 'Comic Books',
        img: require('../assets/genres/comic-books.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A comic book, also called comicbook, comic magazine or simply comic, is a publication that consists of comics art in the form of sequential juxtaposed panels that represent individual scenes. Panels are often accompanied by descriptive prose and written narrative, usually, dialogue contained in word balloons emblematic of the comics art form. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The term \"comic book\" derives from a compilation of comic strips of a humorous tone; however, this practice was replaced by featuring stories of all genres, usually not humorous in tone.</p>'
      },
      {
        id: 11,
        name: 'Travel',
        img: require('../assets/genres/travel.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The term \"travel\" originates from the Old French word travail. Travel writing is a genre that has, as its focus, accounts of real or imaginary places. The genre encompasses a number of styles that may range from the documentary to the evocative, from literary to journalistic, and from the humorous to the serious. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Travel writing is often associated with tourism, and includes works of an ephemeral nature such as guide books and reviews, with the intent being to educate the reader about the destination, provide helpful advice for those visiting the destination, and inspire readers to travel to the destination. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Travel writing has also been produced by other types of travelers, such as military officers, missionaries, explorers, scientists, pilgrims, and migrants.</p>'
      },
      {
        id: 12,
        name: 'Nature',
        img: require('../assets/genres/nature.jpg'),
        description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> This genre is applied to titles that explore the different aspects of nature and the environment. Subjects include natural environments (rainforest, desert, mountains, etc.), animals, environmental science (pollution, recycling, conservation, etc.), and weather. This genre is used when an overview or general look at a particular aspect of nature is presented. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> More detailed scientific explanations of similiar subjects would generally use the science genre.</p>'
      }
    ],
    authors: [
      {
        id: 'Kazuo Ishiguro',
        name: 'Kazuo Ishiguro',
        img: require('../assets/authors/ishiguro.jpg'),
        birthday: '8 November 1954',
        nation: 'English',
        quote: 'There was another life that I might have had, but I am having this one.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Kazuo Ishiguro (Sir) is an English novelist, screenwriter, musician, and short-story writer. Ishiguro was born in Nagasaki, Japan, and moved to Britain in 1960 with his parents when he was five. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> He is one of the most critically-acclaimed and praised contemporary fiction authors writing in English, being awarded the 2017 Nobel Prize in Literature. In its 2017 citation, the Swedish Academy described Ishiguro as a writer "who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world".</p>',
      },
      {
        id: 'Ian McEwan',
        name: 'Ian McEwan',
        img: require('../assets/authors/mcewan.jpg'),
        birthday: '21 June 1948',
        nation: 'English',
        quote: 'Imagining what it is like to be someone other than yourself is at the core of our humanity. It is the essence of compassion and it is the beginning of morality.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Ian McEwan is an English novelist and screenwriter. In 2008, The Times featured him on its list of \"The 50 greatest British writers since 1945\" and The Daily Telegraph ranked him number 19 in its list of the \"100 most powerful people in British culture\". <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> McEwan began his career writing sparse, Gothic short stories. His first two novels, The Cement Garden (1978) and The Comfort of Strangers (1981), earned him the nickname \"Ian Macabre\". His next novel, Atonement, garnered acclaim and was adapted into an Oscar-winning film featuring Keira Knightley and James McAvoy.</p>',
      },
      {
        id: 'Mark Z. Danielweski',
        name: 'Mark Z. Danielweski',
        img: require('../assets/authors/danielweski.jpg'),
        birthday: '5 March 1966',
        nation: 'American',
        quote: 'I still get nightmares. In fact, I get them so often I should be used to them by now. I\'m not. No one ever really gets used to nightmares.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Mark Z. Danielweski is an American fiction author. He is most widely known for his debut novel House of Leaves (2000), which won the New York Public Library\'s Young Lions Fiction Award. Danielewski began work on a proposed 27-volume series, The Familiar, although he completed only 5 volumes before halting the project in 2017. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Danielewski\'s work is characterized by an intricate, multi-layered typographical variation, or page layout, which he refers to as \"signiconic\". Sometimes known as visual writing,  the typographical variation corresponds directly, at any given narratological point in time, to the physical space of the events in the fictional world as well as the physical space of the page and the reader. Early on, critics characterized his writing as being ergodic literature, and Danielewski has described his style as: </p> <br/> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> \"Signiconic = sign + icon. Rather than engage those textual faculties of the mind remediating the pictorial or those visual faculties remediating language, the signiconic simultaneously engages both in order to lessen the significance of both and therefore achieve a third perception no longer dependent on sign and image for remediating a world in which the mind plays no part.\"</p>',
      },
      {
        id: 'Agatha Christie',
        name: 'Agatha Christie',
        img: require('../assets/authors/agatha.jpg'),
        birthday: '15 September 1890',
        nation: 'English',
        quote: 'Never tell all you know - not even to the person you know best.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Agatha Mary Clarissa Christie (Dame), Lady Mallowan, was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. A writer during the \"Golden Age of Detective Fiction\", Christie has been called the \"Queen of Crime\". <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> She also wrote six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame by Queen Elizabeth II for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.</p>',
      },
      {
        id: 'Raymond Chandler',
        name: 'Raymond Chandler',
        img: require('../assets/authors/chandler.jpg'),
        birthday: '23 July 1888',
        nation: 'American-British',
        quote: 'There is no trap so deadly as the trap you set for yourself.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Raymond Thornton Chandler was an American-British novelist and screenwriter. In 1932, at the age of forty-four, Chandler became a detective fiction writer after losing his job as an oil company executive during the Great Depression. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Chandler had an immense stylistic influence on American popular literature. He is a founder of the hard-boiled school of detective fiction, along with Dashiell Hammett, James M. Cain and other Black Mask writers. The protagonist of his novels, Philip Marlowe, like Hammett\'s Sam Spade, is considered by some to be synonymous with \"private detective\".</p>',
      },
      {
        id: 'Stephen King',
        name: 'Stephen King',
        img: require('../assets/authors/king.jpg'),
        birthday: '21 September 1947',
        nation: 'American',
        quote: 'You can, you should and, if you\'re brave enough to start, you will.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Described as the \"King of Horror\" (a play on his surname and a reference to his high standing in pop culture) his books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books.<p>',
      },
      {
        id: 'Chalotte Perkins Gilman',
        name: 'Charlotte Perkins Gilman',
        img: require('../assets/authors/gilman.jpg'),
        birthday: '3 July 1860',
        nation: 'American',
        quote: 'Eternity is not something that begins after you\'re dead. It is going on all the time. We are in it now.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Charlotte Perkins Gilman was an American humanist, novelist, writer, lecturer, advocate for social reform, and eugenicist. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> She was a utopian feminist and served as a role model for future generations of feminists because of her unorthodox concepts and lifestyle. She has been inducted into the National Women\'s Hall of Fame. Her best remembered work today is her semi-autobiographical short story \"The Yellow Wallpaper\", which she wrote after a severe bout of postpartum psychosis.</p>',
      },
      {
        id: 'William Butler Yeats',
        name: 'William Butler Yeats',
        img: require('../assets/authors/yeats.jpg'),
        birthday: '13 June 1865',
        nation: 'Irish',
        quote: 'There are no strangers here; only friends you haven\'t yet met.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> William Butler Yeats was an Irish poet, dramatist, writer and one of the foremost figures of 20th-century literature. He was a driving force behind the Irish Literary Revival and became a pillar of the Irish literary establishment who helped to found the Abbey Theatre. In his later years he served two terms as a Senator of the Irish Free State. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A Protestant of Anglo-Irish descent, Yeats was born in Sandymount and was educated in Dublin and London and spent childhood holidays in County Sligo. He studied poetry from an early age, when he became fascinated by Irish legends and the occult. These topics feature in the first phase of his work, lasting roughly from his student days at the Metropolitan School of Art in Dublin until the turn of the 20th century. His earliest volume of verse was published in 1889, and its slow-paced and lyrical poems display debts to Edmund Spenser, Percy Bysshe Shelley and the poets of the Pre-Raphaelite Brotherhood. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> From 1900 his poetry grew more physical, realistic and politicised. He moved away from the transcendental beliefs of his youth, though he remained preoccupied with some elements including cyclical theories of life. He had become the chief playwright for the Irish Literary Theatre in 1897, and early on promoted younger poets such as Ezra Pound. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Yeats was awarded the Nobel Prize in Literature in 1923.</p>',
      },
      {
        id: 'Ezra Pound',
        name: 'Ezra Pound',
        img: require('../assets/authors/pound.jpg'),
        birthday: '30 October 1885',
        nation: 'American',
        quote: 'This is no book. Whoever touches this touches a person.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Ezra Weston Loomis Pound was an expatriate American poet and critic, a major figure in the early modernist poetry movement. Pound\'s contribution to poetry began in the early 20th century with his role in developing Imagism, a movement stressing precision and economy of language. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Working in London as foreign editor of several American literary magazines, he helped discover and shape the work of contemporaries such as T. S. Eliot, Ernest Hemingway, and James Joyce. He was responsible for the 1914 serialization of Joyce\'s A Portrait of the Artist as a Young Man, the 1915 publication of Eliot\'s \"The Love Song of J. Alfred Prufrock\", and the serialization from 1918 of Joyce\'s Ulysses. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Hemingway wrote in 1932 that, for poets born in the late 19th or early 20th century, not to be influenced by Pound would be \"like passing through a great blizzard and not feeling its cold.\"</p>',
      }
    ],
    isModal: false,
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
    UPDATE_BUY_QUANTITY (state, {id, direction}) {
      const index = state.products.findIndex(obj => obj.id === id)
      const product = state.products[index]
      if (!product.buy_quantity) {
        product.buy_quantity = 0
      }
      if (direction === 'up') {
        product.buy_quantity += 1
      } else {
        product.buy_quantity -= 1
      }
      Vue.set(state.products, index, product)
      console.log(product)
    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              name: '4.50 from Paddington',
              img: require('../assets/books/paddington-train.jpg'),
              collectionId: 'Crime',
              collectionName: 'C1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Two trains running parallel. A crime is committed in the first. In the second a witness saw it all, but no one believes her. It\'s time for Miss Marple to solve the case.</p>',
              price: 35,
              quantity: 5
          },
          {
              id: 2,
              name: 'Cards on the Table',
              img: require('../assets/books/cards-table.jpg'),
              collectionId: 'Crime',
              collectionName: 'C1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Every guest plays bridge in separate rooms while the host relaxes in the living room. How was it possible for the host to be murdered when every guest had their eyes focused on the game?</p>',
              price: 35,
              quantity: 5
          },
          {
              id: 3,
              name: 'Farewell, My Lovely',
              img: require('../assets/books/farewell.jpg'),
              collectionId: 'Crime',
              collectionName: 'C2',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> What seems as a usual case of gangsters and crime turns out to be more of a twist. Detective Marlowe is forced to strike a deal with the toughest of the gangsters to solve the case and find his missing molly.</p>',
              price: 30,
              quantity: 5
          },
          {
              id: 4,
              name: 'The Long Goodbye',
              img: require('../assets/books/goodbye.jpg'),
              collectionId: 'Crime',
              collectionName: 'C2',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A wealthy man is desperate to find his missing wife. Detective Marlowe takes up the case. During his investigation, the man commits suicide and Marlowe is left with secrets never heard of before.</p>',
              price: 28,
              quantity: 5
          },
          {
              id: 5,
              name: 'Pet Sematary',
              img: require('../assets/books/pet-sematary.jpg'),
              collectionId: 'Horror',
              collectionName: 'H1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A family moves to rural Maine for a quiet life away from the city. After a while the Creeds hear of strange stories of animals and people brought back to life with the aid of an ancient cemetery in the Native lands. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> When the family\'s baby boy dies, the father is feels that he needs to make a decision: to accept death as a natural way of life or to bring the beloved child back to his life?</p>',
              price: 55,
              quantity: 5
          },
          {
              id: 6,
              name: 'IT',
              img: require('../assets/books/it.jpg'),
              collectionId: 'Horror',
              collectionName: 'H1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> No one would think that a clown might inspire fear and horror. But here it is. IT, the famous book by Stephen King, is now re-published with illustrations coming from creative artists that have read the book and felt inspired. Read, look and feel fear. </p>',
              price: 60,
              quantity: 5
          },
          {
              id: 7,
              name: 'The Yellow Wallpaper',
              img: require('../assets/books/wallpaper.jpg'),
              collectionId: 'Horror',
              collectionName: 'H2',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A Victorian husband heeds the advice of the doctor and isolates his wife in her bedroom. The woman feministically contemplates on how quickly men think of their women as being hysterical when they are but a bit ill. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Soon enough she finds out that she\'s not alone in her room.</p>',
              price: 18,
              quantity: 3
          },
          {
              id: 8,
              name: 'The Second Coming',
              img: require('../assets/books/second-coming.jpg'),
              collectionId: 'Poetry',
              collectionName: 'P1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A visionary poem about the coming of the Antichrist and the destruction of the Modern world through the reverse of order. Students and professors alike may find the volume at hand a primary source for their thesis papers.</p>',
              price: 50,
              quantity: 5
          },
          {
              id: 9,
              name: 'A Vision',
              img: require('../assets/books/vision.jpg'),
              collectionId: 'Poetry',
              collectionName: 'P1',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A magical volume comprised of some of Yeats\' greatest later poems and his illustrative philosophy of the 28 personalities based on the phases of the moon.</p>',
              price: 80,
              quantity: 5
          },
          {
              id: 10,
              name: 'The Cantos',
              img: require('../assets/books/cantos.jpg'),
              collectionId: 'Poetry',
              collectionName: 'P2',
              description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A life-long poem written between 1915 and 1962. It contains collections of memories, episodes of life and fragments of thought illustrated in a Imagist, Vorticist and Modern manner. Students that study Ezra Pound\'s work can find the book at hand useful for their thesis papers.</p>',
              price: 80,
              quantity: 5
          },
          {
            id: 11,
            name: 'Van Richten\'s Guide to Vampires',
            img: require('../assets/books/vampires.jpg'),
            collectionId: 'Young Adult',
            collectionName: 'YA1',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A guide to vampires written by the illustruous vampire hunter Rudolph Van Richten of the Dungeons and Dragons\'s franchise.</p>',
            price: 55,
            quantity: 5
          },
          {
            id: 12,
            name: 'Atlas Obscura',
            img: require('../assets/books/atlas_obscura.jpg'),
            collectionId: 'Travel',
            collectionName: 'TRA1',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A travelogue to exotic and mysterious places around the world. A group of young people embark on a journey to discover, catalogue and admire the awe-inspiring places of our planet.</p>',
            price: 100,
            quantity: 5
          },
          {
            id: 13,
            name: 'Tarot Cards',
            img: require('../assets/books/tarot_cards.jpg'),
            collectionId: 'General Fiction',
            collectionName: 'GF1',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Due to the release of The Quarry, a complex decision-making horror game, the tarot cards are once more the center of interest in what seems to be the endless quest to understanding destiny.</p>',
            price: 80,
            quantity: 5
          },
          {
            id: 14,
            name: 'Klara and the Sun',
            img: require('../assets/books/klara_and_the_sun.jpg'),
            collectionId: 'Literary Fiction',
            collectionName: 'LF1',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> In the near future, robots would take the role of mannechins. They will be put on shop displays to delight passerbys. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> On a particular sunny day, Klara (one of the robots) awakes and contemplates the view before her. The Sun is her best friend for it is the celestial star that gives her power to move, to feel, to interact.</p>',
            price: 54,
            quantity: 5
          },
          {
            id: 15,
            name: 'Machines Like Me',
            img: require('../assets/books/machines_like_me.jpg'),
            collectionId: 'Literary Fiction',
            collectionName: 'LF2',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> The first trans-realist novel of the post-postmodern world, the novel centers around the idea that robots would be the next human beings.</p>',
            price: 54,
            quantity: 5
          },
          {
            id: 16,
            name: 'House of Leaves',
            img: require('../assets/books/house_of_leaves.jpg'),
            collectionId: 'Horror',
            collectionName: 'H3',
            description: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A complex book about a tattoo artist obsessed with the death of his neighbour, a mysterious report that no one seems to know, a photographer exploring a rural house, a family that lives in that house, the so-called truth that the tattoo artist figures out while reading that report, the last days of the photographer inside that house and how the house seems to get bigger from the inside than the outside. <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> This book explores the possibility that reality is not what it seems and that space is just another unknown concept as much as time. The book is crazier than James Joyce\'s Ulysses, but it is appreciated among the gamers that know about The Backrooms. </p>',
            price: 74,
            quantity: 2
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
