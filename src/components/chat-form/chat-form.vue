<template>
  <v-layout class="chat-form-container" row align-end>
    <div>
      <div class="alert-container">{{alertMessage}}</div>
      <div class="cp_iptxt">
        <input
          class="effect"
          type="text"
          placeholder="チャット"
          v-model="chatMessage.content"
          @keyup.enter="keypress"
        >
        <span class="focus_bg"></span>
      </div>
    </div>
    <v-btn flat icon color="green" class="send-btn">
      <v-icon>send</v-icon>
    </v-btn>
  </v-layout>
</template>
<script lang="ts" src="./chat-form.ts"></script>
<style lang="scss" scoped src="./chat-form.scss"></style>


