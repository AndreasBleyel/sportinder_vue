<template>
  <div class="Hello">

    <h1>Welcome to SporTinder</h1>
    <p>Wir helfen dir einen Partner für deine sportlichen Aktivitäten zu finden</p>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ul>
          <li>
            <router-link to="Create">Neue Aktivität erstellen</router-link>
          </li>
          <li>
            <router-link to="List">Alle Aktivitäten anzeigen</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

