import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ]
  }