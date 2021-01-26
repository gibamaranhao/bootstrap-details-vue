import DetailsVue from './components/DetailsVue.vue'
import DetailsVueLabel from './components/DetailsVueLabel.vue'
import DetailsVueValue from './components/DetailsVueValue.vue'

const BootstrapDetailsVue = {
  install(Vue, options) {
    Vue.component('DetailsVue', DetailsVue);
    Vue.component('DetailsVueLabel', DetailsVueLabel);
    Vue.component('DetailsVueValue', DetailsVueLabel);
  }
}

export default BootstrapDetailsVue;

export { DetailsVue, DetailsVueLabel, DetailsVueValue };