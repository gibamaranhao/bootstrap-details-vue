<template>
  <div>
    <table class="table" :class="getClasses" v-if="model"> 
      <tbody>
        <tr  v-for="(item, index) of getItems" :key="index">
          <slot 
            :name="getModelLabel(item)"
            v-bind:data="{...item, model}">
            <details-vue-label 
              :label-align-left="labelAlignLeft"
              :item="item" 
              :start-case="startCase"></details-vue-label>
          </slot>

          <slot 
            :name="getModelValue(item)" 
            v-bind:data="{...item, model}">
            <td> {{ item.value }} </td>
          </slot>
        </tr>
      </tbody>
    </table>    
  </div>
</template>

<script>
import DetailsVueLabel from './DetailsVueLabel.vue'

export default {
  components: {
    DetailsVueLabel, 
  },
  props: {
    model: Object,
    fields: Array,
    striped: Boolean,
    bordered: Boolean,
    borderless: Boolean,
    variant: String,
    labelAlignLeft:  {
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
      return {
        'table-striped': this.striped,
        'table-bordered': this.bordered,
        'table-borderless': this.borderless,
        [`table-${this.variant}`]: this.variant !== null,
      }
    },
    getItems() {
      if(!this.fields) {
        return this.getOnlyObjectItems();
      } else {
        return this.getFieldNamesItems();
      }
    },    
  },
  methods: {
    getModelValue(item) {
      return `value(${item.key})`;
    },
    getModelLabel(item) {
      return `label(${item.key})`;
    },
    getOnlyObjectItems() {
      let processedFields = [];
      Object.entries(this.model).forEach(([fieldName, fieldValue]) => {
        processedFields.push({
          key: fieldName,
          label: fieldName,
          value: fieldValue,
        });
      });
      return processedFields;
    },
    getFieldNamesItems() {
      let processedFields = [];
      this.fields.forEach((field) => {
        processedFields.push({
          key: typeof field === 'string' ? field : field.key,
          label: typeof field === 'string' ? field : (field.label ? field.label : field.key),
          value: this.model[(typeof field === 'string' ? field : field.key)],
        });        
      });
      return processedFields;
    }
  }
}
</script>

<style>

</style>