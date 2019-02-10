<template>
  <v-hover>
    <router-link 
    :to="{name: 'chatroom', params: {themeId: roomItem.theme.id}}"
    slot-scope="{hover}" 
    :class="`elevation-${hover ? 12 : 2}`">
      <v-card class="theme-card-width">
        <v-img class="theme-img-height"
        :src="roomItem.theme.imageUrl"
        >
          <v-layout 
          xs12
          fill-height
          column>
            <v-flex xs12 align-start flexbox>
              <v-avatar color="indigo">
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
            </v-flex>
            <v-flex
            flexbox
            align-end
            justify-start>
            <v-badge overlap style="margin: 5px;">
              <span slot="badge">{{roomItem.funnyScore}}</span>
              <v-avatar
              color="purple">
                <v-icon dark>sentiment_very_satisfied</v-icon>
              </v-avatar>
            </v-badge>
            <v-badge overlap style="margin: 5px;">
              <span slot="badge">{{roomItem.unfunnyScore}}</span>
              <v-avatar
              color="purple">
                <v-icon dark>sentiment_very_satisfied</v-icon>
              </v-avatar>
            </v-badge>
            </v-flex>
          </v-layout>
        </v-img>
        <v-card-title 
        primary-title>
          <div style="display: flex; width: 100%;">
            <p class="headline mb-0" style="padding-top: 10px;">{{roomItem && roomItem.theme.firstComment}}</p>
          </div>
        </v-card-title>
        <v-card-actions style="display:flex; justify-content: space-between;">  
          <v-btn color="orange">ネタ作りにいく</v-btn>
          <v-btn color="blue" style="float: right">ネタを見に行く</v-btn>
        </v-card-actions>
      </v-card>
    </router-link>
  </v-hover>
</template>
<!--file import-->
<style lang="scss" scoped src="./room-item.scss"></style>
<script lang="ts" scoped src="./room-item.ts"></script>


