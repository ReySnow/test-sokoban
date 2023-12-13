<template>
  <div class="p-2">
    <h3>元素选择区</h3>
    <div class="m-2 space-y-2">
      <div class="flex">
        row: <input type="number" class="border border-blue-50" v-model="row" />
      </div>
      <div class="flex">
        col: <input type="number" class="border border-blue-50" v-model="col" />
      </div>
    </div>
    <div class="flex space-x-2 m-2">
      <div>地图:</div>
      <EditElement :editElement="wallEditElement"></EditElement>
      <EditElement :editElement="floorEditElement"></EditElement>
    </div>
  </div>
</template>

<script setup lang="ts">
import { floorEditElement, wallEditElement } from '@/store/edit/editElement'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { toRefs, watchEffect } from 'vue'
import EditElement from './EditElement.vue'
const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
const { row, col } = toRefs(useMapEditStore())

initMap()

watchEffect(() => {
  if (!row.value) return
  updateMapRow()
})
watchEffect(() => {
  if (!col.value) return
  updateMapCol()
})
</script>

<style scoped></style>
