<template>
  <div>
    <Map></Map>
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y"></Target>
    </template>
    <Player></Player>
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :cargo="cargo"></Cargo>
    </template>
    <div v-if="game.isGameCompleted">
      <button @click="handleToNextLevel">下一关</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cargo from '@/components/game/Cargo.vue'
import Map from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'
import Target from '@/components/game/Target.vue'
import { gameData } from '@/game/gameData'
import { useCargoStore } from '@/store/cargo'
import { useGameStore } from '@/store/game'
import { useTargetStore } from '@/store/target'

const { targets } = useTargetStore()
const { cargos } = useCargoStore()
const { game, setupGame, toNextLevel } = useGameStore()

setupGame(gameData)

function handleToNextLevel() {
  toNextLevel()
}
</script>

<style scoped></style>
