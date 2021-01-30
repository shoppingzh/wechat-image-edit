<template>
  <div
    class="wx-row"
    :class="[ `wx-row--align-${align}` ]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WxRow',
  props: {
    align: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style lang="less" scoped>
  .wx-row {
    display: flex;
    &--align-top {
      align-items: flex-start;
    }
    &--align-middle {
      align-items: center;
    }
    &--align-bottom {
      align-items: flex-end;
    }
  }
</style>
