<template>
  <div class="balloon-set-box"
  :class="{ left: isOther, right: !isOther }">
    <div class="icon-box">
      <v-img width="40" height="40" class="icon"
      :src="chatMessage.iconURL"></v-img>
    </div>
    <div class="balloon">{{chatMessage.content}}</div>
  </div>
</template>
<!-- file import -->
<script lang="ts" src="./chat-message.ts"></script>
<style lang="scss" scoped src="./chat-message.scss"></style>


