<template>
<div id="app">
    <header-nav-bar></header-nav-bar>
</div>
</template>

<script lang="ts">
import HeaderNavBarComponent from './components/header-nav-bar/header-nav-bar';
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
