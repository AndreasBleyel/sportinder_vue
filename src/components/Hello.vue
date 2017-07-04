<template>
  <div class="Hello">

    <h1>Welcome to SporTinder</h1>
    <p>Wir helfen dir einen Partner für deine sportlichen Aktivitäten zu finden<br></p>
    <img src="../assets/sport.jpg" id="image">
    <br>
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

<style>
  #image {
    width: 100%;
    height: auto;
  }
</style>

