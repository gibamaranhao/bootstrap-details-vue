<template>
  <div id="app" class="container mt-3">
    <details-vue
      striped
      bordered
      :model="user">

        <template #value(username)="{data}">
          <td> Oi, meu nome é {{ data.value }}</td> 
        </template>
        
      </details-vue>
  </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import DetailsVue      from './components/DetailsVue.vue'
import DetailsVueLabel from './components/DetailsVueLabel.vue'


export default {
  name: 'App',
  components: {
    DetailsVue,
    DetailsVueLabel,
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
