<template>
  <v-container class="chat-container">
    <v-layout class="chat-message-container"
    row
    align-start
    >
      <div class="balloon-set-box left">
        <div class="icon-box">
          <img src="image.jpg" width="40" height="40" class="icon">
        </div>
        <div class="balloon">左からのコメント</div>
      </div>
    </v-layout>
    <v-layout style="margin-top: 25px;"
    row
    fill-height
    align-end>
      <chat-form></chat-form>
    </v-layout>
  </v-container>
</template>
<script lang="ts" src="./chatroom-page.ts"></script>
<style lang="scss" scoped src="./chatroom-page.scss"></style>