import WxModal from './main'

WxModal.install = function(Vue) {
  Vue.component(WxModal.name, WxModal)
}

export default WxModal
