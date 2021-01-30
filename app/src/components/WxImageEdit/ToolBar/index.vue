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
      
    </div>
    <wx-modal
      :visible.sync="isFaceSelectActive"
      :overlay="false">
      <face-select-panel
        @change="handleSelectFace"
        @cancel="isFaceSelectActive = false" />
    </wx-modal>
  </div>
</template>

<script>
import FaceSelectPanel from './FaceSelectPanel'

export default {
  components: {
    FaceSelectPanel
  },
  inject: [
    'layer'
  ],
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
  computed: {
    isFaceSelectActive: {
      get() {
        return this.currentMode ? this.currentMode.name === 'face' : false
      },
      set() {
        this.currentMode = null
      }
    }
  },
  methods: {
    handleModeChange(mode) {
      this.currentMode = this.currentMode === mode ? null : mode
      this.$emit('mode-change', this.currentMode)
    },
    handleSelectFace(url) {
      this.layer.addFace(url)
      this.handleModeChange(null)
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

  }

  .slideUp-enter-active, .slideUp-leave-active {
    transition: height .3s;
  }
  .slideUp-enter, .slideUp-leave-to {
    height: 0;
  }
</style>
