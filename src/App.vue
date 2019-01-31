<template>
  <header-nav-bar></header-nav-bar>
</template>

<script>
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.ts';
import Vue from 'vue';

export default {
  name: 'App',
  // コンポーネント登録
  components: {
    'header-nav-bar': HeaderNavBarComponent,
  },
  data() {
    return {
      // Propsとか登録ここにするの？めっちゃ凡長にならん？
    };
  },
};
</script>
