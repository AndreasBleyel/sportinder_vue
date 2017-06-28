<template>
  <div id="Navbar">

    <b-navbar toggleable type="inverse" variant="standard">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <img src="../assets/sportinderLogo.png">
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item><router-link to="List">Alle Aktivitäten</router-link></b-nav-item>
          <b-nav-item><router-link to="Create">Aktivität erstellen</router-link></b-nav-item>
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

</style>
