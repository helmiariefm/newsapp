<template>
    <div>
      <form @submit.prevent="saveNews">
        <TextInput v-model="news.title" label="Judul" id="title" placeholder="Judul Berita"></TextInput>
        <TextInput v-model="news.image" label="Gambar" id="image" placeholder="URL Gambar"></TextInput>
        <CKEditor v-model="news.content" label="Isi Berita" id="content"></CKEditor>
        <div class="button-group">
          <Button type="submit" buttonText="Save"/>
          <Button :to="`/${news.slug}`" buttonText="Cancel"/>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { useRoute, useRouter } from 'vue-router';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import Button from '../components/Button.vue';
  import TextInput from '../atom/TextInput.vue';
  import CKEditor from '../atom/CKEditor.vue';
  import Swal from '../atom/Swal.vue';
  
  export default {
    components: {
      Button,
      TextInput,
      CKEditor,
      Swal,
    },
    data() {
      return {
        news: {
          slug: '',
          image: '',
          title: '',
          content: '',
        },
      };
    },
    methods: {
      saveNews() {
        this.$refs.swalComponent.show();
        console.log('Saved!');
      },
      handleConfirmation() {
        this.$router.push(`/${this.news.slug}`);
      },
    },
    mounted() {
      const route = useRoute();
      const store = useStore();
      const router = useRouter();
  
      const slug = route.params.slug;
  
      const existingNews = computed(() => store.getters['news/getNewsBySlug'](slug));
  
      if (existingNews.value) {
        this.news = { ...existingNews.value };
      } else {
        router.push('/');
      }
    },
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 20px;
    color: black;
  }
  
  .form-group label {
    font-weight: bold;
    color: #ddd;
  }
  
  .form-group input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .save-button,
  .cancel-button {
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .save-button {
    background-color: darkgreen;
    color: #f8f8f8;
    margin-right: 10px;
  }
  
  .cancel-button {
    background-color: #ddd;
    color: #222222;
    text-decoration: none;
  }
  </style>
  