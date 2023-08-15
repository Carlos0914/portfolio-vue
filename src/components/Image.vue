<template>
  <img :src='src' v-bind="$attrs" loading="lazy" :style="customStyle"/>
</template>

<script lang="ts">
export default {
  
  props: {
    src: String,
    width: Number,
    height: Number,
    style: Object,
    attrs: Object
  },
  computed: {
    customStyle () {
      return {
        width: this.width + 'px',
        height: (this.height && this.height + 'px') || "auto",
        'border-radius': '40px',
        'max-width': '100%',
        'object-fit': "scale-down",
        ...this.style
      };
    }
  }
}
</script>