<template>
  <div>
    <v-content class="header-container">
      <v-toolbar 
        dark 
        tabs>
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
      <!-- TabMenu -->
      <v-tabs class="tab-bar-container"
        v-if="tabsRender"
        centered 
        dark
        fixed-tabs
        slider-color="yellow" 
        grow>
        <v-tab
          v-for="(headerMenu, i) in headerMenuList"
          :key="i"
          :to="headerMenu.path">{{headerMenu.menuTitle}}
          <v-icon class="v-icon-config">{{headerMenu.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-content>
    <router-view></router-view>
    <footer-nav-bar
    v-if="!tabsRender"
    :menuList="headerMenuList"></footer-nav-bar>
  </div>
</template>
<!-- file import -->
<script lang="ts" src="./header-nav-bar.ts"></script>
<style lang="scss" scoped src="./header-nav-bar.scss"></style>