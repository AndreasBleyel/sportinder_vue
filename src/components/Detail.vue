<template>
  <div class="Detail">

    <!-- Darstellung der Aktivitäten als b-card (vue-bootstrap Modul) -->
    <b-card header="Aktivität"
            class="mb-2"
            :title="activity.name"
            :sub-title="activity.description + ' <br><hr>Startadresse: ' + activity.startingadr + '<br>Startzeit: ' + activity.startingtime +
            '<br>Dauer: ' + activity.duration + '<br>Schwierigkeit: ' + activity.difficulty +
            ' erstellt von: '+ activity.creator"
            show-footer
    >
      <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 300px"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
      <small slot="footer" class="text-muted">
        <button class="btn btn-danger" v-on:click="deleteActivity">Löschen</button>
        <button class="btn btn-success" v-on:click="addSubscriber">Teilnehmen</button>
        <button class="btn btn-success" v-on:click="removeSubscriber">Absagen</button>
        <p>Teilnehmer: {{activity.subscribers}}</p><br>
        ID: {{activity.id}}
      </small>
    </b-card>


  </div>
</template>

<script>

  import * as VueGoogleMaps from 'vue2-google-maps';

  import Vue from 'vue';


  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBd07B0X9cY9_i0LQCZBNYyNZoeO59Io-g',
      v: '3'
      // libraries: 'places', //// If you need to use place input
    }
  })


  export default {
    name: 'Detail',
    props: ['idActivity'],
    data () {
      return {

        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }],

        activity: {},

      }
    },
    created: function () {
      //Bei Einbindung der <detail> Komponente wird mittels der übergebenen ID die Aktivität
      //aus der DB abgefragt und in weiterer Folge dann angezeigt
      this.getActivity(this.idActivity);
    },
    methods: {
      getActivity: function (idActivity) {

        var resource = this.$resource('http://localhost:3000/api/activities{/id}');

        // GET someItem/1
        resource.get({id: idActivity}).then(response => {
          this.activity = response.body;

          this.center.lat = parseFloat(this.activity.lat);
          this.center.lng = parseFloat(this.activity.long);
          this.markers.push({position: {lat: parseFloat(this.activity.lat), lng: parseFloat(this.activity.long)}});
          console.log(this.center.lat);

        });
      },
      deleteActivity: function () {

        if (confirm("Aktivität löschen?") == true) {
          var resource = this.$resource('http://localhost:3000/api/activities{/id}');

          resource.delete({id: this.activity.id}).then(response => {
            console.log("Deleted: " + this.activity.id);
          this.$emit('delete');
        });
        } else {
          //cancel
        }
      },
      addSubscriber: function () {
        this.activity.subscribers++;
        console.log("Subs lokal: " + this.activity.subscribers);
        this.updateActivity();
      },
      removeSubscriber: function () {
        if (this.activity.subscribers > 0) {
          this.activity.subscribers--;
          this.updateActivity();
        }
      },
      updateActivity: function () {

        var resource = this.$resource('http://localhost:3000/api/activities{/id}');

        resource.update({id: this.activity.id}, {
          name: this.activity.name,
          description: this.activity.description,
          creator: this.activity.creator,
          startingtime: this.activity.startingtime,
          difficulty: this.activity.difficulty,
          duration: this.activity.duration,
          startingadr: this.activity.city + ', ' + this.activity.startingadr,
          lat: this.activity.lat,
          long: this.activity.long,
          subscribers: this.activity.subscribers
        }).then(response => {
          console.log("upgedatet");
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
