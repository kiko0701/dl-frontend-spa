<template>
<v-container class="screen-container">
  <!-- chat!! -->
  <v-container class="chat-container">
    <v-layout class="chat-message-container">
      <chat-message
      v-for="chatMessage in chatMessages"
      :key="chatMessage.count"
      :chatMessage="chatMessage"
      :isLaugh="false"></chat-message>
    </v-layout>
  </v-container>
  <!-- chat end. -->
  <v-layout style="margin-top: 50px;"
  row
  align-end>
    <chat-form
    @send="addChatMessage"></chat-form>
  </v-layout>
</v-container>
</template>
<script lang="ts" src="./chatroom-page.ts"></script>
<style lang="scss" scoped src="./chatroom-page.scss"></style>