<script lang="ts" setup>
defineProps({ reducePadding: Boolean || false })
</script>

<template>
  <div v-if="reducePadding" class="container c-1">
    <div class="i-1">
      <slot :child-data="children"></slot>
    </div>
  </div>
  <div v-else class="container c-2">
    <div class="i-2">
      <slot :child-data="children"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      children: []
    }
  }
}
</script>

<style scoped>
.container {
  flex-grow: 1;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  max-height: calc(100vh - 4rem - 2px);
  background-color: white;
  border: 1px solid #969696;
  box-shadow: 8px 8px 8px #8a8686;
}


@media (min-width: 600px) {
  .container {
    padding-right: 0;
  }

  .i-1 {
    padding-right: 0.5rem;
  }

  .i-2 {
    padding-right: 2rem;
  }
}

@media (min-width: 760px) {
  .container {
    max-width: calc(100vw - 7rem - 252px);
  }
}

.c-1 {
  max-width: calc(100vw - 5rem - 2px);
  padding: 2rem 0;
}

.i-1 {
  overflow: auto;
  padding: 0 0.5rem
}

.c-2 {
  max-width: unset;
  padding: 2rem 0;
}

.i-2 {
  overflow: auto;
  padding: 0 2rem;
}
</style>
