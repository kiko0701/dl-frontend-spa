<template>
  <v-card width="350px">
    <v-img
    :src="themeItem.imageUrl"
    height="200px"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{themeItem && themeItem.firstComment}}</h3>
      </div>
    </v-card-title>
    <v-card-actions>  
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>
<!--file import-->
<style lang="scss" scoped src="./theme-item.scss"></style>
<script lang="ts" scoped src="./theme-item.ts"></script>


