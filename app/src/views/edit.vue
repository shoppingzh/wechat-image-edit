<template>
  <div class="page-edit">
    <wx-image-edit :url="url" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  },
  mounted() {
    console.log(this.url)
  }
}
</script>

<style lang="less" scoped>
  .page-edit {
    height: 100%;
  }
</style>