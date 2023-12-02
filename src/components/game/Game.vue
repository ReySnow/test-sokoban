<template>
  <div>
    <Map></Map>
    <Player></Player>
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCargoStore } from '@/store/cargo'
import Cargo from './Cargo.vue'
import Map from './Map.vue'
import Player from './Player.vue'

const { cargos, addCarge, createCargo } = useCargoStore()

addCarge(createCargo({ x: 2, y: 2 }))
</script>

<style scoped></style>
