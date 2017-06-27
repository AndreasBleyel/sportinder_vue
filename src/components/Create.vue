<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
  <div class="Create">
    <h1>{{ msg }}</h1>



    <form id="form">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="name" type="text" class="form-control" name="name" placeholder="Name der Aktivität" v-model="activity.name">
      </div>
      <p></p>

      <div class="form-group">
        <label for="description">Beschreibung der Aktivität</label>
        <textarea class="form-control" rows="5" id="description" v-model="activity.description"></textarea>
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input id="city" type="city" class="form-control" name="stadt" placeholder="Stadt">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="street" type="text" class="form-control" name="straße" placeholder="Straße" v-model="activity.startingadr">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="creator" type="text" class="form-control" name="ersteller" placeholder="Dein Name" v-model="activity.creator">
      </div>
      <p></p>

      <form action="/action_page.php">
        Datum
        <input type="date" name="datum">
      </form>
      <!--
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="date" type="text" class="form-control" name="datum" placeholder="Datum">
      </div>-->
      <p></p>

      <div class="input-group" data-time="now">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="time" class="form-control" name="zeit" placeholder="Startzeit" v-model="activity.startingtime">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="duration" class="form-control" name="dauer" placeholder="Dauer" v-model="activity.duration">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <select class="form-control" id="difficulty" placeholder="Schwierigkeitsstufe" v-model="activity.difficulty">
          <option selected hidden>Schwierigkeitsstufe</option>
          <option>leicht</option>
          <option>leicht - mittel</option>
          <option>mittel</option>
          <option>mittel - schwer</option>
          <option>schwer</option>
        </select>
      </div>
      <p></p>

      <p></p>

    </form>

    <button v-on:click="submit" type="submit" class="btn btn-success"><i class="glyphicon glyphicon-ok"></i> Bestätigen</button>
    <p></p>
                    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Create',
    data () {
      return {
        msg: 'Create Page',

        activity: {name: '', description: '', creator: '', startingtime: '', difficulty: '', duration: '', startingadr: ''}


      }
    },
    methods: {
            submit: function () {
             this.$http.post('http://localhost:3000/api/activities', {name: this.activity.name, description: this.activity.description, creator: this.activity.creator, startingtime: this.activity.startingtime, difficulty: this.activity.difficulty, duration: this.activity.duration, startingadr: this.activity.startingadr}, function(response) {
                 alert(response);

             });
             console.log(this.activity);
            }

          }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
