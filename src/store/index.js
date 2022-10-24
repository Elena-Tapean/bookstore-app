import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      /*{
        id: 1,
        name: '4.50 from Paddington',
        img: require('../assets/books/paddington-train.jpg'),
        collectionId: 'Crime',
        collectionName: 'C1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Elspeth McGillicuddy is not given to hallucinations. Until she witnesses a murder at Paddington Station. But did she? No victim, no suspect, no other witnesses. In fact no one believes it really happened at all. Except her friend Miss Jane Marple, and she\'s returning to the scene of the crime to discover just exactly what Mrs. McGillicuddy saw.</p>',
        price: 35,
        quantity: 5
    },
    {
        id: 2,
        name: 'Cards on the Table',
        img: require('../assets/books/cards-table.jpg'),
        collectionId: 'Crime',
        collectionName: 'C1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> A flamboyant party host is murdered in full view of a roomful of bridge players! Mr. Shaitana was famous, as were his parties. He was also a man of whom everybody was a little afraid. So, when he boasted to Poirot that he considered murder an art form, the detective had some reservations about accepting a party invitation of cards and viewing Shaitana\'s private art collection. Indeed, what began as an absorbing evening of bridge was to turn into a more dangerous game altogether.</p>',
        price: 35,
        quantity: 5
    },
    {
        id: 3,
        name: 'Farewell, My Lovely',
        img: require('../assets/books/farewell.jpg'),
        collectionId: 'Crime',
        collectionName: 'C2',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Marlowe\'s about to give up on a completely routine case when he finds himself in the wrong place at the right time to get caught up in a murder that leads to a ring of jewel thieves, another murder, a fortune-teller, a couple more murders, and more corruption than your average graveyard.</p>',
        price: 30,
        quantity: 5
    },
    {
        id: 4,
        name: 'The Long Goodbye',
        img: require('../assets/books/goodbye.jpg'),
        collectionId: 'Crime',
        collectionName: 'C2',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Down-and-out drunk Terry Lennox has a problem: his millionaire wife is dead and he needs to get out of LA fast. So he turns to the only friend he can trust: private investigator Philip Marlowe. Marlowe is willing to help a man down on his luck, but later Lennox commits suicide in Mexico and things start to turn nasty. Marlowe is drawn into a sordid crowd of adulterers and alcoholics in LA\'s Idle Valley, where the rich are suffering one big suntanned hangover. Marlowe is sure Lennox didn\'t kill his wife, but how many stiffs will turn up before he gets to the truth?</p>',
        price: 28,
        quantity: 5
    },
    {
        id: 5,
        name: 'Pet Sematary',
        img: require('../assets/books/pet-sematary.jpg'),
        collectionId: 'Horror',
        collectionName: 'H1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> When the Creeds move into a beautiful old house in rural Maine, it all seems too good to be true: physician father, beautiful wife, charming little daughter, adorable infant son - and now an idyllic home. As a family, they\'ve got it all...right down to the friendly car. But the nearby woods hide a blood-chilling truth - more terrifying than death itself - and hideously more powerful. The Creeds are going to learn that sometimes dead is better.</p>',
        price: 55,
        quantity: 5
    },
    {
        id: 6,
        name: 'IT',
        img: require('../assets/books/it.jpg'),
        collectionId: 'Horror',
        collectionName: 'H1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Welcome to Derry, Maine... It\'s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real... They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.</p>',
        price: 60,
        quantity: 5
    },
    {
        id: 7,
        name: 'The Yellow Wallpaper',
        img: require('../assets/books/wallpaper.jpg'),
        collectionId: 'Horror',
        collectionName: 'H2',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> A woman and her husband rent a summer house, but what should be a restful getaway turns into a suffocating psychological battle. This chilling account of postpartum depression and a husband\'s controlling behavior in the guise of treatment will leave you breathless.</p>',
        price: 18,
        quantity: 3
    },
    {
        id: 8,
        name: 'The Second Coming',
        img: require('../assets/books/second-coming.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> A collection of 15 of Yeats\' most famous poems, including \"The Second Coming\" and \"Easter, 1916\". \"The Second Coming\" is viewed as a prophetic poem that envisions the close of the Christian epoch and the violent birth of a new age. The poem\'s title makes reference to the Biblical reappearance of Christ, prophesied in Matthew 24 and the Revelations of St. John, which according to Christianity, will accompany the Apocalypse and divine Last Judgment. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Other symbols in the poem are drawn from mythology, the occult, and Yeats\' view of history as defined in his cryptic prose volume A Vision. The principal figure of the work is a sphinx-like creature with a lion\'s body and man\'s head, a \"rough beast\" awakened in the desert that makes its way to Christ\'s birthplace, Bethlehem. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Other poems in this collect include \'Easter, 1916\', which chronicles Yeats\' complicated feelings on the execution of Irish patriots of the Easter Rebellion in Dublin.</p>',
        price: 50,
        quantity: 5
    },
    {
        id: 9,
        name: 'A Vision',
        img: require('../assets/books/vision.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P1',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Privately published in 1925, A Vision is a book-length study of various philosophical, historical, astrological, and poetic topics by the Irish poet William Butler Yeats. Yeats wrote this work while experimenting with automatic writing with his wife Georgie Hyde-Lees. It serves as a meditation on the relationships between imagination, history, and the occult. A Vision has been compared to Eureka: A Prose Poem, the final major work of Edgar Allan Poe.</p>',
        price: 80,
        quantity: 5
    },
    {
        id: 10,
        name: 'The Cantos',
        img: require('../assets/books/cantos.jpg'),
        collectionId: 'Poetry',
        collectionName: 'P2',
        description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The Cantos by Ezra Pound is a long, incomplete poem in 116 sections, each of which is a canto. Most of it was written between 1915 and 1962, although much of the early work was abandoned and the early cantos, as finally published, date from 1922 onwards. It is a book-length work, widely considered to be an intense and challenging read. The Cantos is generally considered one of the most significant works of modernist poetry in the 20th century. As in Pound\'s prose writing, the themes of economics, governance and culture are integral to the work\'s content. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The most striking feature of the text, to a casual browser, is the inclusion of Chinese characters as well as quotations in European languages other than English. A close reader will normally require a scholarly commentary to help understand the text. The range of allusion to historical events is broad, and abrupt changes occur with little transition.</p>',
        price: 80,
        quantity: 5
    },
    {
      id: 11,
      name: 'Van Richten\'s Guide to Vampires',
      img: require('../assets/books/vampires.jpg'),
      collectionId: 'Young Adult',
      collectionName: 'YA1',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Within these pages, Dr. Rudolph Van Richten shares his vast background as one of Ravenloft\'s most formidable lore masters and vampire hunters. Decades of research and experience have been compiled into discussions which define the very nature of those \"kings of the undead\", and help put them at a disadvantage to mortals, whom they consider to be \"mere cattle\". <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Dr. Van Richten has detailed vampiric powers, weaknesses, feeding and sleeping habits, even their varied relationships with others of their own kind. Old myths are dispelled, new facts are uncovered, and the experiences of both vampires and those who hunt them are recorded for your safety and enlightenment. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Quickly! Soon the sun sets and the dead will rise! The vampires of Ravenloft know no mercy, and you must be prepared before the darkness engulfs you.</p>',
      price: 55,
      quantity: 5
    },
    {
      id: 12,
      name: 'Atlas Obscura',
      img: require('../assets/books/atlas_obscura.jpg'),
      collectionId: 'Travel',
      collectionName: 'TRA1',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif;; text-align: justify; text-indent: 30px; line-height: 2;"> Inspiring equal parts wonder and wanderlust, Atlas Obscura celebrates over 600 of the strangest and most curious places in the world. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Here are natural wonders—the dazzling glowworm caves in New Zealand, or a baobob tree in South Africa that\'s so large it has a pub inside where 15 people can drink comfortably. Architectural marvels, including the M.C. Escher-like stepwells in India. Mind-boggling events, like the Baby Jumping Festival in Spain, where men dressed as devils literally vault over rows of squirming infants. Not to mention the Great Stalacpipe Organ in Virginia, Turkmenistan\'s 45-year hole of fire called the Door of Hell, coffins hanging off a side of a cliff in the Philippines, eccentric bone museums in Italy, or a weather-forecasting invention that was powered by leeches, still on display in Devon, England. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Atlas Obscura revels in the weird, the unexpected, the overlooked, the hidden, and the mysterious. Every page expands our sense of how strange and marvelous the world really is. And with its compelling descriptions, hundreds of photographs, surprising charts, maps for every region of the world, it is a book you can open anywhere.</p>',
      price: 100,
      quantity: 5
    },
    {
      id: 13,
      name: 'Klara and the Sun',
      img: require('../assets/books/klara_and_the_sun.jpg'),
      collectionId: 'Literary Fiction',
      collectionName: 'LF1',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her, but when the possibility emerges that her circumstances may change forever, Klara is warned not to invest too much in the promises of humans. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> In Klara and the Sun, Kazuo Ishiguro looks at our rapidly changing modern world through the eyes of an unforgettable narrator to explore a fundamental question: what does it mean to love?</p>',
      price: 54,
      quantity: 5
    },
    {
      id: 14,
      name: 'House of Leaves',
      img: require('../assets/books/house_of_leaves.jpg'),
      collectionId: 'Horror',
      collectionName: 'H3',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Years ago, when House of Leaves was first being passed around, it was nothing more than a badly bundled heap of paper, parts of which would occasionally surface on the Internet. No one could have anticipated the small but devoted following this terrifying story would soon command. Starting with an odd assortment of marginalized youth—musicians, tattoo artists, programmers, strippers, environmentalists, and adrenaline junkies—the book eventually made its way into the hands of older generations, who not only found themselves in those strangely arranged pages but also discovered a way back into the lives of their estranged children. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Now, for the first time, this astonishing novel is made available in book form, complete with the original colored words, vertical footnotes, and newly added second and third appendices. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The story remains unchanged, focusing on a young family that moves into a small home on Ash Tree Lane where they discover something is terribly wrong: their house is bigger on the inside than it is on the outside. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Of course, neither Pulitzer Prize-winning photojournalist Will Navidson nor his companion Karen Green was prepared to face the consequences of that impossibility, until the day their two little children wandered off and their voices eerily began to return another story—of creature darkness, of an ever-growing abyss behind a closet door, and of that unholy growl which soon enough would tear through their walls and consume all their dreams.</p>',
      price: 74,
      quantity: 2
    },
    {
      id: 15,
      name: 'Midnight Sun',
      img: require('../assets/books/midnight_sun.jpg'),
      collectionId: 'General Fiction',
      collectionName: 'YA2',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;">Midnight Sun is a 2020 companion novel to the 2005 book Twilight by author Stephenie Meyer. The work retells the events of Twilight from the perspective of Edward Cullen instead of that of the series\' usual narrating character Bella Swan. Meyer stated that Twilight was to be the only book from the series that she planned to rewrite from Edward\'s perspective.</p>',
      price: 35,
      quantity: 2
    },
    {
      id: 16,
      name: 'The Hidden Goddess',
      img: require('../assets/books/the_hidden_goddess.jpg'),
      collectionId: 'Spiritual',
      collectionName: 'S1',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The Hidden Goddess delves into the Bible to uncover the goddesses that have been buried within it. As well as discussing familiar figures such as Eve and Mary, the book also features Asherah, Sophia, Lilith, and others, exploring their histories, their roles in early Judaic Christian belief and their subsequent suppression. A readable and accessible antidote to the stereotype that the divine feminine is absent in the biblical traditions. A great resource for women and men seeking the Goddess in unlikely places.</p>',
      price: 55,
      quantity: 2
    },
    {
      id: 17,
      name: 'The Remains of the Day',
      img: require('../assets/books/remains_of_the_day.jpg'),
      collectionId: 'Literary Fiction',
      collectionName: 'LF2',
      description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The Remains of the Day is a 1989 novel by the Nobel Prize-winning British author Kazuo Ishiguro. The protagonist, Stevens, is a butler with a long record of service at Darlington Hall, a stately home near Oxford, England. In 1956, he takes a road trip to visit a former colleague, and reminisces about events at Darlington Hall in the 1920s and 1930s. The work received the Booker Prize for Fiction in 1989. A film adaptation of the novel, made in 1993 and starring Anthony Hopkins and Emma Thompson, was nominated for eight Academy Awards. In 2022, it was included on the "Big Jubilee Read" list of 70 books by Commonwealth authors, selected to celebrate the Platinum Jubilee of Elizabeth II.</p>',
      price: 35,
      quantity: 5
    },
    {
      id: 18,
      name: 'Dracula',
      img: require('../assets/books/dracula.jpg'),
      collectionId: 'Literary Fiction',
      collectionName: 'LF3',
      description: '<p style="margin: 0 30pxl font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, hunt Dracula and, in the end, kill him. Dracula is one of the most famous pieces of English literature. Many of the book\'s characters have entered popular culture as archetypal versions of their characters; for example, Count Dracula as the quintessential vampire, and Abraham Van Helsing as an iconic vampire hunter.</p>',
      price: 55,
      quantity: 5
    }*/
    ],
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
    collections: {
      crime: ['Crime'],
      horror: ['Horror'],
      poetry: ['Poetry'],
      travel: ['Travel'],
      literary: ['Literary Fiction'],
      spiritual: ['Spiritual'],
    },
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
        id: 'Joshua Foer',
        name: 'Joshua Foer',
        img: require('../assets/authors/joshua_foer.jpg'),
        birthday: '23 September 1982',
        nation: 'American',
        quote: 'The way to get better at a skill is to force yourself to practice just beyond your limits.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Joshua Foer is a freelance journalist and author living in Brookline, Massachusetts, with a primary focus on science. Foer\'s first book, Moonwalking with Einstein, was published by Penguin in March 2011. The book describes his journey throughout the world of competitive memory and attempts to delineate the capacity of the human mind. The book was a finalist for the 2012 Royal Society Winton Prize for Science Books. Foer also has an interest in wildlife journalism, and has written articles for National Geographic. Foer co-founded Atlas Obscura in 2009. The company\'s mission is to inspire wonder and curiosity about the world. Foer is also the co-author of the #1 NYT bestselling book, Atlas Obscura: An Explorer\'s Guide to the World\'s Hidden Wonders.</p>'
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
        id: 'Laurie Martin-Gardner',
        name: 'Laurie Martin-Gardner',
        img: require('../assets/authors/martin.jpg'),
        birthday: '(unknown)',
        nation: 'American',
        quote: '(unknown)',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> A lifelong student of history, mythology, and religion, Laurie Martin-Gardner draws inspiration from both the natural and spiritual worlds around her. Since childhood, she has spent her days immersed in the written word and published her first poem at the tender age of 12. Her first standalone non-fiction book, The Hidden Goddess, hit bookstores on February 1, 2020. Tracing the Divine Feminine from Asherah to Mary Magdalene, The Hidden Goddess is a look into the goddess traditions that influenced and permeated the foundations of the Judeo-Christian faith.</p>'
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
        id: 'Agatha Christie',
        name: 'Agatha Christie',
        img: require('../assets/authors/agatha.jpg'),
        birthday: '15 September 1890',
        nation: 'English',
        quote: 'Never tell all you know - not even to the person you know best.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Agatha Mary Clarissa Christie (Dame), Lady Mallowan, was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. A writer during the \"Golden Age of Detective Fiction\", Christie has been called the \"Queen of Crime\". <br> <p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> She also wrote six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame by Queen Elizabeth II for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.</p>',
      },
      {
        id: 'Bram Stocker',
        name: 'Bram Stocker',
        img: require('../assets/authors/bram_stocker.jpg'),
        birthday: '8 November 1847',
        nation: 'Irish',
        quote: 'We learn of great things by little experiences.',
        bio: '<p style="margin: 0 30px; font-size: 18px; text-align: justify; text-indent: 30px; line-height: 2;"> Abraham Stocker was an Irish author who is celebrated for his 1897 Gothic horror novel Dracula. During his lifetime, he was better known as the personal assistant of actor Sir Henry Irving and business manager of the Lyceum Theatre, which Irving owned. In his early years, Stoker worked as a theatre critic for an Irish newspaper, and wrote stories as well as commentaries. He also enjoyed travelling, particularly to Cruden Bay where he set two of his novels. During another visit to the English coastal town of Whitby, Stoker drew inspiration for writing Dracula. He died on 20 April 1912 due to locomotor ataxia and was cremated in north London. Since his death, his magnum opus Dracula has become one of the most well-known works in English literature, and the novel has been adapted for numerous films, short stories, and plays.</p>'
      }
    ],
    isModal: false,
    productsCopy: [],
    user: {},
    basket: [],
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
      state.products = state.productsCopy.filter(obj => obj.name.toLowerCase().includes(searchString.toLowerCase()))
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
    BUY_PRODUCT (state, user, product) {
      state.user = user;
      state.basket.buy(product)
    },
    //UPDATE_BUY_QUANTITY (state, {id, direction}) {
    //  const index = state.products.findIndex(obj => obj.id === id)
    //  const product = state.products[index]
    //  if (!product.buy_quantity) {
    //    product.buy_quantity = 1
    //  }
    //  if (direction === 'up') {
    //    product.buy_quantity += 1
    //  } else {
    //    product.buy_quantity -= 1
    //  }
    //  Vue.set(state.products, index, product)
    //  console.log(product)
    //},
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout(() => {
          const data = [
          {
            id: 1,
            name: 'Atlas Obscura',
            author: 'Joshua Foer',
            img: require('../assets/books/atlas_obscura.jpg'),
            collectionId: 'Travel',
            collectionName: 'Travel',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Inspiring equal parts wonder and wanderlust, Atlas Obscura celebrates over 600 of the strangest and most curious places in the world. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Here are natural wonders—the dazzling glowworm caves in New Zealand, or a baobob tree in South Africa that\'s so large it has a pub inside where 15 people can drink comfortably. Architectural marvels, including the M.C. Escher-like stepwells in India. Mind-boggling events, like the Baby Jumping Festival in Spain, where men dressed as devils literally vault over rows of squirming infants. Not to mention the Great Stalacpipe Organ in Virginia, Turkmenistan\'s 45-year hole of fire called the Door of Hell, coffins hanging off a side of a cliff in the Philippines, eccentric bone museums in Italy, or a weather-forecasting invention that was powered by leeches, still on display in Devon, England. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Atlas Obscura revels in the weird, the unexpected, the overlooked, the hidden, and the mysterious. Every page expands our sense of how strange and marvelous the world really is. And with its compelling descriptions, hundreds of photographs, surprising charts, maps for every region of the world, it is a book you can open anywhere.</p>',
            price: 100,
            quantity: 5
          },
          {
            id: 2,
            name: 'Klara and the Sun',
            author: 'Kazuo Ishiguro',
            img: require('../assets/books/klara_and_the_sun.jpg'),
            collectionId: 'Literary Fiction',
            collectionName: 'Literary Fiction',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her, but when the possibility emerges that her circumstances may change forever, Klara is warned not to invest too much in the promises of humans. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> In Klara and the Sun, Kazuo Ishiguro looks at our rapidly changing modern world through the eyes of an unforgettable narrator to explore a fundamental question: what does it mean to love?</p>',
            price: 54,
            quantity: 5
          },
          {
            id: 3,
            name: 'House of Leaves',
            author: 'Mark Z. Danielweski',
            img: require('../assets/books/house_of_leaves.jpg'),
            collectionId: 'Horror',
            collectionName: 'Horror',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Years ago, when House of Leaves was first being passed around, it was nothing more than a badly bundled heap of paper, parts of which would occasionally surface on the Internet. No one could have anticipated the small but devoted following this terrifying story would soon command. Starting with an odd assortment of marginalized youth—musicians, tattoo artists, programmers, strippers, environmentalists, and adrenaline junkies—the book eventually made its way into the hands of older generations, who not only found themselves in those strangely arranged pages but also discovered a way back into the lives of their estranged children. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Now, for the first time, this astonishing novel is made available in book form, complete with the original colored words, vertical footnotes, and newly added second and third appendices. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The story remains unchanged, focusing on a young family that moves into a small home on Ash Tree Lane where they discover something is terribly wrong: their house is bigger on the inside than it is on the outside. <br> <p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Of course, neither Pulitzer Prize-winning photojournalist Will Navidson nor his companion Karen Green was prepared to face the consequences of that impossibility, until the day their two little children wandered off and their voices eerily began to return another story—of creature darkness, of an ever-growing abyss behind a closet door, and of that unholy growl which soon enough would tear through their walls and consume all their dreams.</p>',
            price: 74,
            quantity: 2
          },
          {
            id: 4,
            name: 'The Hidden Goddess',
            author: 'Laurie Martin-Gardner',
            img: require('../assets/books/the_hidden_goddess.jpg'),
            collectionId: 'Spiritual',
            collectionName: 'Spiritual',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> The Hidden Goddess delves into the Bible to uncover the goddesses that have been buried within it. As well as discussing familiar figures such as Eve and Mary, the book also features Asherah, Sophia, Lilith, and others, exploring their histories, their roles in early Judaic Christian belief and their subsequent suppression. A readable and accessible antidote to the stereotype that the divine feminine is absent in the biblical traditions. A great resource for women and men seeking the Goddess in unlikely places.</p>',
            price: 55,
            quantity: 2
          },
          {
            id: 5,
            name: 'A Vision',
            author: 'William Butler Yeats',
            img: require('../assets/books/vision.jpg'),
            collectionId: 'Poetry',
            collectionName: 'Poetry',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Privately published in 1925, A Vision is a book-length study of various philosophical, historical, astrological, and poetic topics by the Irish poet William Butler Yeats. Yeats wrote this work while experimenting with automatic writing with his wife Georgie Hyde-Lees. It serves as a meditation on the relationships between imagination, history, and the occult. A Vision has been compared to Eureka: A Prose Poem, the final major work of Edgar Allan Poe.</p>',
            price: 80,
            quantity: 5
          },
          {
            id: 6,
            name: 'Cards on the Table',
            author: 'Agatha Christie',
            img: require('../assets/books/cards-table.jpg'),
            collectionId: 'Crime',
            collectionName: 'Crime',
            description: '<p style="margin: 0 30px; font-size: 17px; color: black; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> A flamboyant party host is murdered in full view of a roomful of bridge players! Mr. Shaitana was famous, as were his parties. He was also a man of whom everybody was a little afraid. So, when he boasted to Poirot that he considered murder an art form, the detective had some reservations about accepting a party invitation of cards and viewing Shaitana\'s private art collection. Indeed, what began as an absorbing evening of bridge was to turn into a more dangerous game altogether.</p>',
            price: 35,
            quantity: 5
        },
          {
            id: 7,
            name: 'Dracula',
            author: 'Bram Stocker',
            img: require('../assets/books/dracula.jpg'),
            collectionId: 'Literary Fiction',
            collectionName: 'Literary Fiction',
            description: '<p style="margin: 0 30px; font-size: 17px; font-family: Arial, Helvetica, sans-serif; text-align: justify; text-indent: 30px; line-height: 2;"> Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, hunt Dracula and, in the end, kill him. Dracula is one of the most famous pieces of English literature. Many of the book\'s characters have entered popular culture as archetypal versions of their characters; for example, Count Dracula as the quintessential vampire, and Abraham Van Helsing as an iconic vampire hunter.</p>',
            price: 35,
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
    async register ({commit}, user) {
      try {
        setTimeout(() => {
          commit('SET_USER', {
            name: 'Elena',
            surname: 'Tapean',
            role: 'member'
          }) 
          router.push('/profile')
        }, 1000)
      } catch (err) {
        console.log(err)
      }
    }, 
    async leave ({commit}) {
      commit('SET_USER', {})
    }
  },
  modules: {
  }
})
