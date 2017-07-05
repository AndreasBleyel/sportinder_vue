<template>
  <div class="List">

    <h1>Auflistung aller Aktivitäten</h1>

<!--    Iteration durch alle Activities und Darstellung der Komponente
    Übergabe der einzelnen ID´s via Props-->
    <div v-for="activity in activities">
      <detail :idActivity="activity.id" v-on:delete="refresh"></detail>
    </div>

  </div>

</template>

<script>
  //Import der Detail Komponente
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
          this.activities = [];
          console.log("getActivities");
          // GET request
          this.$http.get('http://localhost:3000/api/activities').then(response => {

            // get body data
            this.activities = response.body;
            this.activities.forEach( function(activity){
              console.log("ID: "+activity.id);
            })


          }, response => {
            // error callback
            console.log('Error while reading DB');
          });
        }
      },
      refresh: function() {
        console.log("refresh");
        this.getActivities();
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
