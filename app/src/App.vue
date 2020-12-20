<template>
  <div id="app">
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less" scoped>
  .page-enter, .page-leave-to {
    transform: translateX(-100%);
  }
  .page-enter-active, .page-leave-active{
    transition: transform .3s;
  }
</style>
