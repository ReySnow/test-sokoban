<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import keeper from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
import { useMove } from './player'

useMove()
const { position } = usePositon()

function usePositon() {
  const { player } = usePlayerStore()
  const STEP = 32
  const position = computed(() => {
    return {
      left: player.x * STEP + 'px',
      top: player.y * STEP + 'px'
    }
  })
  return { position }
}
</script>

<style scoped></style>
