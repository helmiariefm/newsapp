import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

export default {
  getNews() {
    return api.get('/everything?q=esports&apiKey=bbe05b4256b1449c810ecf49bec3f943');
  },
  getNewsBySlug(slug) {
    return api.get(`/news/${slug}`);
  }
};
