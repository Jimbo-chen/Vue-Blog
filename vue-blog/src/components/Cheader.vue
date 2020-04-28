<template>
  <div class="cheader">
    <router-link to="/">首页</router-link>|
    <router-link to="/add">写博客</router-link>
  </div>
</template>

<script>
export default {
  name: "Cheader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cheader {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: orange;
}
.nav {
  margin: 10px;
}
</style>
