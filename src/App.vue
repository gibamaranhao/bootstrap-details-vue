<template>
  <div id="app" class="container mt-3">
    <details-vue
      v-if="user"
      striped
      bordered
      label-align-left
      :fields="fields"
      :model="user"
      >

      <template #label(username)="{data}">
        <details-vue-label :item="data">
          Chupa
        </details-vue-label>
      </template>

      <template #value(username)="{data}">
        <td> {{ data.value }} </td>
      </template> 

      <template #value(rg)>
        <td>45684384348</td>
      </template>

    </details-vue>
  </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import DetailsVue      from './components/DetailsVue.vue'
import DetailsVueValue from './components/DetailsVueValue.vue'
import DetailsVueLabel from './components/DetailsVueLabel.vue'


export default {
  name: 'App',
  components: {
    DetailsVue,
    DetailsVueLabel,
    DetailsVueValue,
  },
  data() {
    return {
      user: null,
      fields: [
        'id', {key: 'username', label: 'Login'}, 'email', 'rg', 
      ]
    }
  },
  mounted() {
    axios.get('http://localhost:8080/data.json').then(response => {
      this.user = response.data;
    })
  }
}
</script>

<style>

</style>
