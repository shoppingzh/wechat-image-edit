<template>
  <div class="tool-bar">
    <div class="tool-bar__main">
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
    <div v-if="currentMode" class="tool-bar__conf">
      <wx-color-select v-if="currentMode.name === 'draw'" v-model="currentMode.color" />
      <transition name="slideUp">
        <div v-if="currentMode.name === 'face'" class="tool-bar__face-panel">
          <div class="tool-bar__face-panel__head">
            hello
          </div>
          <wx-face-select v-model="currentMode.url"  />
        </div>
      </transition>
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
        { name: 'draw', color: null, width: 3 },
        { name: 'face', url: null },
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
    height: @height;
    padding: 0 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .9));
    &__main {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
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

    // 设置区
    &__conf {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
      padding: 10px;
    }

    // 表情面板
    &__face-panel {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40%;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      &__head {
        background-color: rgba(0, 0, 0, .85);
      }
    }
  }

  .slideUp-enter-active, .slideUp-leave-active {
    transition: height .3s;
  }
  .slideUp-enter, .slideUp-leave-to {
    height: 0;
  }
</style>
