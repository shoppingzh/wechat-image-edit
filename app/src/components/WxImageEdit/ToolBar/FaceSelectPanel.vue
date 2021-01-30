<template>
  <div class="face-select-panel">
    <div class="face-select-panel__inner">
      <div class="face-select-panel__head">
        <wx-row align="middle">
          <wx-col flex="1">
            <i class="icon-aixin face-select-panel__head__icon" />
          </wx-col>
          <wx-col @click.native="handleCancel">
            <i class="icon-xiangxia" />
          </wx-col>
        </wx-row>
      </div>
        <div class="face-select-panel__main">
          <div class="face-select-panel__main__tips">添加的单个表情</div>
          <wx-face-select
            v-bind="$attrs"
            v-on="$listeners" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
  .face-select-panel {
    height: 300px;
    background-color: #131313;
    &__inner {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__head {
      flex-shrink: 0;
      color: #ada9aa;
      padding: 7px 12px;
      font-size: 14px;
      background-color: #3f3b3a;
      &__icon {
        display: inline-block;
        background-color: #161616;
        padding: 8px;
        color: #000;
        font-size: 18px;
        font-weight: 800;
        border-radius: 5px;
      }
    }
    &__main {
      height: 100%;
      overflow: auto;
      &__tips {
        font-size: 14px;
        color: #aeaeae;
        padding: 12px 15px 5px;
      }
    }
  }

</style>
