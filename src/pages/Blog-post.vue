<template>
    <div class="post-container" v-html="postContent"></div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const postContent = ref('');
        const md = new MarkdownIt();
        const route = useRoute();

        onMounted(async () => {
            try {
                const response = await fetch(`/markdown/${route.params.filename}.md`);
                if (response.ok) {
                    const content = await response.text();
                    postContent.value = md.render(content);
                }
            } catch (error) {
                console.error('Error loading markdown file:', error);
            }
        });

        return {
            postContent
        }
    }
}
</script>

<style scoped>
.post-container {
    flex: 1;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
}

.post-container ul li {
    list-style-type: none;
}

@media (max-width: 768px) {
    .post-container {
        flex: 1;
        width: 95%;
        margin: 10px auto;
        padding: 10px;
    }

    .post-container ul li {
        list-style-type: none;
    }
}
</style>
