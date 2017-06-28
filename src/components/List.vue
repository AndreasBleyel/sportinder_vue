<template>
  <div class="List">

    <h1>Auflistung aller Aktivitäten</h1>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <button v-on:click="getActivities" type="button" class="btn btn-normal"><i class="glyphicon glyphicon-ok">Aktualisieren</i>
        </button>
        <ul>
          <li v-for="activity in activities">
            {{activity.name}} {{activity.description}}
          </li>
        </ul>
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

    },
    ready: function () {
      this.getActivities();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
