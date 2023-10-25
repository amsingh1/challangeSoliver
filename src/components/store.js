

import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
  state: () => ({
    apiData: [],
  }),
  getters: {
    getApiData: (state) => state.apiData,
  },
  actions: {
    async fetchApiData() {
      try {
        const response = await fetch('https://6537ca4ba543859d1bb0d841.mockapi.io/clothes/winter/coats');
        if (!response.ok) {
          throw new Error('Failed to fetch API data');
        }
        const data = await response.json();
        this.apiData = data;
      } catch (error) {
        console.error('Failed to fetch API data:', error);
      }
    },
  },
});
