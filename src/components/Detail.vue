<template>
  <div class="Detail">

    <b-card header="Aktivität"
            class="mb-2"
            :title="activity.name"
            :sub-title="activity.description + ' <br><hr>Startadresse: ' + activity.startingadr + '<br>Startzeit: ' + activity.startingtime +
            '<br>Dauer: ' + activity.duration + '<br>Schwierigkeit: ' + activity.difficulty"
            show-footer
    >
      <small slot="footer" class="text-muted">
        erstellt von: {{activity.creator}} ID: {{activity.id}} Props: {{idActivity}}
      </small>
    </b-card>

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




  </div>
</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps';


    import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBd07B0X9cY9_i0LQCZBNYyNZoeO59Io-g',
      v: '3'
        // libraries: 'places', //// If you need to use place input
    }
  })


  export default {
    name: 'Detail',
    props: {
      idActivity: {
        type: Number,
        required: true
      }
    },
    data () {
      return {

      center: {lat: 10.0, lng: 10.0},
                 markers: [{
                   position: {lat: 10.0, lng: 10.0}
                 }],

        activity: {
          name: '',
          description: '',
          creator: '',
          startingtime: '',
          difficulty: '',
          duration: '',
          startingadr: '',
          long: '',
          lat: ''
        }
      }
    },
    created: function () {
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
