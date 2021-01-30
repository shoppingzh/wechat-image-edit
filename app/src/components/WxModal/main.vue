<template>
  <div class="wx-modal-wrap">
    <div
      v-show="isVisible"
      class="wx-modal-overlay"
      :class="{ 'is-transparent': !overlay }"
      :style="{ zIndex: zIndex }"
      @click="handleClose" />
    <transition :name="position">
      <div
        v-show="isVisible"
        class="wx-modal"
        :class="[ `wx-modal--${position}` ]"
        :style="styles">
        <div v-show="hasTitle" class="wx-modal__title">
          <slot name="title" />
        </div>
        <div class="wx-modal__body">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
let minZIndex = 1000

export default {
  name: 'WxModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: 'bottom'
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      zIndex: (minZIndex += 2)
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.visible
      },
      set(newVal) {
        this.$emit('update:visible', newVal)
      }
    },
    hasTitle() {
      return this.title || this.$slots.title
    },
    styles() {
      const styles = {}
      styles['zIndex'] = this.zIndex + 1
      return styles
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    handleClose() {
      this.isVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .wx-modal-wrap {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }

  .wx-modal {
    position: fixed;
    z-index: 2;
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
    &--bottom {
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 15px 15px 0 0;
    }
  }
  .wx-modal-overlay {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    &.is-transparent {
      background-color: transparent;
    }
  }

  .bottom-enter-active, .bottom-leave-active {
    transition: all .3s ease-in-out;
  }
  .bottom-enter, .bottom-leave-to {
    transform: translateY(100%);
  }
</style>
