<template>
  <div>
    <theme-item 
    v-for="themeItem in themeItems"
    :key="themeItem.id"
    :themeItem="themeItem"
    ></theme-item>
  </div>
</template>
<!-- File Import -->
<script lang="ts" src="./laugh-page.ts"></script>
<style lang="scss" scoped src="./laugh-page.scss"></style>

