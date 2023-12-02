<template>
  <div class="absolute" :style="position">
    <img :src="cargo.onTarget ? cargoOnTargetImg : cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from '@/assets/cargo.png'
import cargoOnTargetImg from '@/assets/cargo_on_target.png'
import { usePositon } from '@/composables/usePosition'
import type { Cargo } from '@/store/cargo'

interface Props {
  cargo: Cargo
}
const props = defineProps<Props>()
const { position } = usePositon(props.cargo)
</script>

<style scoped></style>
