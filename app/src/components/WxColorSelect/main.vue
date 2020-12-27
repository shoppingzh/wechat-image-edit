<template>
  <div class="wx-color-select">
    <div
      v-for="color in colors"
      :key="color"
      class="wx-color-select__item"
      :class="{ 'is-active': currColor === color }"
      :style="{ backgroundColor: color }"
      @click="currColor = color" />
  </div>
</template>

<script>
import defaultColors from './defaultColors'

export default {
  name: 'WxColorSelect',
  props: {
    value: {
      type: String,
      default: null
    },
    colors: {
      type: Array,
      default: () => defaultColors
    }
  },
  computed: {
    currColor: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  created() {
    if (!this.currColor) {
      this.currColor = this.colors[2]
    }
  }
}
</script>

<style lang="less" scoped>
  @size: 12px;
  .wx-color-select {
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__item {
      width: @size;
      height: @size;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 0 2px #fff;
      &.is-active {
        box-shadow: 0 0 0 4px #fff;
      }
    }
  }
</style>
