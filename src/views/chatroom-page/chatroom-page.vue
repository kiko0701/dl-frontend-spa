<template>
  <v-container class="chat-container">
    <!-- chat!! -->
    <v-layout class="chat-message-container">
      <div class="balloon-set-box left">
        <div class="icon-box">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg" width="40" height="40" class="icon">
        </div>
        <div class="balloon">左からのコメント</div>
      </div>
      <div class="balloon-set-box right">
      <div class="icon-box">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg" width="40" height="40" class="icon">
      </div>
      <div class="balloon">右からの長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーいコメント</div>
      </div>
      <div class="balloon-set-box right">
      <div class="icon-box">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg" width="40" height="40" class="icon">
      </div>
      <div class="balloon">わいわい</div>
      </div>
    </v-layout>
     <!-- chat end. -->
    <v-layout style="margin-top: 25px;"
    row
    align-end>
      <chat-form></chat-form>
    </v-layout>
  </v-container>
</template>
<script lang="ts" src="./chatroom-page.ts"></script>
<style lang="scss" scoped src="./chatroom-page.scss"></style>