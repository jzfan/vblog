<template>
  <nav class="navbar is-primary is-expanded" style="margin-bottom: 15px">
    <div class="container">
      
    <div class="navbar-brand">
      <span class="navbar-item">Blog</span>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" >Index</router-link>
        <a class="navbar-item" @click='$store.commit("blogCreating")'>creat</a>
      </div>
    </div>
  </div>
  </nav>
</template>