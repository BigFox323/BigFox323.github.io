<template>
  <nav>
    <router-link to="/" exact-active-class="active">首页</router-link>
    <router-link to="/blog" exact-active-class="active">文章</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
}

.router-link-active {
  color: #888
}
</style>

