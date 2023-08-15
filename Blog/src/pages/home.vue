<template>
    <div class="container">
      <article>
        <h2>欢迎来到大狐狸的森林！</h2>
        <p>这片神秘而繁茂的森林，<br>居住着一只狡黠聪明的大狐狸，<br>寻找未知的奥秘，探索生命的故事。<br>这是它的森林，它邀请你一起来探索、分享它的世界...</p>
        <router-link to="/blog" class="in-button">进入森林</router-link>
      </article>
  </div>
</template>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.container {
  flex: 1;
  padding: 50px 120px;
}

article h2 {
  font-size: 1.8em;
  color: #333;
  margin-top: 40px;
}

article p {
  font-size: 1.2em;
  color: #666;
  line-height: 40px;
  margin-top: 50px;
}

.in-button {
  display: inline-block;
  color: #fff;
  background-color: olivedrab;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 3px;
  margin-top: 50px;
  transition: background-color 0.3s;
}

.in-button:hover {
  background-color: darkolivegreen;
}

/* Responsive Styles for Mobile */
@media (max-width: 768px) {
  .container {
    padding: 20px 20px;
    flex: 1;
  }

  article h2 {
    font-size: 1.2em;
    margin-top: 20px;
  }

  article p {
    font-size: 1em;
    margin-top: 20px;
  }

  .in-button {
    font-size: 1em;
  }
}
</style>
