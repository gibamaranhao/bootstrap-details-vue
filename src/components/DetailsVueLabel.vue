<template>  
    <td class="font-weight-bold" :class="getClasses"> 
      <slot>
        {{ getTitle() }}
      </slot> 
    </td>  
</template>

<script>
import { startCase } from 'lodash'

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
    }
  },

  methods: {
    getTitle() {
      return this.startCase ? startCase(this.item.label) : this.item.label;
    }
  }
}
</script>

<style>

</style>