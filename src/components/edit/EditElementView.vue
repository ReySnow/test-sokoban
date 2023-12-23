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
    <div class="flex space-x-2 m-2">
      <div>玩家:</div>
      <EditElement :editElement="playerEditElement"></EditElement>
    </div>
    <div class="flex space-x-2 m-2">
      <div>箱子:</div>
      <EditElement :editElement="cargoEditElement"></EditElement>
    </div>
    <div class="flex space-x-2 m-2">
      <div>放置点:</div>
      <EditElement :editElement="targetEditElement"></EditElement>
    </div>
    <div>当先选择的元素：{{ selectedEditElementName }}</div>
  </div>
</template>

<script setup lang="ts">
import {
  cargoEditElement,
  floorEditElement,
  playerEditElement,
  targetEditElement,
  useEditElementStore,
  wallEditElement
} from '@/store/edit/editElement'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { computed, toRefs, watchEffect } from 'vue'
import EditElement from './EditElement.vue'
const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
const { row, col } = toRefs(useMapEditStore())
const { getCurrentSelectedEditElement } = useEditElementStore()

const selectedEditElementName = computed(() => {
  const element = getCurrentSelectedEditElement()
  if (!element) return '没有选择'
  return element.name
})

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
