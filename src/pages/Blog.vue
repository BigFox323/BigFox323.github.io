<template>
  <div class="container">
    <div class="aside">
      <img src="@/assets/profile.png" alt="个人头像">
      <h2>BigFox</h2>
      <p>前端小白 | 宅神一个 | 单机游戏爱好者</p>
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" :target="link.target || '_self'">
            <i :class="link.iconClass"></i>
            <span class="link-text">{{ link.text }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="main">
      <article class="blog" v-for="post in posts" :key="post.id">
        <router-link :to="`/Blog-post/${post.filename}`">
          <h1>{{ post.title }}</h1>
        </router-link>
        <h3>{{ post.summary }}</h3>
      </article>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const posts = ref([
      { id: 1, title: "从零开始学前端", summary: "2023年8月1日，前端小白的起点...", filename: "fox-1" },
      { id: 2, title: "待更新", summary: "待更新...", filename: "fox-2" },
      { id: 3, title: "待更新", summary: "待更新...", filename: "fox-3" },
    ]);

    const links = ref([
      { href: "mailto:bigfox323@gmail.com", iconClass: "fas fa-envelope icon", text: "Email" },
      { href: "https://github.com/BigFox323", iconClass: "fab fa-github icon", text: "GitHub", target: "_blank" },
      { href: "https://twitter.com/BigFox323", iconClass: "fab fa-twitter icon", text: "Twitter", target: "_blank" },
    ]);

    return {
      posts,
      links
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0px;
  padding: 0 10%;
}

.aside {
  flex-basis: 30%;
  box-shadow: 0 2px 4px rgba(29, 4, 4, 0.1);
  padding: 30px 30px;
  margin: 30px 15px;
  border-radius: 8px;
  background-color: #fff;
}

.aside img {
  display: block;
  width: 70%;
  margin: 0 auto 10px;
  border-radius: 50%;
}

.aside h2,
.aside p {
  text-align: center;
  color: #444;
  margin: 30px 0;
}

.aside ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 15px 0;
}

.aside ul li {
  margin: 10px;
}

.aside a {
  text-decoration: none;
  color: #888;
}

.aside a:hover {
  color: #333;
}

.aside i {
  font-size: 22px;
}

.link-text {
  display: none;
}

.main {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
}

.blog {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  min-height: 120px;
  margin: 30px;
  padding: 10px;
  overflow: hidden;
}

.blog ::v-deep a {
  text-decoration: none;
  color: #888;
}

.blog ::v-deep a:hover {
  color: #333;
}

.blog h1,
.blog h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
}

.blog h3 {
    color: #333
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 5%;
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .aside {
    flex-basis: auto;
    width: 100%;
    margin: 5px auto;
  }

  .main {
    flex-basis: auto;
    width: 100%;
    margin: 5px auto;
  }

  .aside img {
    width: 50%;
  }

  .aside h2 {
    margin: 10px;
  }

  .aside ul {
    justify-content: center;
  }

  .aside ul li {
    margin: 0 8px;
  }

  .link-text {
    display: none;
  }

  .aside i {
    font-size: 22px;
  }

  .blog:not(:last-child) {
    margin-bottom: 15px;
  }

  .blog {
    padding: 10px 10px;
    margin: 0 0 5px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .blog h1 {
    font-size: 1.2em;
  }

  .blog h3 {
    font-size: 1em;
  }
}
</style>