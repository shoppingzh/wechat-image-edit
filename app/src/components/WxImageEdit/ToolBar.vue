<template>
  <div class="tool-bar">
    <div
      v-for="mode in modes"
      :key="mode.name"
      class="tool-bar__item"
      :class="{ 'is-active': currentMode === mode }"
      @click="handleModeChange(mode)">
      <i :class="icons[mode.name]" />
    </div>
    <div class="tool-bar__right">
      <wx-button size="mini" @click="$emit('done')">完成</wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMode: null,
      icons: {
        draw: 'icon-huizhi',
        face: 'icon-biaoqing',
        text: 'icon-wenzi',
        clip: 'icon-caijian',
        mosaic: 'icon-masaike'
      },
      modes: [
        { name: 'draw', color: 'orange', width: 3 },
        { name: 'face' },
        { name: 'text' },
        { name: 'clip' },
        { name: 'mosaic' }
      ]
    }
  },
  methods: {
    handleModeChange(mode) {
      this.currentMode = this.currentMode === mode ? null : mode
      this.$emit('mode-change', this.currentMode)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  @height: 50px;
  .tool-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: @height;
    // line-height: @height;
    padding: 0 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .9));
    &__item {
      flex: 0 1 15%;
      font-size: 20px;
      text-align: center;
      color: #fff;
      &.is-active {
        color: @wx-color-brand;
      }
    }
    &__right {
      flex: auto;
      text-align: right;
      font-size: 0;
    }
  }
</style>
