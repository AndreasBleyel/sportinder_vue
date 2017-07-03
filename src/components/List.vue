<template>
  <div class="List">

    <h1>Auflistung aller Aktivitäten</h1>

    <div v-for="activity in activities">
      <detail :idActivity="activity.id"></detail>
    </div>


  </div>

</template>

<script>
  import Detail from "./Detail";

  export default {
    components: {Detail},
    name: 'List',
    data () {
      return {

        activities: []

      }
    },
    created: function () {
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
