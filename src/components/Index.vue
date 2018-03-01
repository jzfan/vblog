<template>

  <div class="columns">

  <left-menu></left-menu>
  <content-box></content-box>


</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import ContentBox from './ContentBox'
export default {
  components: {
    'left-menu': LeftMenu,
    'content-box': ContentBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
