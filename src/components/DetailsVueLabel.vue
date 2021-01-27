<template>  
    <td class="font-weight-bold" :class="getClasses"> 
      <slot>
        {{ getTitle }}
      </slot>
    </td>  
</template>

<script>
import { startCase, get } from 'lodash'

export default {
  props: {
    item: Object,
    labelAlignLeft: {
      type: Boolean,
      default: () => false,
    },
    startCase: {
      type: Boolean,
      default: () => true,
    }
  },

  computed: {
    getClasses() {
      return {'text-right': !this.labelAlignLeft};
    },
    getTitle() {
      return this.startCase ? startCase(get(this, 'item.label')) : get(this, 'item.label');
      
    }
  },

}
</script>

<style>

</style>