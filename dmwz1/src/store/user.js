import { reactify } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref, reactive } from 'vue';

export const userStore = defineStore(
  'users',
  () => {
    const password = ref('');
    const username = ref('');
    let token = ref(1);
    // const pinglunAll = ref();
    return {
      password,
      username,
      token
    };
  },
  {
    persist: true
  }
);
