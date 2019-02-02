<template>
  <div>
    <v-toolbar 
    dark 
    tabs
    color="#212121"
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs
      class="tab-bar-container"
      slot="extension"
      centered 
      dark
      slider-color="yellow" 
      grow
      >
        <v-tab href="#tab-1">
          笑わす
          <v-icon class="v-icon-config">star</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          笑う
          <v-icon class="v-icon-config">sentiment_very_satisfied</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          ランキング
          <v-icon class="v-icon-config">favorite</v-icon>
        </v-tab>

        <v-tab-item v-for="i in 3" :value="'tab-' + i" :key="i"></v-tab-item>
      </v-tabs>
    </v-toolbar>
  </div>
</template>
<!--file import-->
<script lang="ts" src="./header-nav-bar.ts"></script>
<style lang="scss" scoped src="./header-nav-bar.scss"></style>