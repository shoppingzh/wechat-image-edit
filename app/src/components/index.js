import Vue from 'vue'
const moduleLoader = require.context('.', true, /index.js$/)

moduleLoader.keys().forEach(name => {
  const module = moduleLoader(name).default
  if (!module || typeof module !== 'object' || !module.install) return
  Vue.use(module)
})
