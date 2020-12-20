<template>
  <canvas />
</template>

<script>
import { loadImage } from '@/utils/dom'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    const rw = this.$el.parentNode.offsetWidth
    const el = this.$el
    this.ctx = el.getContext('2d')
    loadImage(this.url).then(img => {
      const w = img.width, h = img.height
      const rh = rw / w * h
      el.width = rw
      el.height = rh
      this.ctx.drawImage(img, 0, 0, rw, rh)
    })
  },
  methods: {
    getContext() {
      return this.ctx
    }
  }
}
</script>

<style>

</style>
