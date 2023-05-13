<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
    computed: {
      slug() {        
        return this.generateSlug(this.article.title);
      },
    },
    methods: {
      generateSlug(title) {
        return title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
      },
    }
  };
</script>

<template>
    <RouterLink style="text-decoration: none;" :to="`/${article.slug}`" class="card">
      <img :src="article.urlToImage" alt="Gambar Berita">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>      
    </RouterLink>  
</template>


<style>

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  .card img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .card h2 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 500;
    color: #222222;
    text-align: left;
    padding: 0px 7px 0px 7px;    
  }

  .card p {
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
    color: #222222;
    padding: 0px 7px 9px 7px;    
  }  
</style>
