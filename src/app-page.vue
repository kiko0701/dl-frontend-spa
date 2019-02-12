<template>
<div id="app">
  <header-nav-bar 
  v-resize="setNowInnerWidth"
  :tabsRender="isHeaderTabsRender"
  ></header-nav-bar>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNavBarComponent from './components/header-nav-bar/header-nav-bar';
import { LARGE_TABLET_SCREEN_WIDTH } from './consts/screen-size.const';

@Component({
  name: 'App',
  components: {
    'header-nav-bar': HeaderNavBarComponent,
  },
})
export default class App extends Vue {

  /** ヘッダータブの描画を司るフラグ */
  private isHeaderTabsRender = true;

  constructor() {
    super();
  }

  /** ライフサイクルフック */
  private mounted() {
    // this.setNowInnerWidth();
  }

  /**
   * window幅取得を取得し、タブレットサイズ以下の場合ヘッダータブを非表示にする
   */
  // private setNowInnerWidth(): void {
  //   if (window.innerWidth < LARGE_TABLET_SCREEN_WIDTH) {
  //     this.isHeaderTabsRender = false;
  //   } else {
  //     this.isHeaderTabsRender = true;
  //   }
  // }
}
</script>
<style lang="scss" src="./app-page.scss"></style>

