import api from './api.js';

export const state = {
  news: []
};

export const getters = {
  getNews: state => state.news,
  getNewsBySlug: state => slug => state.news.find(news => news.slug === slug)
};

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  },
  ADD_NEWS(state, news) {
    state.news.push(news);
  },
  UPDATE_NEWS(state, { slug, updatedNews }) {
    const index = state.news.findIndex(news => news.slug === slug);
    if (index !== -1) {
      state.news.splice(index, 1, updatedNews);
    }
  },
  DELETE_NEWS(state, slug) {
    state.news = state.news.filter(news => news.slug !== slug);
  }
};

function createSlug(title) {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return slug;
}

export const actions = {
  fetchNews({ commit }) {
    return api.getNews()
      .then(response => {
        const newsWithSlug = response.data.articles.map(news => ({
          ...news,
          slug: createSlug(news.title)
        }));
        commit('SET_NEWS', newsWithSlug);
      });
  },
  fetchNewsBySlug({ getters }, slug) {
    const existingNews = getters.getNewsBySlug(slug);
    if (existingNews) {
      return Promise.resolve(existingNews);
    } else {
      return api.getNewsBySlug(slug)
        .then(response => response.data)
        .catch(error => {
          console.log(error);
          return null;
        });
    }
  }
};
