<template>
  <v-container class="ranking-page-container">
    <v-layout column justify-space-around>
      <h1 class="top-ranking-title">トップランキング</h1>
      <div class="top-ranking-container">
        <v-flex class="ranking-container"
          v-for="(roomItem, index) in roomItems"
          :key="roomItem.id"
          shrink
          justify-space-around
        >
          <room-item
          :key="roomItem.id"
          :roomItem="roomItem"
          :isShowScore="true"
          :isShowRanking="true"
          :ranking="index + 1">
          </room-item>
        </v-flex>
      </div>
    </v-layout>
    <v-layout column justify-space-around>
      <v-flex justify-start>
        <h1 class="top-ranking-title">ワーストランキング</h1>
      </v-flex>
      <div class="worst-ranking-container">
        <v-flex class="ranking-container"
          v-for="(roomItem, index) in roomItems"
          :key="roomItem.id"
          shrink
          justify-space-around
        >
          <room-item
          :key="roomItem.id"
          :roomItem="roomItem"
          :isShowScore="true"
          :isShowRanking="true"
          :ranking="index + 1">
          </room-item>
        </v-flex>
      </div>
    </v-layout>
</v-container>
</template>
<style lang="scss" scoped src="./ranking-page.scss"></style>
<script lang="ts" src="./ranking-page.ts"></script>


