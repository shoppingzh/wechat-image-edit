import WxOverlay from './main'

WxOverlay.install = function(Vue) {
  Vue.component(WxOverlay.name, WxOverlay)
}

export default WxOverlay
