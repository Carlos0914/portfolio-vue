<script setup lang="ts">
import { RouteLocationRaw, RouterLink } from "vue-router"
defineProps<{ text: String, path: String, active?: Boolean }>()

</script>
<template>
  <RouterLink class="link" :to="(path as RouteLocationRaw)" :active="active">
    <span>
      <h4 style="font-size: inherit; margin-block-start: 1.33em; margin-block-end: 1.33em;">{{ text }}</h4>
    </span>
  </RouterLink>
</template>

<style>
.link {
  text-align: left;
  color: #777777;
  font-size: 16px;
}

.link span {
  display: flex;
  align-items: center;
  gap: 16px;

}

.link:hover,
.link[aria-selected=true] {
  font-size: 1.2rem;
}
</style>