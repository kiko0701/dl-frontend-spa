<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="themeItem.image_url"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{themeItem && themeItem.first_comment}}</h3>
          </div>
        </v-card-title>

        <v-card-actions>  
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<!--file import-->
<style lang="scss" scoped src="./theme-item.scss"></style>
<script lang="ts" scoped src="./theme-item.ts"></script>


