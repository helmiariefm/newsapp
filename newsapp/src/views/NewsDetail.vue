<script>
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import Button from '../components/Button.vue';

  export default {
    data() {
      return {
        news: null,
        loading: false
      };
    },
    setup() {
      const store = useStore();
      const route = useRoute();
      const slug = computed(() => route.params.slug);
      const news = ref(null);
      const loading = ref(false);

      loading.value = true;
      store
        .dispatch('news/fetchNewsBySlug', slug.value)
        .then((fetchedNews) => {
          news.value = fetchedNews;
          loading.value = false;
        });

      return {
        news,
        loading,
      };
    },
    mounted() {
      const slug = this.$route.params.slug;
    },
    components: {
      Button
    }
  };
</script>

<template>
  <div v-if="loading">Wait...</div>
  <div v-else-if="news" class="news-detail">
    <div class="header">
      <h1>{{ news.title }}</h1>
      <div class="edit-container">
        <Button :to="`/edit-news/${news.slug}`" class="edit">
          Edit News
        </Button>
      </div>
    </div>
    <img :src="news.urlToImage" alt="News Image" class="news-image">
    <p>{{ news.content }}</p>
    <div class="back-button">
      <RouterLink to="/">Back to News</RouterLink>
    </div>
  </div>
</template>

<style>
  .news-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .header h1 {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  .edit-container {
    margin-left: auto;
  }
  
  .news-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .back-button {
    margin-top: 20px;
  }
  
  .back-button a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .back-button a:hover {
    color: #555;
  }
  
  .edit {
    background-color: darkgreen;
    text-decoration: none; 
    color: #f8f8f8;
    border-radius: 4px;
    padding: 3px 7px 3px 7px;
  }
  
  .edit:hover {
    background-color: darkseagreen;
    color: #222222;
  }
</style>
