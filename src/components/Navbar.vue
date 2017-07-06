<template>
  <div id="Navbar">
    <b-link class="navbar-brand" to="/">
      <img src="../assets/sportinderLogo.png">
    </b-link>
    <b-navbar toggleable type="inverse" variant="inverse">

            <b-nav-toggle target="nav_collapse_1"></b-nav-toggle>

            <a class="navbar-brand" href="/">
                <span>Sportinder</span>
            </a>

            <b-collapse is-nav id="nav_collapse_1">
                <b-nav is-nav-bar>
                    <b-nav-item>
                                <router-link to="/">Startseite</router-link>
                              </b-nav-item>
                    <b-nav-item>
                                <router-link to="List">Alle Aktivitäten</router-link>
                              </b-nav-item>
                    <b-nav-item>
                                <router-link to="Create">Aktivität erstellen</router-link>
                              </b-nav-item>
                </b-nav>


      </b-collapse>
    </b-navbar>

  </div>





</template>
<script>

  export default {
    name: 'Navbar'
  }
</script>

<style>


  #nav_collapse_1 {
    background-color: #42b983;
    overflow: hidden;
  }

  #nav_collapse_1 a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 8px 10px;
    text-decoration: none;
    font-size: 17px;
  }

  #nav_collapse_1 a:hover {
    background-color: #ddd;
    color: black;
  }

  #nav_collapse_1 a.active {
    background-color: #4CAF50;
    color: white;
  }

  .bg-inverse {
      background-color: #42b983 !important;
  }
</style>
