const app = new Vue({
  el: '#app',
  data: {
    characters: [],
    prevPage: null,
    nextPage: null,
    currentPage: 'https://swapi.dev/api/people/'
  },
  mounted() {
    this.loadCharacters(this.currentPage);
  },
  methods: {
    loadCharacters(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Map over each character and fetch the films for that character
          Promise.all(data.results.map(character => {
            return Promise.all(character.films.map(film => {
              return fetch(film)
                .then(response => response.json())
                .then(filmData => {
                  return filmData;
                });
            })).then(films => {
              // Store the films for the character
              character.films = films;
              return character;
            });
          })).then(characters => {
            // Update the characters array with the fetched data
            this.characters = characters;
            this.prevPage = data.previous;
            this.nextPage = data.next;
            this.currentPage = url;
          });
        });
    }
  }
});
