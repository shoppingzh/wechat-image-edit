<template>
  <div class="wx-overlay" />
</template>

<script>
export default {
  name: 'WxOverlay'
}
</script>

<style lang="less" scoped>
  .wx-overlay {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
