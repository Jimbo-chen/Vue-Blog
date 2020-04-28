<template>
  <div class="home">
    <ShowBlog />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowBlog from "@/views/ShowBlog.vue";

export default {
  name: "Home",
  components: {
    ShowBlog
  }
};
</script>
