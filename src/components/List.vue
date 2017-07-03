<template>
  <div class="List">

    <h1>Auflistung aller Aktivitäten</h1>

      <detail></detail>



  </div>

</template>

<script>
  import Detail from "./Detail";

  export default {
    components: {Detail},
    name: 'List',
    data () {
      return {

        activities: [
          {
            name: '',
            description: '',
            creator: '',
            startingtime: '',
            difficulty: '',
            duration: '',
            startingadr: ''
          }
        ]

      }
    },
    created: function () {
      // `this` points to the vm instance
      this.getActivities();
    },
    methods: {

      getActivities: function () {

        {
          // GET request
          this.$http.get('http://localhost:3000/api/activities').then(response => {

            // get body data
            console.log(response.body);
            this.activities = response.body;

          }, response => {
            // error callback
            console.log('Error while reading DB');
          });
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
