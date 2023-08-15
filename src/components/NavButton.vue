<script setup lang="ts">
import { RouteLocationRaw, RouterLink } from "vue-router"
defineProps<{ text: String, path: String, active?: Boolean }>()

</script>
<template>
  <RouterLink class="link" :to="(path as RouteLocationRaw)" :active="active">
    <span>
      <h4>{{ text }}</h4>
    </span>
  </RouterLink>
</template>

<style>
.link {
  text-align: left;
  color: #777777;
}

.link span {
  display: flex;
  align-items: center;
  gap: 16;

}

.link:hover,
.link[aria-selected=true] {
  font-size: 1.2rem;
}
</style>