<template>
  <div>
    <Map></Map>

    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y"></Target>
    </template>
    <Player></Player>
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCargoStore } from '@/store/cargo'
import { useTargetStore } from '@/store/target'
import Cargo from './Cargo.vue'
import Map from './Map.vue'
import Player from './Player.vue'
import Target from './Target.vue'

const { targets } = useTargetStore()
const { cargos, addCarge, createCargo } = useCargoStore()

addCarge(createCargo({ x: 2, y: 2 }))
</script>

<style scoped></style>
