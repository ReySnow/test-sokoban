<template>
  <div class="absolute" :style="position">
    <img :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from '@/assets/cargo.png'
import { usePositon } from '@/composables/usePosition'

interface Props {
  x: number
  y: number
}
const props = defineProps<Props>()
const { position } = usePositon(props)
</script>

<style scoped></style>
