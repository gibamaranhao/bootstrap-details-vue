import DetailsVue from './components/DetailsVue.vue'
import DetailsVueLabel from './components/DetailsVueLabel.vue'

const BootstrapDetailsVue = {
  install(Vue, options) {
    Vue.component('DetailsVue', DetailsVue);
    Vue.component('DetailsVueLabel', DetailsVueLabel);
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BootstrapDetailsVue);
}

export default BootstrapDetailsVue;

export { DetailsVue, DetailsVueLabel };