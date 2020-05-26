<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
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
  overflow-y: scroll;
}

a, p, h1{
  font-family: 'Lato', sans-serif;
}

.container{
  max-width: 80%;
  margin: auto;
}

.router-link-exact-active{
  color: teal;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
