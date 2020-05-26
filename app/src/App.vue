<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'

  export default {
    components:{
      Nav
    }
  }
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}

a, p{
  font-family: 'Lato', sans-serif;
}

.container{
  padding: 0 2rem;
}
</style>
