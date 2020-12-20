<template>
  <div class="page-home">
    <wx-button @click="handleSelectFile"><i class="icon-tupian"/> 选择一张照片</wx-button>
  </div>
</template>

<script>
import { chooseFile } from '@/utils/dom'
export default {
  methods: {
    handleSelectFile() {
      chooseFile().then(files => {
        const url = URL.createObjectURL(files[0])
        this.$router.push({
          path: '/edit',
          query: {
            url
          }
        })
      })
    }
  }
}
</script>

<style>
  .page-home {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>