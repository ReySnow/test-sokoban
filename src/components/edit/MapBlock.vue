<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[y][x] === MapTile.FLOOR">
      <img :src="floorImg" />
    </template>
    <template v-else-if="map[y][x] === MapTile.WALL">
      <img :src="wallImg" />
    </template>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { MapTile } from '@/store/map'

interface Props {
  x: number
  y: number
}

const props = defineProps<Props>()
const { map } = useMapEditStore()

function handleClick() {
  map[props.y][props.x] = MapTile.WALL
}
</script>

<style scoped></style>
