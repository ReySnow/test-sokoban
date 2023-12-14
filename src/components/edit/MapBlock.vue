<template>
  <div
    class="border border-white"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
  >
    <template v-if="map[y][x] === MapTile.FLOOR">
      <img :src="floorImg" draggable="false" />
    </template>
    <template v-else-if="map[y][x] === MapTile.WALL">
      <img :src="wallImg" draggable="false" />
    </template>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { useDrag } from '@/composables/useDrag'
import { useEditElementStore } from '@/store/edit/editElement'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { MapTile } from '@/store/map'

interface Props {
  x: number
  y: number
}

const props = defineProps<Props>()
const { map } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
const { startDrag, isDragging, stopDrag } = useDrag()

function handleClick() {
  getCurrentSelectedEditElement()?.execute(props)
}
function handleMouseDown() {
  startDrag()
  window.addEventListener('mouseup', handleMouseUp)
}
function handleMouseMove() {
  if (isDragging()) getCurrentSelectedEditElement()?.execute(props)
}
function handleMouseUp() {
  stopDrag()
  window.removeEventListener('mouseup', handleMouseUp)
}
</script>

<style scoped></style>
