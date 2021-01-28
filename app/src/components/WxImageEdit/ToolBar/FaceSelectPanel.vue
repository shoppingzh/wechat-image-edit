<template>
  <div
    v-show="visible"
    class="face-select-panel">
    <div
      class="face-select-panel__overlay"
      @click="handleClose" />
    <transition name="slideUp">
      <div class="face-select-panel__inner">
        <div class="face-select-panel__head">
          选择表情
        </div>
          <div class="face-select-panel__main">
            <wx-face-select
              v-bind="$attrs"
              v-on="$listeners" />
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    visible: {
      get() {
        return !!this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods: {
    handleClose() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .face-select-panel {
    &__overlay {
      position: fixed;
      z-index: 100;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    &__head {
      flex-shrink: 0;
      color: #ddd;
      padding: 10px;
      font-size: 14px;
    }
    &__main {
      overflow: auto;
    }
    &__inner {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 101;
      display: flex;
      flex-direction: column;
      height: 40%;
      border-radius: 15px 15px 0 0;
      background-color: rgba(0, 0, 0, .85);
      overflow: hidden;
      .wx-face-select {
        height: 100%;
      }
    }
  }

  // 动效
  .slideUp-enter-active, .slideUp-leave-active {
    transition: all 15s;
  }
  .slideUp-enter, .slideUp-leave-to {
    height: 0;
  }
</style>
