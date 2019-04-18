<template>
  <v-bottom-nav
  class="footer-container"
  absolute
  dark>
    <v-btn
    color="teal"
    flat
    value="recent"
    v-for="(footerMenu, i) in footerMenuList"
    :key="i"
    :to="footerMenu.path">{{footerMenu.menuTitle}}
      <v-icon>{{footerMenu.icon}}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>
<!-- file import -->
<script lang="ts" src="./footer-nav-bar.ts"></script>
<style lang="scss" scoped src="./footer-nav-bar.scss"></style>