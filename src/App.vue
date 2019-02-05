<template>
<div id="app">
    <header-nav-bar 
    v-resize="setNowInnerWidth"
    :tabsRender="isHeaderTabsRender"></header-nav-bar>
</div>
</template>

<script lang="ts" src="./App.ts"></script>
