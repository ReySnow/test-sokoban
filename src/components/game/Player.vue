<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup lang="ts">
import keeper from '@/assets/keeper.png'
import { usePositon } from '@/composables/usePosition'
import { usePlayerStore } from '@/store/player'
import { useMove } from './player'

useMove()
const { player } = usePlayerStore()
const { position } = usePositon(player)
</script>

<style scoped></style>
