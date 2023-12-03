<template>
  <div>
    <Map></Map>
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y"></Target>
    </template>
    <Player></Player>
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo"></Cargo>
    </template>
    <div v-if="game.isGameCompleted">
      <button>下一关</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { levelGameData } from '@/game/gameData'
import { useCargoStore } from '@/store/cargo'
import { useGameStore } from '@/store/game'
import { useTargetStore } from '@/store/target'
import Cargo from './Cargo.vue'
import Map from './Map.vue'
import Player from './Player.vue'
import Target from './Target.vue'

const { targets } = useTargetStore()
const { cargos } = useCargoStore()
const { game, setupGame } = useGameStore()

setupGame(levelGameData)
</script>

<style scoped></style>
