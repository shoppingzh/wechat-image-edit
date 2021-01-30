<template>
  <div class="wx-face-select">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="wx-face-select__item"
      @click="handleSelect(item)">
      <div class="wx-face-select__item__inner">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>

// 加载所有表情
const loader = require.context('@/assets/faces')
const items = loader.keys().reduce((items, key) => {
  items.push(loader(key))
  return items
}, [])

export default {
  name: 'WxFaceSelect',
  data() {
    return {
      items
    }
  },
  created() {
  },
  methods: {
    handleSelect(item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="less" scoped>
  .wx-face-select {
    position: relative;
    width: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding: 0 4px;
    box-sizing: border-box;
    &:after {
      content: "";
      display: table;
      visibility: hidden;
      clear: both;
    }
    &__item {
      position: relative;
      float: left;
      width: 20%;
      height: 0;
      padding-top: 20%;
      &__inner {
        position: absolute;
        left: 4px;
        right: 4px;
        top: 4px;
        bottom: 4px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
</style>