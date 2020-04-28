<template>
  <div id="app">
    <Cheader />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Cheader from "@/components/Cheader.vue";

export default {
  name: "Home",
  components: {
    Cheader
  }
};
</script>


<style>
</style>
