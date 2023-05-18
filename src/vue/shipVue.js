const shipVue = new Vue({
    el: '#ShipApp',
    data: {
      starships: [],
      prevPage: null,
      nextPage: null,
      currentPage: 'https://swapi.dev/api/starships/'
    },
    mounted() {
      this.loadStarships(this.currentPage);
    },
    methods: {
      loadStarships(url) {
        // Check if the data is already cached
        // const cachedData = localStorage.getItem(url);
        // if (cachedData) {
        //   const data = JSON.parse(cachedData);
        //   this.starships = data.starships;
        //   this.prevPage = data.prevPage;
        //   this.nextPage = data.nextPage;
        //   this.currentPage = url;
        //   return;
        // }
        
        // If the data is not cached, fetch it from the API
        fetch(url)
          .then(response => response.json())
          .then(data => {
            // Update the starships array with the fetched data
            this.starships = data.results;
            this.prevPage = data.previous;
            this.nextPage = data.next;
            this.currentPage = url;
            
            // Fetch additional details for each starship
            this.starships.forEach(starship => {
              fetch(starship.url)
                .then(response => response.json())
                .then(starshipData => {
                  starship.passengers = starshipData.passengers;
                  starship.model = starshipData.model;
                });
            });
            
            // Cache the data
            // localStorage.setItem(url, JSON.stringify({
            //   starships: this.starships,
            //   prevPage: data.previous,
            //   nextPage: data.next
            // }));
          });
      }
    }
  });
  