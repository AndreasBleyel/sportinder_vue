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

  </div>
</template>

<script>
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
    created: function () {
           this.getActivity(this.idActivity);
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
