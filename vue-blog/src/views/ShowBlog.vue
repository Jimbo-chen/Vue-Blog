<template>
  <div class="show-blog">
    <h1>博客总览</h1>
    <input type="text" placeholder="请输入搜索关键词" v-model="search" />
    <div class="blog-item" v-for="(item,index) in filterBlogs" :key="index">
      <h3 v-rainbow>{{item.title}}</h3>
      <p>{{item.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  methods: {}
};
</script>

<style scope>
.blog-item {
  margin: 10px;
  background-color: #ccc;
  padding: 20px;
}
</style>
