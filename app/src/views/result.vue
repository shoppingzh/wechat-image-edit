<template>
  <div class="page-result">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: this.$route.query.url
    }
  }
}
</script>

<style lang="less" scoped>
  .page-result {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
