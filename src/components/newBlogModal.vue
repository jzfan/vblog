<template>
  <div class="modal is-active" v-show='$store.state.blog.creating'>
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-head">
        Create a Blog
      </section>
      <section class="modal-card-body">
        <textarea rows="22" class="textarea"></textarea>

      </section>
      <section class="modal-card-foot">
        <button class="button is-success" @click='save'>Save</button>
        <button class="button" @click='quit'>Cancel</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    save () {

      this.$store.commit('quitBlogCreating')
    },
    quit () {
      this.$store.commit('quitBlogCreating')
    }
  }
}
</script>