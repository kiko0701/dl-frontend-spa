<template>
  <v-hover>
    <router-link 
    :to="{name: 'chatroom', params: {themeId: themeItem.id}}"
    slot-scope="{hover}" 
    :class="`elevation-${hover ? 12 : 2}`">
      <v-card class="theme-card-width">
        <v-img class="theme-img-height"
        :src="themeItem.imageUrl"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <p class="headline mb-0">{{themeItem && themeItem.firstComment}}</p>
          </div>
        </v-card-title>
        <v-card-actions>  
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </router-link>
  </v-hover>
</template>
<!--file import-->
<style lang="scss" scoped src="./theme-item.scss"></style>
<script lang="ts" scoped src="./theme-item.ts"></script>


