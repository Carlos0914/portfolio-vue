<template>
  <span v-bind="$attrs" class="info-row">
    <slot :child-data="children"></slot>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    attrs: Object
  },
  data() {
    return {
      children: []
    }
  }
}
</script>

<style scoped >
.info-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  row-gap: 0;
}

:deep(span) {
  display: flex;
  align-items: center;
  gap: 10px;
}

:deep(p) {
  margin: 0;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
}
</style>