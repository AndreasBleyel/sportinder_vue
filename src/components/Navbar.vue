<template>
  <div id="Navbar">
 <b-link class="navbar-brand" to="/">
                                                          <img src="../assets/sportinderLogo.png">
                                                        </b-link>
    <b-navbar toggleable type="inverse" variant="standard">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>



      <b-collapse is-nav id="nav_collapse">

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
#nav_collapse {
    background-color: #42b983;
    overflow: hidden;
}

#nav_collapse a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

#nav_collapse a:hover {
    background-color: #ddd;
    color: black;
}

#nav_collapse a.active {
    background-color: #4CAF50;
    color: white;
}
</style>
