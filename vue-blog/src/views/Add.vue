<template>
  <div class="add">
    <h2>添加博客</h2>
    <form v-if="!submited">
      <section>
        <h4>标题</h4>
        <input type="text" v-model="blog.title" required />
      </section>
      <section>
        <h4>内容</h4>
        <textarea v-model="blog.content" required></textarea>
      </section>
      <section>
        <h4>分类</h4>
        <input type="checkbox" name="catagreat" value="Vue.js" v-model="blog.catagreat" />Vue.js
        <input type="checkbox" name="catagreat" value="React.js" v-model="blog.catagreat" />React.js
        <input type="checkbox" name="catagreat" value="Angular.js" v-model="blog.catagreat" />Angular.js
      </section>
      <section>
        <h4>作者</h4>
        <select v-model="blog.author">
          <option v-for="(item,index) in authors" :key="index">{{item}}</option>
        </select>
      </section>

      <button class="btn" @click.prevent="post">添加博客</button>
    </form>

    <div v-else>
      <h3>提交成功！</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      authors: ["helen", "bob", "alex"],
      blog: {
        title: "",
        content: "",
        catagreat: [],
        author: ""
      },
      submited: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          userId: 1,
          title: this.blog.title,
          body: this.blog.content
        })
        .then(function(data) {
          console.log(data);
          this.submited = true;
        });
    }
  }
};
</script>

<style scope>
.add {
  margin-left: 20px;
}
.btn {
  padding: 10px 20px;
  background-color: orange;
  color: #fff;
}
select {
  margin-bottom: 20px;
}
</style>
