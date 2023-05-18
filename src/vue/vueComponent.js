import { VueR3F } from 'vue-r3f';

export default {
    name: 'MyVueR3FComponent',
    components: {
      VueR3F
    },
    data() {
      return {
        people: null
      };
    },
    mounted() {
      fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
          this.people = data.results;
        });
    }
  };
  