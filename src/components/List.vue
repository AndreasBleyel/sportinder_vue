<template>
  <div class="List">

    <h1>Auflistung aller Aktivitäten</h1>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <button v-on:click="getActivities" type="button" class="btn btn-normal"><i class="glyphicon glyphicon-ok">Aktualisieren</i>
        </button>
      </div>
      <div class="row">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Name</th>
            <th>Beschreibung</th>
            <th>Erstellt von</th>
            <th>Startpunkt</th>
            <th>Startzeit</th>
            <th>Dauer</th>
            <th>Schwierigkeit</th>
            <th>Details</th>

          </tr>
          </thead>
          <tbody>

          <tr v-for="activity in activities">
            <td>{{activity.name}}</td>
            <td>{{activity.description}}</td>
            <td>{{activity.creator}}</td>
            <td>{{activity.startingadr}}</td>
            <td>{{activity.startingtime}}</td>
            <td>{{activity.duration}}</td>
            <td>{{activity.difficulty}}</td>
            <td>
              <router-link to="Detail">Details</router-link>
            </td>
          </tr>

          </tbody>
        </table>

      </div>
    </div>

  </div>
</template>

<script>

  export default {
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
