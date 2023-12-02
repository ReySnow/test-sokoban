<template>
  <div class="absolute" :style="position">
    <img :src="targetImg" />
  </div>
</template>

<script setup lang="ts">
import targetImg from '@/assets/target.png'
import { usePositon } from '@/composables/usePosition'

interface Props {
  x: number
  y: number
}
const props = defineProps<Props>()
const { position } = usePositon(props)
</script>

<style scoped></style>
