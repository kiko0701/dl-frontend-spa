<template>
<div id="app">
  <header-nav-bar></header-nav-bar>
</div>
</template>

<script>
import HeaderNavBarComponent from './components/header-nav-bar/header-nav-bar.vue';
import Vue from 'vue';

export default {
  name: 'App',
  // コンポーネント登録
  components: {
    'header-nav-bar': HeaderNavBarComponent,
  },
  data() {
    return {
    };
  },
};
</script>
