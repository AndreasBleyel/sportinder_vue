<template>

  <div class="Create">
    <h1>Neue Aktivität erstellen</h1>


    <form id="form">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="name" type="text" class="form-control" name="name" placeholder="Name der Aktivität"
               v-model="activity.name">
      </div>
      <p></p>

      <div class="form-group">
        <label for="description">Beschreibung der Aktivität</label>
        <textarea class="form-control" rows="5" id="description" v-model="activity.description"></textarea>
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input id="city" type="city" class="form-control" name="stadt" placeholder="Stadt"
               v-model="activity.city">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="street" type="text" class="form-control" name="straße" placeholder="Straße"
               v-model="activity.startingadr">
      </div>
      <p></p>


      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="long" type="text" class="form-control" name="longitude" placeholder="Longitude"
               v-model="activity.long">
      </div>
      <p></p>


      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="lat" type="text" class="form-control" name="latitude" placeholder="Latitude"
               v-model="activity.lat">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="creator" type="text" class="form-control" name="ersteller" placeholder="Dein Name"
               v-model="activity.creator">
      </div>
      <p></p>


      <div class="input-group">
        <p>Datum:  <br></p>
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <date-picker :date="date" :option="timeoption" v-model="activity.date"></date-picker>
      </div>


      <p></p>


      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="duration" class="form-control" name="dauer" placeholder="Dauer in Minuten"
               v-model="activity.duration">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <select class="form-control" id="difficulty" placeholder="Schwierigkeitsstufe"
                v-model="activity.difficulty">
          <option value="" selected disabled>Schwierigkeit</option>
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

    <router-link to="/">
      <button v-on:click="submit" type="submit" class="btn"><i class="glyphicon glyphicon-ok"></i>Bestätigen
      </button>
    </router-link>
    <p></p>
  </div>

</template>

<script>

  import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'

  export default {
    name: 'Create',
    data () {
      return {

        activity: {
          name: '',
          description: '',
          creator: '',
          startingtime: '',
          difficulty: '',
          duration: '',
          startingadr: '',
          city: '',
          date: '',
          long: '',
          lat: '',
          subscribers: 0
        },
        date: {
          time: ''
        },


        starttime: '',
        endtime: '2016-01-19',
        testTime: '',
        multiTime: '',

        startTime: {
          time: ''
        },
        endtime: {
          time: ''
        },

        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          placeholder: 'auswählen',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: "YYYY-MM-DD HH:mm"
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
        },
          {
            type: 'fromto',
            from: '2016-02-01',
            to: '2016-02-20'
          }]


      }
    },
    components: {
      'date-picker': myDatepicker
    },
    methods: {
      submit: function () {

        this.$http.post('http://localhost:3000/api/activities', {
            name: this.activity.name,
            description: this.activity.description,
            creator: this.activity.creator,
            startingtime: this.date.time,
            difficulty: this.activity.difficulty,
            duration: this.activity.duration,
            startingadr: this.activity.city + ', ' + this.activity.startingadr,
            lat: this.activity.lat,
            long: this.activity.long,
            subscribers: this.activity.subscribers
          },
          function (response) {
            alert(response);

          });
        console.log(this.activity);
      }

    }
  }

</script>

<style>
  .btn {
    color: white;
    background-color: #42b983 !important;
  }

  .btn:hover {
    background-color: #ddd !important;
    color: black;
  }

  .cov-date-body[data-v-5afd03d7] {
    font-family: Avenir !important;
    background-color: #42b983 !important;
  }

  li {
    margin: 0 !important;
  }

  input.cov-datepicker {
    line-height: 2.10em !important;
  }
</style>


