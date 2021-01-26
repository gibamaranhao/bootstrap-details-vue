# bootstrap-details-vue

A simple bootstrap details view in vue.js

## Installation
Installation by npm
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

## Usage on Demand
You can use bootstrap-details-vue on demand importing directly the component:

```vue
<template>
  <div>
    <details-vue :model="user"></details-vue>
  </div>
</template>

<script>
import { DetailsVue } from 'bootstrap-details-vue'

export default {
  components: {
    DetailsVue
  },
  data() {
    return {
      user: {
        "id": 1,
        "username": "giba",
        // ...
      },
    }
  }, 
}
</script>
```

## Easy to use properties
boostrap-details-vue has a set of properties to easily configure the grid

```vue
<template>
  <div>
    <details-vue :model="user" borderless bordered striped label-align-left start-case ></details-vue>
  </div>
</template>
```
Comming soon new properties to configure the colors.

## Configure Fields
Using the property 'fields' you can configure which fields will be shown and change the label to these fields:
```vue
<template>
  <div>
    <details-vue :model="user" :fields="fields" ></details-vue>
  </div>
</template>

<script>
import { DetailsVue } from 'bootstrap-details-vue'

export default {
  components: {
    DetailsVue
  },
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
      fields: [
        'id',
        'email',
        {key: "username", label: "Login"},
        {key: "firstname", label: "First Name"},
        'status',
      ]
    }
  }, 
}
</script>
```
## Slots
Using 'slots' you can show the data exactly as you need it:

```vue
<template>
  <div>
    <details-vue :model="user" :fields="fields" >

      <template #label(email)="{data}">
        <td class="text-danger text-right font-weight-bold"> {{ data.label }}  </td>
      </template>

      <template #value(email)="{data}">
        <td> <a :href="`mailto:${data.value}`"> {{ data.value }} </a> </td>
      </template>

      <template #value(created_at)="{data}">
        <td> {{ new Date(data.value) }} </td>
      </template>
    </details-vue>
  </div>
</template>
```
You can add fields that are not in the model, just add it in 'fields' and create the slot related to it 

```vue
<template>
  <div>
    <details-vue :model="user" :fields="fields" >

      <template #value(complete_name)="{data}">
        <td> {{ data.model.firstname}} {{ data.model.lastname }} </td>
      </template>

    </details-vue>
  </div>
</template>

<script>
import { DetailsVue } from 'bootstrap-details-vue'

export default {
  components: {
    DetailsVue
  },
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
      fields: [
        'complete_name'
      ]
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

