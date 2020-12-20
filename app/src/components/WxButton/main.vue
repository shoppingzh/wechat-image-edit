<template>
  <button
    class="wx-button"
    :class="[`wx-button--${size}`]"
    @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'WxButton',
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .wx-button {
    appearance: none;
    display: inline-block;
    color: #fff;
    background-color: @wx-color-brand;
    outline: 0;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    &--mini {
      padding: 4px 10px;
    }
    &--small {
      padding: 6px 14px;
    }
    &--medium {
      padding: 8px 24px;
    }
    &:hover {
      background-color: darken(@wx-color-brand, 3%);
    }
  }
</style>