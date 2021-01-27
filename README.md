# bootstrap-details-vue

A simple bootstrap details view in vue.js using conventional table

## Installation
Installation with npm
```shell
npm install --save bootstrap-details-vue
```
Installation with yarn
```shell
yarn add bootstrap
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
Using **vue slots** you can show the data exactly as you need it:

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
You can add fields that are not in the model, just add it in **fields** and create the slot related to it 

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

## Styling
You can alternate color of the DetailsVue using the **variant** property according to your variant configurations.
Inside the cells you can use vue slots to add the bootstrap classes to the &lt;td&gt; tags. Ex.: table-primary, bg-dark, text-light, etc.

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
| variant | String | null | Variant color for hole table |

## DetailsVueLabel Component

The component **DetailVueLabel** renders the default style of DetailsVue field labels. You can use it inside a named slot of the label.
```vue
<template>
  <div id="app">
   <details-vue :model="user">
     <template #label(username)>
       <details-vue-label> User Name </details-vue-label>
     </template>
   </details-vue>
  </div>
</template>

<script>

import { DetailsVue, DetailsVueLabel } from 'bootstrap-details-vue'

export default {
  name: 'App',
  components: {
    DetailsVue,
    DetailsVueLabel,
  },
  data() {
    return {
      user: {
        id: 1,
        username: 'giba',
        //...
      }
    }
  }
}
</script>
```
### properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| item     | Object | null  | Item data from slot { key, label, value, model }.To use it you must remove content inside |
| label-align-left | Boolean | false | Align text left |
| start-case | Boolean | true | Fist letters in upper case. Only available with param **item** defined |





