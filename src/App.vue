<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <img src="./assets/sportinderLogo.png">
        <router-view></router-view>
      </div>
    </div>

    <div class="row">
      <footer class="navbar navbar-inverse navbar-fixed-bottom col-md-8 offset-md-2">
        <p>Made by: Andreas Bleyel, Paula
          Engelberg, Benjamin Larcher,
          Michael Lauf und Sandra Rauscher</p>
        <p>Kontakt: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
      </footer>
    </div>

  </div>


</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
