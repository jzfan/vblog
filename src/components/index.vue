<template>
  <div class="columns">
  <leftMenu v-on:categorySelected='getBlogsByCategory'></leftMenu>
  <contentList :blogs='blogs'></contentList>
  <newBlogModal></newBlogModal>
</div>
</template>

<script>
import leftMenu from './leftMenu'
import contentList from './contentList'
import newBlogModal from './newBlogModal'
import category from '../api/category'
export default {
  components: {
    leftMenu, contentList, newBlogModal
  },
  data () {
    return {
        blogs: []
    }
  },
  methods: {
    getBlogsByCategory (node) {
        category.blogs(node.id, data => this.blogs = data)
    }
  }
}
</script>
