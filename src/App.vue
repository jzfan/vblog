<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import topNav from './components/topNav'
export default {
  components: {
    topNav,
  },
  name: 'App',
}
</script>

<style lang='sass'>
@import '../node_modules/bulma/bulma.sass'
</style>
