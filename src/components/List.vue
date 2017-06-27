<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        msg: 'List Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
