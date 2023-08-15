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
      console.log(this)
      return {
        width: this.width + 'px',
        height: (this.height && this.height + 'px') || "auto",
        borderRadius: '40px',
        maxWidth: '100%',
        objectFit: "scale-down",
        ...this.style
      };
    }
  }
}
</script>