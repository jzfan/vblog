<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="container">
      <router-view/>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import Footer from './components/Footer'
export default {
  components: {
    'top-nav': TopNav,
    'footer-bar': Footer
  },
  name: 'App'
}
</script>

<style lang='sass'>
@import '../node_modules/bulma/bulma.sass'
</style>
