<script>
  import { mapGetters, mapActions } from 'vuex';
  import NewsCard from '../components/NewsCard.vue'

  export default{
    components:{
      NewsCard
    },
    computed: {
      ...mapGetters('news', ['getNews']),
      articles() {
        return this.getNews;
      },
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      fetchNews() {
        this.$store.dispatch('news/fetchNews');
      },
    }    
  }
</script>

<template>
  <div class="news-grid">
    <NewsCard v-for="article in articles" :key="article.id" :article="article"/>
  </div>
</template>


<style>
  .news-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 5rem; 
    padding: 0rem 7rem 0rem 7rem;
  }
</style>