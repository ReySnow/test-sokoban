<template>
  <div>
    <div class="flex" v-for="(row, i) in map" :key="i">
      <div v-for="col in row">
        <template v-if="col === MapTile.FLOOR">
          <img :src="floorImg" />
        </template>
        <template v-else-if="col === MapTile.WALL">
          <img :src="wallImg" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile, useMapStore } from '@/store/map'
const { map } = useMapStore()
</script>

<style scoped></style>
