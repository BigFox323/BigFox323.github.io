<template>
    <div class="main-content">
        <article class="article" v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.summary }}</p>
        </article>
    </div>
</template>
  
<script>
export default {
    name: "MainContent",
    data() {
        return {
            posts: [
                { id: 1, title: "文章标题1", summary: "文章简介1..." },
                { id: 2, title: "文章标题2", summary: "文章简介2..." },
                { id: 3, title: "文章标题3", summary: "文章简介3..." },
            ],
        };
    },
};
</script>
<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    /* max-width: 600px;
    width: 100%; */
    flex: 1; 
}

.article {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
    min-height: 120px;
    margin: 30px;
    padding: 10px 10px;
    overflow: hidden;
}

.article h1,
.article p {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 5px;
}

@media (max-width: 768px) {
    .main-content {
        margin: 0 auto;
        flex: 1; 
    }

    .article {
        /* width: 90%; */
        padding: 15px 15px;
        margin: 10px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .article h1 {
        font-size: 1.2em;
    }

    .article p {
        font-size: 0.9em;
    }

}
</style>