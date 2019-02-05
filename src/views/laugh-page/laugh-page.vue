<template>
<v-container class="header-tabs-container"
  fluid 
  grid-list-sm 
  justify-space-between>
  <v-layout  wrap justify-space-around>
    <v-flex 
      v-for="themeItem in themeItems"
      :key="themeItem.id"
      :themeItem="themeItem"
      shrink
      style="padding: 15px;">
      <theme-item
      :key="themeItem.id"
      :themeItem="themeItem">
      </theme-item>
    </v-flex>
  </v-layout>
</v-container>
</template>
<!-- File Import -->
<script lang="ts" src="./laugh-page.ts"></script>
<style lang="scss" scoped src="./laugh-page.scss"></style>

