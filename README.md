# bootstrap-details-vue

A simple bootstrap details view in vue.js

## Instalation
Instalation by npm
```shell
npm install --save bootstrap-details-vue
```

Use globally in Vue project
```JavaScript
import Vue from 'vue'
import App from './App.vue'

import BootstrapDetailsVue from 'bootstrap-details-vue'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapDetailsVue)

```

## Basic Usage
```vue
<template>
  <div class="container">
    <h1> Home </h1>

    <details-vue :model="user"></details-vue>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      user: {
        "id": 1,
        "username": "giba",
        "email": "giba@email.com",
        "firstname": "Giba",
        "lastname": "Maranhão",
        "status": "active",
        "role": "admin",
        "created_at": 1611642440,
        "updated_at": 1611642440
      },
    }
  }, 
}
</script>
```

## Properties
| Name | Type | Default | Description |
| ------|------|----|--------|
| model | Object | null | Model object to show in details |
| fields | Array | null | The fields configuration |
| striped | Boolean | false | Show rows with striped colors |
| borderless | Boolean | false | Remove inner lines |
| bordered | Boolean | true | Remove outer lines |
| label-align-left | Boolean | false | Show the label aligned to left |
| start-case | Boolean | true | Show first words uppercase in label |

