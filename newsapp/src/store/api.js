import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

export default {
  getNews() {
    return api.get('/everything?q=esports&apiKey=262ee1bf10154360b8b5c8fcc7027be5');
    // 262ee1bf10154360b8b5c8fcc7027be5 android
    // bbe05b4256b1449c810ecf49bec3f943 helmi
  },
  getNewsBySlug(slug) {
    return api.get(`/news/${slug}`);
  }
};
