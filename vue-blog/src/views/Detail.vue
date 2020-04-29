<template>
  <div class="detail">
    <h1>博客详情</h1>
    <h3>{{blog.title}}</h3>
    <p>{{blog.body}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        this.blog = data.body;
      });
  }
};
</script>

<style scope>
</style>
