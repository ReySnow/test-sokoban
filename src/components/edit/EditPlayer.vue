<template>
  <div class="absolute border border-white" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup lang="ts">
import keeper from '@/assets/keeper.png'
import { STEP_EDIT, usePositon } from '@/composables/usePosition'
import { useEditPlayerStore } from '@/store/edit/editPlayer'

const { player } = useEditPlayerStore()
const { position } = usePositon(player, STEP_EDIT)
</script>

<style scoped></style>
