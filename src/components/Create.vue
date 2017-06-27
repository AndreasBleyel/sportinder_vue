<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
  <div class="Create">
    <h1>{{ msg }}</h1>



    <form id="form">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="name" type="text" class="form-control" name="name" placeholder="Name der Aktivität">
      </div>
      <p></p>

      <div class="form-group">
        <label for="description">Beschreibung der Aktivität</label>
        <textarea class="form-control" rows="5" id="description"></textarea>
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input id="city" type="city" class="form-control" name="stadt" placeholder="Stadt">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="street" type="text" class="form-control" name="straße" placeholder="Straße">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="creator" type="text" class="form-control" name="ersteller" placeholder="Dein Name">
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
        <input id="time" class="form-control" name="zeit" placeholder="Startzeit">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="duration" class="form-control" name="dauer" placeholder="Dauer">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <select class="form-control" id="difficulty" placeholder="Schwierigkeitsstufe">
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

    <button type="submit" class="btn btn-success"><i class="glyphicon glyphicon-ok"></i> Bestätigen</button>
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
        msg: 'Create Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
