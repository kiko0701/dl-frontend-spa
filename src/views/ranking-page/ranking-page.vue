<template>
  <v-container style="display:flex;"
  fluid 
  grid-list-sm 
  justify-space-between>
    <v-layout style="max-width: 50vw; background-color: red;" 
    column 
    justify-space-around>
      <v-flex class="ranking-container"
        v-for="roomItem in roomItems"
        :key="roomItem.id"
        shrink
      >
        <room-item
        :key="roomItem.id"
        :roomItem="roomItem">
        </room-item>
      </v-flex>
    </v-layout>
    <v-layout style="max-width: 50vw; background-color: black;" 
    column 
    justify-space-around>
    <v-flex class="ranking-container"
        v-for="roomItem in roomItems"
        :key="roomItem.id"
        shrink>
        <room-item
        :key="roomItem.id"
        :roomItem="roomItem">
        </room-item>
    </v-flex>
  </v-layout>
</v-container>
</template>
<style lang="scss" scoped src="./ranking-page.scss"></style>
<script lang="ts" src="./ranking-page.ts"></script>


