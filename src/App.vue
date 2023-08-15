<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100vh
}

#app {
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

body {
  font-family: "微软雅黑", "PingFang SC", "Source Han Sans CN", "Noto Sans CJK SC", sans-serif;
  background-color: #f8f8f8;
}
</style>
