<template>
  <div id="app">

    <navbar></navbar>

    <div class="row">
      <div class="col-md-8 offset-md-2">
        <router-view></router-view>
      </div>
    </div>

    <footer></footer>
  </div>


</template>

<script>
  import Navbar from "./components/Navbar";
  import Hello from "./components/Hello";
  import Footer from "./components/Footer";

  export default {
    components: {
      Footer,
      Hello,
      Navbar
    },
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

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
