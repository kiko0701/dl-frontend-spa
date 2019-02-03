<template>
  <div>
    <v-toolbar 
    dark 
    tabs
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
    </v-toolbar>
    <v-tabs
      class="tab-bar-container"
      centered 
      dark
      fixed-tabs
      slider-color="yellow" 
      grow
      >
        <v-tab to="/makelaugh">
          笑わす
          <v-icon class="v-icon-config">star</v-icon>
        </v-tab>

        <v-tab to="/laugh">
          笑う
          <v-icon class="v-icon-config">sentiment_very_satisfied</v-icon>
        </v-tab>

        <v-tab to="/ranking">
          ランキング
          <v-icon class="v-icon-config">favorite</v-icon>
        </v-tab>
      </v-tabs>
      <router-view></router-view>
  </div>
</template>
<!-- file import -->
<script lang="ts" src="./header-nav-bar.ts"></script>
<style lang="scss" scoped src="./header-nav-bar.scss"></style>