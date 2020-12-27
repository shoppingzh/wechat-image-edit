<template>
  <div class="face-select-panel">
    <div class="face-select-panel__inner">
      <div class="face-select-panel__head">
      </div>
      <wx-face-select
        v-bind="$attrs"
        v-on="$listeners" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .face-select-panel {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &__head {
      height: 50px;
    }
    &__inner {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40%;
      border-radius: 15px 15px 0 0;
      background-color: rgba(0, 0, 0, .85);
      overflow: hidden;
      .wx-face-select {
        height: 100%;
      }
    }
  }
</style>
