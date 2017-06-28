<template>
  <div class="Detail">

    <h1>Detailierte Ansicht für Aktivität</h1>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <button v-on:click="getActivity(1)" type="button" class="btn btn-normal">Aktualisieren</button>
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

          </tr>
          </thead>
          <tbody>

          <tr>
            <td>{{activity.name}}</td>
            <td>{{activity.description}}</td>
            <td>{{activity.creator}}</td>
            <td>{{activity.startingadr}}</td>
            <td>{{activity.startingtime}}</td>
            <td>{{activity.duration}}</td>
            <td>{{activity.difficulty}}</td>

          </tr>

          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {

        activity: {
          name: '',
          description: '',
          creator: '',
          startingtime: '',
          difficulty: '',
          duration: '',
          startingadr: ''
        }
      }
    },
    methods: {
      getActivity: function (idActivity) {

        var resource = this.$resource('http://localhost:3000/api/activities{/id}');

        // GET someItem/1
        resource.get({id: idActivity}).then(response => {
          this.activity = response.body;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
