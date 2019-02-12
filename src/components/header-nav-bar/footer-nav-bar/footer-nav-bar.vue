<template>
<v-layout class="footer-container">
  <v-bottom-nav
      color="white"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
    </v-btn>
  </v-bottom-nav>
</v-layout>
</template>
<!-- file import -->
<script lang="ts" src="./footer-nav-bar.ts"></script>
<style lang="scss" scoped src="./footer-nav-bar.scss"></style>