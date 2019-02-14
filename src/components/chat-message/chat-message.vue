<template>
  <div class="balloon-set-box"
  :class="{ other: isOther, 'not-other': !isOther }">
    <div class="icon-box"
    v-show="isOther && !isLaugh">
      <v-img width="40" height="40" class="icon"
      :src="chatMessage.iconURL"></v-img>
    </div>
    <div class="balloon"
    :class="{
      boke: chatMessage.action && chatMessage.act === 'boke', 
      tukkomi: chatMessage.action && chatMessage.act === 'tukkomi'
    }">
    {{chatMessage.content}}
    </div>
  </div>
</template>
<!-- file import -->
<script lang="ts" src="./chat-message.ts"></script>
<style lang="scss" scoped src="./chat-message.scss"></style>


