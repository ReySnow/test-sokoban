<template>
  <div class="p-2">
    <h3>元素选择区</h3>
    <div class="flex space-x-2 m-2">
      <div>地图:</div>
      <EditElement :editElement="wallEditElement"></EditElement>
      <EditElement :editElement="floorEditElement"></EditElement>
    </div>
  </div>
</template>

<script setup lang="ts">
import { floorEditElement, wallEditElement } from '@/store/edit/editElement'
import EditElement from './EditElement.vue'
</script>

<style scoped></style>
