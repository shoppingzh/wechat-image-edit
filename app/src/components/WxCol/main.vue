<template>
  <div
    class="wx-col"
    :class="classes"
    :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WxCol',
  props: {
    flex: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    isSpan() {
      return typeof this.flex === 'number'
    },
    classes() {
      const classes = []
      if (this.isSpan) {
        classes.push(`wx-col-${this.flex}`)
      }
      return classes
    },
    styles() {
      const styles = {}
      if (!this.isSpan) {
        styles['flex'] = this.flex
      }
      return styles
    }
  }
}
</script>

<style lang="less" scoped>
  .wx-col {

  }
</style>
