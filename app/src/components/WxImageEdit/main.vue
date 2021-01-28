<template>
  <div class="wx-image-edit">
    <div
      ref="layer"
      class="wx-image-edit__layer"
      @touchstart="handleTouchLayer"
      @touchmove="handleMoveLayer"
      @touchend="handleTouchLayerEnd">
      <image-layer
        ref="imageLayer"
        :url="url" />
      <Moveable
        v-for="face in faces"
        :key="face.id"
        class="wx-image-edit__layer__face"
        v-bind="{ draggable: true, resizable: true, zoom: 0 }"
        @drag="handleFaceDrag"
        @resize="handleFaceResize">
        <img
          :src="face.url">
      </Moveable>
    </div>
    <transition name="fade" appear>
      <tool-bar
        v-show="show.toolBar"
        @mode-change="handleModeChange"
        @done="handleDone" />
    </transition>
  </div>
</template>

<script>
import ImageLayer from './ImageLayer'
import ToolBar from './ToolBar'
import html2canvas from 'html2canvas'
import Moveable from 'vue-moveable'

export default {
  name: 'WxImageEdit',
  components: {
    ImageLayer,
    ToolBar,
    Moveable
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mode: null,
      faces: [],
      show: {
        toolBar: true
      }
    }
  },
  provide() {
    return {
      layer: this
    }
  },
  methods: {
    addFace(url) {
      this.faces.push({
        id: +new Date() + Math.random(),
        url
      })
    },
    handleModeChange(mode) {
      this.mode = mode
    },
    getImageLayerContext() {
      return this.$refs.imageLayer.getContext()
    },
    getLayerPosition(e) {
      const touch = e.touches[0]
      return {
        x: touch.clientX - this.$refs.layer.offsetLeft,
        y: touch.clientY - this.$refs.layer.offsetTop
      }
    },
    handleTouchLayer(e) {
      e.preventDefault()
      if (this.mode && this.mode.name === 'draw') {
        const ctx = this.getImageLayerContext()
        const position = this.getLayerPosition(e)
        ctx.beginPath()
        ctx.strokeStyle = this.mode.color
        ctx.lineWidth = this.mode.width
        ctx.round = 'round'
        ctx.moveTo(position.x, position.y)
      }
    },
    handleMoveLayer(e) {
      if (this.mode && this.mode.name === 'draw') {
        const ctx = this.getImageLayerContext()
        const position = this.getLayerPosition(e)
        ctx.lineTo(position.x, position.y)
        ctx.stroke()
      }
    },
    handleTouchLayerEnd() {
      if (this.mode && this.mode.name === 'draw') {
        this.getImageLayerContext().closePath()
      }
    },
    handleDone() {
      html2canvas(this.$refs.layer).then(canvas => {
        canvas.toBlob(blob => {
          this.$router.push({
            path: '/result',
            query: {
              url: URL.createObjectURL(blob)
            }
          })
        })
      })
    },
    handleFaceDrag(e) {
      e.target.style.transform = e.transform
    },
    handleFaceResize(e) {
      e.target.style.width = `${e.width}px`
      e.target.style.height = `${e.height}px`
    }
  }
}
</script>

<style lang="less" scoped>
  .wx-image-edit {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .9);
    // 图层
    &__layer {
      width: 100%;
      position: relative;
      font-size: 0;
      overflow: hidden;
      &__face {
        position: absolute;
        left: 0;
        top: 0;
        width: 30%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    canvas {
      background-color: rgba(orange, .5);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
